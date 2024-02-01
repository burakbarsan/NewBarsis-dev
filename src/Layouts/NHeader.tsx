import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle, Form } from "reactstrap";

//import images
import logoSm from "../assets/images/logo-sm.png";
import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";

//import Components
import SearchOption from "../Components/Common/SearchOption";
import LanguageDropdown from "../Components/Common/LanguageDropdown";
import WebAppsDropdown from "../Components/Common/WebAppsDropdown";
import MyCartDropdown from "../Components/Common/MyCartDropdown";
import FullScreenDropdown from "../Components/Common/FullScreenDropdown";
import NotificationDropdown from "../Components/Common/NotificationDropdown";
import ProfileDropdown from "../Components/Common/ProfileDropdown";
import LightDark from "../Components/Common/LightDark";

import { changeSidebarVisibility } from "../slices/thunks";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { isDate } from "lodash";
import HeaderButton from "Components/Header/HeaderButton";
import ExchangeRates from "Components/Header/ExchangeRates";

const HeaderTypes = {
  DEFAULT: "DEFAULT",
  AIR: "AIR",
  OCEAN: "OCEAN",
};

const Header = ({
  onChangeLayoutMode,
  layoutModeType,
  headerClass,
  headerType,
  isCollapsedSearch,
  isSearch,
  isNewLoad,
  isCopy,
  isSave,
  isLock,
  isDelete,
  isClose,
  isLanguage,
  isProfile,
  isFullScreenMode,
  isNotification,
  isMoreButton,
  isExchangeRates,
}: any) => {
  const [search, setSearch] = useState<boolean>(false);
  const toogleSearch = () => {
    setSearch(!search);
  };
  const dispatch: any = useDispatch();

  const selectDashboardData = createSelector(
    (state: any) => state.Layout.sidebarVisibilitytype,
    (sidebarVisibilitytype) => sidebarVisibilitytype
  );
  // Inside your component
  const sidebarVisibilitytype = useSelector(selectDashboardData);

  const toogleMenuBtn = () => {
    var windowSize = document.documentElement.clientWidth;
    const humberIcon = document.querySelector(".hamburger-icon") as HTMLElement;
    dispatch(changeSidebarVisibility("show"));

    if (windowSize > 767) humberIcon.classList.toggle("open");

    //For collapse horizontal menu
    if (document.documentElement.getAttribute("data-layout") === "horizontal") {
      document.body.classList.contains("menu")
        ? document.body.classList.remove("menu")
        : document.body.classList.add("menu");
    }

    //For collapse vertical and semibox menu
    if (
      sidebarVisibilitytype === "show" &&
      (document.documentElement.getAttribute("data-layout") === "vertical" ||
        document.documentElement.getAttribute("data-layout") === "semibox")
    ) {
      if (windowSize < 1025 && windowSize > 767) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.documentElement.getAttribute("data-sidebar-size") === "sm"
          ? document.documentElement.setAttribute("data-sidebar-size", "")
          : document.documentElement.setAttribute("data-sidebar-size", "sm");
      } else if (windowSize > 1025) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.documentElement.getAttribute("data-sidebar-size") === "lg"
          ? document.documentElement.setAttribute("data-sidebar-size", "sm")
          : document.documentElement.setAttribute("data-sidebar-size", "lg");
      } else if (windowSize <= 767) {
        document.body.classList.add("vertical-sidebar-enable");
        document.documentElement.setAttribute("data-sidebar-size", "lg");
      }
    }

    //Two column menu
    if (document.documentElement.getAttribute("data-layout") === "twocolumn") {
      document.body.classList.contains("twocolumn-panel")
        ? document.body.classList.remove("twocolumn-panel")
        : document.body.classList.add("twocolumn-panel");
    }
  };
  switch (headerType) {
    case HeaderTypes.DEFAULT:
      isCollapsedSearch = isCollapsedSearch ?? true;
      isFullScreenMode = isFullScreenMode ?? true;
      isLanguage = isLanguage ?? true;
      isNotification = isNotification ?? true;
      isProfile = isProfile ?? true;
      isSave = isSave ?? false;
      isLock = isLock ?? false;
      isDelete = isDelete ?? false;
      isNewLoad = isNewLoad ?? false;
      break;
    case HeaderTypes.AIR:
      isNewLoad = isNewLoad ?? true;
      isSearch = isSearch ?? true;
      isCopy = isCopy ?? true;
      isSave = isSave ?? true;
      isLock = isLock ?? true;
      isDelete = isDelete ?? true;
      isClose = isClose ?? true;
      isLanguage = isLanguage ?? true;
      isProfile = isProfile ?? true;
      break;
    case HeaderTypes.OCEAN:
      isExchangeRates = isExchangeRates ?? true;
      isMoreButton = isMoreButton ?? true;
      isLanguage = isLanguage ?? true;
      isProfile = isProfile ?? true;
      break;
    default:
  }

  return (
    <React.Fragment>
      <header id="page-topbar" className={headerClass}>
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex align-items-center">
              <div className="navbar-brand-box horizontal-logo">
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
                    <img src={logoSm} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLight} alt="" height="17" />
                  </span>
                </Link>
              </div>

              <button
                onClick={toogleMenuBtn}
                type="button"
                className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger shadow-none"
                id="topnav-hamburger-icon"
              >
                <span className="hamburger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>

              {isNewLoad && (
                <HeaderButton
                  buttonText="Yeni Yük Kayıt"
                  icon={<i className="ri-add-fill"></i>}
                  onClick={() => {}}
                />
              )}

              {isCollapsedSearch && <SearchOption />}
              {isSearch && (
                <Dropdown
                  isOpen={search}
                  toggle={toogleSearch}
                  className="topbar-head-dropdown header-item"
                >
                  <DropdownToggle
                    type="button"
                    tag="button"
                    className="custom-toggle btn header-button header-search-button neutral-400"
                  >
                    <i className="bx bx-search fs-20 primary-900"></i>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                    <Form className="p-3">
                      <div className="form-group m-0">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search ..."
                            aria-label="Recipient's username"
                          />
                          <button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify"></i>
                          </button>
                        </div>
                      </div>
                    </Form>
                  </DropdownMenu>
                </Dropdown>
              )}

              {isExchangeRates && <ExchangeRates />}
              {isMoreButton && (
                <HeaderButton
                  icon={<i className="ri-more-2-fill"></i>}
                  onClick={() => {}}
                />
              )}
            </div>

            <div className="d-flex align-items-center">
              {isCopy && (
                <HeaderButton
                  color="#525866"
                  buttonText="Kopyala"
                  icon={<i className="ri-file-copy-line"></i>}
                  onClick={() => {}}
                />
              )}
              {isSave && (
                <HeaderButton
                  color="#1545B2"
                  buttonText="Kaydet"
                  icon={<i className="ri-save-2-line"></i>}
                  onClick={() => {}}
                />
              )}
              {isLock && (
                <HeaderButton
                  color="#D25720"
                  buttonText="Kilitle"
                  icon={<i className="ri-lock-unlock-line"></i>}
                  onClick={() => {}}
                />
              )}
              {isDelete && (
                <HeaderButton
                  color="#B51916"
                  buttonText="Sil"
                  icon={<i className="ri-delete-bin-6-line"></i>}
                  onClick={() => {}}
                />
              )}

              {/* FullScreenDropdown */}
              {isFullScreenMode && <FullScreenDropdown />}

              {/* LanguageDropdown */}
              {isLanguage && <LanguageDropdown />}

              {/* Dark/Light Mode set */}
              {/* <LightDark
                layoutMode={layoutModeType}
                onChangeLayoutMode={onChangeLayoutMode}
              /> */}

              {/* NotificationDropdown */}
              {isNotification && <NotificationDropdown />}

              {/* ProfileDropdown */}
              {isProfile && <ProfileDropdown />}
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
