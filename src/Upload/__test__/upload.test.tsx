import React from 'react';
import axios from 'axios';
// import { render, RenderResult, fireEvent, wait, createEvent } from '@testing-library/react'
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Upload, { UploadProps } from '../upload';

jest.mock('../../Icon/index', () => {
  return ({ icon, onClick }) => {
    return <span onClick={onClick}>{icon}</span>;
  };
});

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

export async function waitForComponentToPaint<P = {}>(
  wrapper: ReactWrapper<P>,
  amount = 0,
) {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, amount));
    wrapper.update();
  });
}

const testProps: UploadProps = {
  action: 'https://getman.cn/mock/upload',
  onSuccess: jest.fn(),
  onChange: jest.fn(),
  onRemove: jest.fn(),
  drag: true,
};
let wrapper: ReactWrapper, fileInput: ReactWrapper;
const testFile = new File(['xyz'], 'test.png', { type: 'image/png' });
describe('test upload component', () => {
  beforeEach(() => {
    wrapper = mount(<Upload {...testProps}>Click to upload</Upload>);
    fileInput = wrapper.find('.zk-play-upload-file-input');
    // uploadArea = wrapper.queryByText('Click to upload')
  });
  it('upload process should works fine', async () => {
    // mockedAxios.post.mockImplementation(() => {
    //   return Promise.resolve({'data': 'cool'})
    // })
    mockedAxios.post.mockResolvedValue({ data: 'cool' });
    expect(wrapper.text()).toEqual('Click to upload');
    expect(fileInput).toBeTruthy();
    fileInput.simulate('change', { target: { files: [testFile] } });
    waitForComponentToPaint(wrapper);
    expect(wrapper.find('.zk-play-upload-list').find('li').length).toEqual(1);
    expect(
      wrapper.find('.zk-play-upload-list>li>.file-name').text(),
    ).toBeTruthy();
    // expect(queryByText('check-circle')).toBeInTheDocument()
    // expect(testProps.onSuccess).toHaveBeenCalledWith('cool', testFile)
    // expect(testProps.onChange).toHaveBeenCalledWith(testFile)

    // //remove the uploaded file
    // expect(queryByText('times')).toBeInTheDocument()
    // fireEvent.click(queryByText('times'))
    // expect(queryByText('test.png')).not.toBeInTheDocument()
    // expect(testProps.onRemove).toHaveBeenCalledWith(expect.objectContaining({
    //   raw: testFile,
    //   status: 'success',
    //   name: 'test.png'
    // }))
  });
  // it('drag and drop files should works fine', async () => {
  //   fireEvent.dragOver(uploadArea)
  //   expect(uploadArea).toHaveClass('is-dragover')
  //   fireEvent.dragLeave(uploadArea)
  //   expect(uploadArea).not.toHaveClass('is-dragover')
  //   const mockDropEvent = createEvent.drop(uploadArea)
  //   Object.defineProperty(mockDropEvent, "dataTransfer", {
  //     value: {
  //       files: [testFile]
  //     }
  //   })
  //   fireEvent(uploadArea, mockDropEvent)

  //   await wait(() => {
  //     expect(wrapper.queryByText('test.png')).toBeInTheDocument()
  //   })
  //   expect(testProps.onSuccess).toHaveBeenCalledWith('cool', testFile)
  // })
});
