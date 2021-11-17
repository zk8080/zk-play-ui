import React from 'react';
import { Upload } from 'zk-play-ui';

export default () => (
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    name="my_file"
    data={{ test: '123' }}
    headers={{
      'Customer-Header': 'ZK',
    }}
    withCredentials={true}
    accept={'.png'}
    multiple={true}
  />
);
