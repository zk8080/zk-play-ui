/*
 * @Author: your name
 * @Date: 2021-01-27 21:36:51
 * @LastEditTime: 2021-01-31 15:04:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vikingship/src/components/Button/button.test.tsx
 */
import React from 'react';
import { render, shallow } from 'enzyme';
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
  // it('should render the correct component based on different props', () => {
  //   const wrapper = render(<Button {...testProps}>Nice</Button>);
  //   const element = wrapper.getByText('Nice');
  //   expect(element).toBeInTheDocument();
  //   expect(element).toHaveClass('btn-lg btn-primary klass');
  // })
  // it('should render a link when btnType equals link and href is provided', () => {
  //   const wrapper = render(<Button btnType="link" href="www.baidu.com">Link</Button>);
  //   const element = wrapper.getByText('Link');
  //   expect(element).toBeInTheDocument();
  //   expect(element.tagName).toEqual('A');
  //   expect(element).toHaveClass('btn btn-link');
  // })
  // it('should render disabled button when disabled set true', () => {
  //   const wrapper = render(<Button {...disabledProps}>Nice</Button>)
  //   const element = wrapper.getByText('Nice') as HTMLButtonElement
  //   expect(element).toBeInTheDocument()
  //   expect(element.disabled).toBeTruthy()
  //   fireEvent.click(element)
  //   expect(disabledProps.onClick).not.toHaveBeenCalled()
  // })
});
