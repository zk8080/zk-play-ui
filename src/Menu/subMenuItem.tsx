/*
 * @Author: your name
 * @Date: 2021-03-01 22:32:11
 * @LastEditTime: 2021-08-15 17:38:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vikingship/src/components/Menu/subMenuItem.tsx
 */
import React, {
  FC,
  useContext,
  FunctionComponentElement,
  useState,
} from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';
import Icon from '../Icon/index';
import Transition from '../Transition/index';

export interface SubMenuItemProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenuItem: FC<SubMenuItemProps> = (props) => {
  const context = useContext(MenuContext);
  const { mode, defaultOpenSubMenus } = context;
  const defaultOpens = defaultOpenSubMenus as Array<string>;
  const { index, title, className, children } = props;
  const isOpend =
    index && mode === 'vertical' ? defaultOpens.includes(index) : false;
  const [menuOpen, setMenuOpen] = useState(isOpend);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': mode === 'vertical',
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 300);
  };

  const clickEvents =
    mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {};
  const hoverEvents =
    mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};

  const renderClidren = () => {
    const subMenuClasses = classNames('viking-submenu', {
      'menu-opened': menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error(
          'Warning: SubMenuItem has a child which is not a MenuItem component',
        );
      }
    });
    return (
      <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    );
  };
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderClidren()}
    </li>
  );
};

SubMenuItem.displayName = 'SubMenuItem';
export default SubMenuItem;
