import React, { FC, useRef, ChangeEvent, useState } from 'react';
import classNames from 'classnames';
import Button from '../Button';
import axios from 'axios';
import UploadList from './uploadList';

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';
export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadProps {
  /**
   * @description 上传地址
   */
  action: string;
  /**
   * @description 上传的文件列表
   */
  defaultFileList?: UploadFile[];
  /**
   * @description 上传文件前的钩子函数，参数为上传的文件，返回false或者Promise时停止上传
   */
  beforeUpload?: (file: File) => boolean | Promise<File>;
  /**
   * @description 上传文件时的钩子函数
   */
  onProgress?: (percentage: number, file: UploadFile) => void;
  /**
   * @description 上传文件成功的钩子函数
   */
  onSuccess?: (data: any, file: UploadFile) => void;
  /**
   * @description 上传文件失败的钩子函数
   */
  onError?: (err: any, file: UploadFile) => void;
  /**
   * @description 文件状态改变时的钩子函数
   */
  onChange?: (file: UploadFile) => void;
  /**
   * @description 文件列表移除文件时的钩子函数
   */
  onRemove?: (file: UploadFile) => void;
  /**
   * @description 上传文件字段名字
   */
  name?: string;
  /**
   * @description 上传时额为附带的参数
   */
  data?: { [key: string]: any };
  /**
   * @description 上传文件的请求头
   */
  headers?: { [key: string]: any };
  /**
   * @description 上传文件是否支持发送cookie
   */
  withCredentials?: boolean;
  /**
   * @description  接受上传的文件类型
   */
  accept?: string;
  /**
   * @description  是否支持多选
   */
  multiple?: boolean;
  /**
   * @description  是否支持拖拽上传
   */
  drag?: boolean;
}

const prefixCls = 'zk-play-upload';

const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    onError,
    onProgress,
    onSuccess,
    beforeUpload,
    onChange,
    defaultFileList,
    onRemove,
    name,
    data,
    headers,
    withCredentials,
    accept,
    multiple,
    children,
    drag
  } = props;
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || []);
  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>,
  ) => {
    setFileList((prevList) => {
      return prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 点击按钮
  const handleClick = () => {
    if (fileInputRef.current) {
      // 触发文件上传输入框点击事件
      fileInputRef.current.click();
    }
  };

  // 上传文件
  const uploadFiles = (files: FileList) => {
    const postFiles = Array.from(files);
    console.log(postFiles);
    postFiles.forEach((file) => {
      if (!beforeUpload) {
        postFile(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then((processedFile) => {
            postFile(processedFile);
          });
        } else if (result !== false) {
          postFile(file);
        }
      }
    });
  };

  // 上传文件请求
  const postFile = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    //setFileList([_file, ...fileList])
    setFileList((prevList) => {
      return [_file, ...prevList];
    });
    const formData = new FormData();
    formData.append(name || 'file', file);
    if (data) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          formData.append(key, data[key]);
        }
      }
    }
    axios
      .post(action, formData, {
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials,
        onUploadProgress: (e) => {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0;
          if (percentage < 100) {
            updateFileList(_file, {
              percent: percentage,
              status: 'uploading',
            });
            onProgress?.(percentage, _file);
          }
        },
      })
      .then((resp) => {
        console.log(resp);
        updateFileList(_file, { status: 'success', response: resp.data });
        onSuccess?.(resp.data, _file);
        onChange?.(_file);
      })
      .catch((error) => {
        console.log(error);
        updateFileList(_file, { status: 'error', error: error });
        onError?.(error, _file);
        onChange?.(_file);
      });
  };

  // 文件上传onchange
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    // 上传文件
    uploadFiles(files);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  // 文件列表删除
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter((item) => item.uid !== file.uid);
    });
    onRemove?.(file);
  };

  return (
    <div 
      className={prefixCls}
    >
      <div 
        className={`${prefixCls}-input`}
        onClick={handleClick}
      >
        {children}
        <input
          className={`${prefixCls}-file-input`}
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleFileChange}
          type="file"
          accept={accept}
          multiple={multiple}
        />
      </div>
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};

export default Upload;
