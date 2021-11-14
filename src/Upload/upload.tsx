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
  action: string;
  defaultFileList?: UploadFile[];
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: File) => void;
  onRemove?: (file: UploadFile) => void;
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
    formData.append(file.name, file);
    axios
      .post(action, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (e) => {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0;
          if (percentage < 100) {
            if (onProgress) {
              updateFileList(_file, {
                percent: percentage,
                status: 'uploading',
              });
              onProgress(percentage, file);
            }
          }
        },
      })
      .then((resp) => {
        console.log(resp);
        updateFileList(_file, { status: 'success', response: resp.data });
        onSuccess?.(resp.data, file);
        onChange?.(file);
      })
      .catch((error) => {
        console.log(error);
        updateFileList(_file, { status: 'error', error: error });
        onError?.(error, file);
        onChange?.(file);
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
    <div className={prefixCls}>
      <Button btnType="primary" onClick={handleClick}>
        Upload File
      </Button>
      <input
        className={`${prefixCls}-input`}
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
        type="file"
      />
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};

export default Upload;
