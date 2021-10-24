import React, { FC, useRef, ChangeEvent } from 'react';
import classNames from 'classnames';
// import {Button} from 'zk-play-ui';
import Button from '../Button';
// import '../Button/style/index.less';
import axios from 'axios';

export interface UploadProps {
  action: string;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
}

const prefixCls = 'zk-play-upload';

const Upload: FC<UploadProps> = (props) => {
  const { action, onError, onProgress, onSuccess } = props;
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
    postFiles.forEach((file) => {
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
                onProgress(percentage, file);
              }
            }
          },
        })
        .then((resp) => {
          console.log(resp);
          onSuccess?.(resp.data, file);
        })
        .catch((error) => {
          console.log(error);
          onError?.(error, file);
        });
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
    </div>
  );
};

export default Upload;
