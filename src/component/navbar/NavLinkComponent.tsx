import { NavLink } from 'react-router-dom';
import {
  NavigationActiveStyle,
  NavigationInactiveStyle,
} from '../styles/navbar/NavlinkComponentStyles';

/**
 * Proptypes for NavLinkComponent.
 */
export interface INavLinkComponentProps {
  to: string;
  text: string;
}

/**
 * Functional component for the navigation bar.
 *
 * @param props Props for the navigation bar.
 * @returns Navigation bar.
 */
export default function NavLinkComponent(props: INavLinkComponentProps) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        isActive ? `${NavigationActiveStyle}` : `${NavigationInactiveStyle}`
      }
    >
      {props.text}
    </NavLink>
  );
}
