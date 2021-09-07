/*
 * @Author: your name
 * @Date: 2021-09-07 21:32:51
 * @LastEditTime: 2021-09-07 22:44:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/src/AutoComplete/__test__/autoComplete.test.tsx
 */
import React from 'react';
import { config } from 'react-transition-group';
import AutoComplete, { AutoCompleteProps } from '../autoComplete';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';

config.disabled = true;
jest.useFakeTimers();

const testArray = [
  { value: 'ab', number: 11 },
  { value: 'abc', number: 1 },
  { value: 'b', number: 4 },
  { value: 'c', number: 15 },
];
const testProps: AutoCompleteProps = {
  fetchSuggestions: (query) => {
    return testArray.filter((item) => item.value.includes(query));
  },
  onSelect: jest.fn(),
  placeholder: 'auto-complete',
};

let wrapper: ReactWrapper, inputNode: ReactWrapper;
describe('test AutoComplete component', () => {
  beforeEach(() => {
    wrapper = mount(<AutoComplete {...testProps} />);
    inputNode = wrapper.find('input');
  });
  it('test basic AutoComplete behavior', async () => {
    // input change
    inputNode.simulate('change', { target: { value: 'a' } });
    await act(async () => {
      jest.advanceTimersByTime(500);
      wrapper.update();
    });
    // should have two suggestion items
    expect(wrapper.find('.suggestion-item').length).toEqual(2);
    // //click the first item
    wrapper.find('.suggestion-item').first().simulate('click');
    expect(testProps.onSelect).toHaveBeenCalledWith({
      value: 'ab',
      number: 11,
    });
    // //fill the input
    expect(inputNode.find({ value: 'ab' })).toBeTruthy();
  });
  it('should provide keyboard support', async () => {
    // input change
    inputNode.simulate('change', { target: { value: 'a' } });
    await act(async () => {
      jest.advanceTimersByTime(500);
      wrapper.update();
    });

    // arrow down
    inputNode.simulate('keyDown', { keyCode: 40 });
    expect(
      wrapper.find('.suggestion-item').at(0).hasClass('is-active'),
    ).toBeTruthy();
    // arrow down
    inputNode.simulate('keyDown', { keyCode: 40 });
    expect(
      wrapper.find('.suggestion-item').at(1).hasClass('is-active'),
    ).toBeTruthy();
    //arrow up
    inputNode.simulate('keyDown', { keyCode: 38 });
    expect(
      wrapper.find('.suggestion-item').at(0).hasClass('is-active'),
    ).toBeTruthy();
    // // press enter
    inputNode.simulate('keyDown', { keyCode: 13 });
    expect(testProps.onSelect).toHaveBeenCalledWith({
      value: 'ab',
      number: 11,
    });
  });
  it('click outside should hide the dropdown', async () => {
    // input change
    inputNode.simulate('change', { target: { value: 'a' } });
    await act(async () => {
      jest.advanceTimersByTime(500);
      wrapper.update();
    });
    // TODO
    // document.simulate('click');
    // expect(wrapper.find('.suggestion-item').length).toEqual(0);
  });
});
