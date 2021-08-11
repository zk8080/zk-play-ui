/*
 * @Author: your name
 * @Date: 2021-01-27 21:36:51
 * @LastEditTime: 2021-08-11 21:05:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vikingship/src/components/Button/button.test.tsx
 */
import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Button, { ButtonProps } from './index';

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'klass',
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe('test Button Component', () => {
  it('should render the correct default button', () => {
    const wrapper = shallow(<Button {...defaultProps}>Nice</Button>);
    expect(wrapper.text()).toEqual('Nice');
    expect(wrapper.hasClass('btn-default'));
    wrapper.simulate('click');
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('should render the correct component based on different props', () => {
    const wrapper = shallow(<Button {...testProps}>Nice</Button>);
    const element = wrapper.find('.klass');
    expect(element.hasClass('btn-lg')).toBeTruthy();
  });
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = shallow(
      <Button btnType="link" href="www.baidu.com">
        Link
      </Button>,
    );
    expect(wrapper.name()).toEqual('a');
    expect(wrapper.hasClass('btn btn-link')).toBeTruthy();
  });
  it('should render disabled button when disabled set true', () => {
    const wrapper = mount(<Button {...disabledProps}>Nice</Button>);
    expect(wrapper.prop('disabled')).toBeTruthy();
    wrapper.simulate('click');
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
