import { NavLink } from 'react-router-dom';

interface ISubNavigationItem {
  title: string;
  path: string;
}

export interface ISubNavigationProps {
  items: ISubNavigationItem[];
  heading: string;
}

export default function SubNavigation(props: ISubNavigationProps) {
  return (
    <ul className="">
      <li className="flex flex-row justify-between items-center">
        <span className="text-lg font-semibold">{props.heading}</span>
      </li>
      {props.items.map((item, index) => (
        <li key={index} className="text-sm font-semibold flex flex-wrap">
          <NavLink className="m-1 mx-2" to={item.path}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
