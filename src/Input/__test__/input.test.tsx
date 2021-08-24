/*
 * @Author: your name
 * @Date: 2021-08-23 22:04:47
 * @LastEditTime: 2021-08-24 23:12:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zk-play-ui/src/Input/__test__/input.test.tsx
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Input, InputProps } from '../input';

const testState = { test: '' };

const defaultProps: InputProps = {
  onChange: (e) => {
    testState.test = e.target.value;
  },
  placeholder: 'test-input',
};
describe('test Input component', () => {
  it('should render the correct default Input', () => {
    const wrapper = shallow(<Input {...defaultProps} />);
    expect(wrapper.find('input').hasClass('zk-play-input-inner')).toBeTruthy();
    wrapper.find('input').simulate('change', { target: { value: '23' } });
    expect(testState.test).toEqual('23');
  });
  it('should render the disabled Input on disabled property', () => {
    const wrapper = shallow(<Input disabled placeholder="disabled" />);
    expect(
      wrapper.find('.zk-play-input-wrapper').hasClass('is-disabled'),
    ).toBeTruthy();
  });
  it('should render different input sizes on size property', () => {
    const wrapper = shallow(<Input placeholder="sizes" size="lg" />);
    expect(
      wrapper.find('.zk-play-input-wrapper').hasClass('zk-play-input-size-lg'),
    ).toBeTruthy();
  });
  it('should render prepand and append element on prepand/append property', () => {
    const wrapper = mount(
      <Input placeholder="pend" prepend="https://" append=".com" />,
    );
    expect(
      wrapper
        .find('.zk-play-input-wrapper')
        .hasClass(
          'zk-play-input-group zk-play-input-append zk-play-input-prepend',
        ),
    ).toBeTruthy();
    expect(wrapper.find('.zk-play-input-group-prepend').text()).toEqual(
      'https://',
    );
    expect(wrapper.find('.zk-play-input-group-append').text()).toEqual('.com');
  });
});
