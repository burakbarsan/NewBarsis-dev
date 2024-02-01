import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
//import logo
import logoSm from "../assets/images/logo-sm.png";
import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";

//Import Components
import VerticalLayout from "./VerticalLayouts";
import TwoColumnLayout from "./TwoColumnLayout";
import {
  Container,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Form,
} from "reactstrap";
import HorizontalLayout from "./HorizontalLayout";
import SearchOption from "Components/Common/SearchOption";

const Sidebar = ({ layoutType }: any) => {
  const [search, setSearch] = useState<boolean>(false);
  const toogleSearch = () => {
    setSearch(!search);
  };

  useEffect(() => {
    var verticalOverlay = document.getElementsByClassName("vertical-overlay");
    if (verticalOverlay) {
      verticalOverlay[0].addEventListener("click", function () {
        document.body.classList.remove("vertical-sidebar-enable");
      });
    }
  });

  const addEventListenerOnSmHoverMenu = () => {
    // add listener Sidebar Hover icon on change layout from setting
    if (
      document.documentElement.getAttribute("data-sidebar-size") === "sm-hover"
    ) {
      document.documentElement.setAttribute(
        "data-sidebar-size",
        "sm-hover-active"
      );
    } else if (
      document.documentElement.getAttribute("data-sidebar-size") ===
      "sm-hover-active"
    ) {
      document.documentElement.setAttribute("data-sidebar-size", "sm-hover");
    } else {
      document.documentElement.setAttribute("data-sidebar-size", "sm-hover");
    }
  };
  
  return (
    <React.Fragment>
      <div className="app-menu navbar-menu navbar-menu-color">
        <div className="navbar-brand-box sidebar-log">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={logoSm} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logoDark} alt="" height="17" />
            </span>
          </Link>

          <Link to="/" className="logo logo-light">
            <span className="logo-sm">
              <svg
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.2 14.868C32.08 16.788 34 20.052 34 23.796C34 29.7 29.2 34.5 23.296 34.5H0.4V0.899998H21.568C26.56 0.899998 30.64 4.98 30.64 9.972C30.64 11.796 30.112 13.476 29.2 14.868ZM6.4 6.9V13.044H21.616C23.296 13.044 24.688 11.652 24.688 9.972C24.688 8.292 23.296 6.9 21.616 6.9H6.4ZM23.296 28.5V28.452C25.888 28.452 28 26.34 28 23.748C28 21.156 25.888 19.044 23.296 19.044H6.4V28.5H23.296Z"
                  fill="#1545B2"
                />
              </svg>
            </span>
            <span className="logo-lg">
              <svg
                width="188"
                height="35"
                viewBox="0 0 188 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.2 14.868C32.08 16.788 34 20.052 34 23.796C34 29.7 29.2 34.5 23.296 34.5H0.4V0.899998H21.568C26.56 0.899998 30.64 4.98 30.64 9.972C30.64 11.796 30.112 13.476 29.2 14.868ZM6.4 6.9V13.044H21.616C23.296 13.044 24.688 11.652 24.688 9.972C24.688 8.292 23.296 6.9 21.616 6.9H6.4ZM23.296 28.5V28.452C25.888 28.452 28 26.34 28 23.748C28 21.156 25.888 19.044 23.296 19.044H6.4V28.5H23.296ZM66.9468 28.5L70.0188 34.5H63.2988L60.2268 28.5L52.8828 14.1L45.5388 28.5L42.4668 34.5H35.7468L38.8188 28.5L52.8828 0.899998L66.9468 28.5ZM95.2356 18.996L100.036 28.548L103.108 34.548H96.3876L93.3156 28.548L90.0996 22.26L89.9556 21.972C88.8996 20.244 87.0276 19.092 84.8676 19.092H78.8676V34.548H72.8676V0.947997H94.0836C96.5796 0.947997 98.8356 1.956 100.468 3.588C102.1 5.268 103.108 7.524 103.108 10.02C103.108 13.668 100.948 16.836 97.8276 18.276C97.0116 18.66 96.1476 18.9 95.2356 18.996ZM78.8676 13.14L94.0836 13.092C94.5156 13.092 94.9476 12.996 95.3316 12.804C96.4356 12.324 97.1556 11.22 97.1556 10.02C97.1556 8.916 96.5796 8.148 96.2436 7.812C95.8596 7.428 95.1396 6.948 94.0836 6.948H78.8676V13.14ZM139.754 10.164L133.754 10.212V10.02C133.754 8.34 132.362 6.948 130.682 6.948H117.05C115.37 6.948 113.978 8.34 113.978 10.02V10.212C113.978 11.892 115.37 13.284 117.05 13.284H129.146C132.266 13.284 135.05 14.628 136.97 16.74C137.114 16.884 137.21 17.028 137.354 17.172C138.842 18.996 139.754 21.348 139.754 23.892C139.754 29.748 135.002 34.5 129.146 34.5H118.634C112.778 34.5 108.026 29.748 108.026 23.892H114.026C114.026 26.436 116.09 28.5 118.634 28.5H129.146C131.69 28.5 133.802 26.436 133.802 23.892C133.802 21.348 131.69 19.284 129.146 19.284H117.05C114.602 19.284 112.394 18.324 110.762 16.74C110.33 16.308 109.946 15.828 109.61 15.3C108.602 13.86 108.026 12.084 108.026 10.164V9.972C108.026 4.98 112.058 0.899998 117.05 0.899998H130.682C135.674 0.899998 139.754 4.98 139.754 9.972V10.164ZM150.541 34.5H144.541V0.899998H150.541V34.5ZM187.098 10.164L181.098 10.212V10.02C181.098 8.34 179.706 6.948 178.026 6.948H164.394C162.714 6.948 161.322 8.34 161.322 10.02V10.212C161.322 11.892 162.714 13.284 164.394 13.284H176.49C179.61 13.284 182.394 14.628 184.314 16.74C184.458 16.884 184.554 17.028 184.698 17.172C186.186 18.996 187.098 21.348 187.098 23.892C187.098 29.748 182.346 34.5 176.49 34.5H165.978C160.122 34.5 155.37 29.748 155.37 23.892H161.37C161.37 26.436 163.434 28.5 165.978 28.5H176.49C179.034 28.5 181.146 26.436 181.146 23.892C181.146 21.348 179.034 19.284 176.49 19.284H164.394C161.946 19.284 159.738 18.324 158.106 16.74C157.674 16.308 157.29 15.828 156.954 15.3C155.946 13.86 155.37 12.084 155.37 10.164V9.972C155.37 4.98 159.402 0.899998 164.394 0.899998H178.026C183.018 0.899998 187.098 4.98 187.098 9.972V10.164Z"
                  fill="#1545B2"
                />
              </svg>
            </span>
          </Link>
          <div className="search-lg">
            <SearchOption />
          </div>

          <button
            onClick={addEventListenerOnSmHoverMenu}
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line"></i>
          </button>
        </div>
        {layoutType === "horizontal" ? (
          <div id="scrollbar">
            <Container fluid>
              <div id="two-column-menu"></div>
              <ul className="navbar-nav" id="navbar-nav">
                <HorizontalLayout />
              </ul>
            </Container>
          </div>
        ) : layoutType === "twocolumn" ? (
          <React.Fragment>
            <TwoColumnLayout layoutType={layoutType} />
            <div className="sidebar-background"></div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <SimpleBar id="scrollbar" className="h-100">
              <Container fluid>
                <div id="two-column-menu"></div>
                <ul className="navbar-nav" id="navbar-nav">
                  <VerticalLayout layoutType={layoutType} />
                </ul>
              </Container>
            </SimpleBar>
            <div className="sidebar-background"></div>
          </React.Fragment>
        )}
      </div>
      <div className="vertical-overlay"></div>
    </React.Fragment>
  );
};

export default Sidebar;
