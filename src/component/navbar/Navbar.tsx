import { NavLink } from "react-router-dom";
import NavLinkComponent from "./NavLinkComponent";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
  IconButton,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { Fragment, useState } from "react";
import { NavbarMaxWidth } from "../styles/navbar/NavbarStyles";

// Type definitions for navigation menu
type NavItem = { name: string; path: string };

export type NavbarProps = {
  navbarTitle: string;
  navbarIcon?: string;
  navBarMenuItems: NavItem[];
};

const props: NavbarProps = {
  navbarTitle: "Telegramonic.com",
  navBarMenuItems: [
    { name: "Home", path: "/home" },
    { name: "Channels", path: "/channels" },
    { name: "Groups", path: "/groups" },
    { name: "Stickers", path: "/stickers" },
    { name: "Bots", path: "/bots" },
    { name: "Blogs", path: "/blogs" },
    { name: "Themes", path: "/themes" },
    { name: "Games", path: "/games" },
  ],
};

/**
 * Proptypes for NavComponent.
 */
export interface INavbarComponentProps {}

/**
 * Functional component for the navigation bar.
 *
 * @returns Navigation bar.
 */
export default function NavbarComponent() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div
        className={
          `${NavbarMaxWidth}` +
          "xl:m-auto lg:mx-10 m-3 flex justify-between items-center shadow-lg rounded-md px-5 py-3 bg-slate-200"
        }
      >
        <div className="flex flex-row items-start mx-3">
          <NavLink to="/" className="hover:scale-105 transition-all">
            <img
              src={require("../../assets/images/LogoNoBackground.png")}
              className="h-8 md:h-12 me-3"
              alt="Telegramonic.com Logo"
              loading="lazy"
            />
          </NavLink>
        </div>
        <div className="flex-col items-end justify-center lg:hidden">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setShowNav(!showNav);
            }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="flex-col items-start justify-start hidden lg:block">
          <NavigationButtonProvider />
        </div>
      </div>
      <NavigationButtonUnderHood
        showNav={showNav}
        handler={() => {
          setShowNav(false);
        }}
      />
    </>
  );
}

/**
 * Functional component for the navigation bar with button support.
 *
 * @param props Props for the navigation bar.
 * @returns Navigation bar.
 */
function NavigationButtonUnderHood(props: {
  showNav: boolean;
  handler: () => void;
}) {
  return (
    <div className="block md:hidden">
      <Fragment>
        <Drawer anchor={"left"} open={props.showNav} onClose={props.handler}>
          <img
            src={require("../../assets/images/LogoNoBackground.png")}
            className="h-8 md:h-10 me-3 m-1"
            alt="Telegramonic.com Logo"
            loading="lazy"
          />
          <div className=" mx-3 flex flex-col text-sm md:text-base lg:hidden w-36 md:w-56">
            <NavlistProvider />
          </div>{" "}
        </Drawer>
      </Fragment>
    </div>
  );
}

/**
 * Functional component for the navigation list support.
 *
 * @returns Navigation bar.
 */
function NavlistProvider() {
  return (
    <>
      <div className=" flex flex-col m-1">
        {props.navBarMenuItems.map((item) => {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreOutlined />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <NavLink to={item.path}>{item.name}</NavLink>
              </AccordionSummary>
              <AccordionDetails sx={{ m: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </>
  );
}

/**
 * Functional component for the navigation bar with button support.
 *
 * @returns Navigation bar.
 */
function NavigationButtonProvider() {
  return (
    <div className="flex flex-row">
      {props.navBarMenuItems.map((item) => {
        return <MenuListComposition path={item.path} name={item.name} />;
      })}
    </div>
  );
}

/**
 * Functional component for the navigation bar with button support.
 * @param item Props for the navigation bar.
 * @returns Navigation bar.
 */
function MenuListComposition(item: { path: string; name: string }) {
  return (
    <>
      <NavLinkComponent to={item.path} text={item.name} />
      <div className="flex flex-row"></div>
    </>
  );
}
