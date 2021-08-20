import React from 'react';
// import { render, RenderResult, fireEvent, wait } from '@testing-library/react';
import { render, shallow, mount, ReactWrapper } from 'enzyme';
import Menu, { MenuProps } from '../menu';
jest.mock('../../Icon', () => {
  return () => {
    return <i className="fa" />;
  };
});
jest.mock('react-transition-group', () => {
  return {
    CSSTransition: (props: any) => {
      return props.children;
    },
  };
});
const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test',
};
const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
  defaultOpenSubMenus: ['4'],
};
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <Menu.Item>active</Menu.Item>
      <Menu.Item disabled>disabled</Menu.Item>
      <Menu.Item>xyz</Menu.Item>
      <Menu.SubMenuItem title="dropdown">
        <Menu.Item>drop1</Menu.Item>
      </Menu.SubMenuItem>
      <Menu.SubMenuItem title="opened">
        <Menu.Item>opened1</Menu.Item>
      </Menu.SubMenuItem>
    </Menu>
  );
};

let wrapper: ReactWrapper,
  wrapper2: ReactWrapper,
  menuElement: ReactWrapper,
  activeElement: ReactWrapper,
  disabledElement: ReactWrapper;
describe('test Menu and MenuItem component in default(horizontal) mode', () => {
  beforeEach(() => {
    wrapper = mount(generateMenu(testProps));
    menuElement = wrapper.find({ 'data-testid': 'test-menu' });
    activeElement = wrapper.find('.is-active');
    disabledElement = wrapper.find('.is-disabled');
  });
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toMatchSnapshot();
    expect(menuElement.hasClass('viking-menu test')).toBeTruthy();
    expect(menuElement.find('li').length).toEqual(7);
    expect(activeElement.hasClass('menu-item is-active')).toBeTruthy();
    expect(disabledElement.hasClass('menu-item is-disabled')).toBeTruthy();
  });
  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.find('.menu-item').at(2);
    thirdItem.simulate('click');
    expect(testProps.onSelect).toHaveBeenCalledWith('2');
    expect(
      wrapper.find('.menu-item').at(2).hasClass('menu-item is-active'),
    ).toBeTruthy();
    expect(
      wrapper.find('.menu-item').at(0).hasClass('menu-item is-active'),
    ).not.toBeTruthy();
    disabledElement.simulate('click');
    expect(disabledElement.hasClass('menu-item is-active')).not.toBeTruthy();
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1');
  });
  it('should render the correct default menu with SubMenu', async () => {
    expect(wrapper.find('.submenu-item')).toHaveLength(2);
    expect(wrapper.find('.menu-item')).toHaveLength(7);
    expect(wrapper).toMatchSnapshot();
  });
});
describe('test Menu and MenuItem component in vertical mode', () => {
  beforeEach(() => {
    wrapper2 = mount(generateMenu(testVerProps));
  });
  it('should render vertical mode when mode is set to vertical', () => {
    const menuElement = wrapper2.find({ 'data-testid': 'test-menu' });
    expect(menuElement.hasClass('menu-vertical')).toBeTruthy();
  });
  it('should render correct dropdownItem and openedItem based on default props for vertical mode', () => {
    const dropDownItem = wrapper2.find({ title: 'dropdown' });
    expect(
      dropDownItem.find('.submenu-item').hasClass('is-opened'),
    ).not.toBeTruthy();
    const opendItem = wrapper2.find({ title: 'opened' });
    expect(opendItem.find('.submenu-item').hasClass('is-opened')).toBeTruthy();
  });
});
