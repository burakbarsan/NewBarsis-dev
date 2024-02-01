import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

//import images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import { createSelector } from 'reselect';

const ProfileDropdown = () => {

    const profiledropdownData = createSelector(
        (state : any) => state.Profile.user,
        (user) => user
      );
    // Inside your component
    const user = useSelector(profiledropdownData);
    
    const [userName, setUserName] = useState("Admin");

    useEffect(() => {
        const authUSer : any = sessionStorage.getItem("authUser");
        if (authUSer) {
            const obj : any = JSON.parse(authUSer);
            setUserName(process.env.REACT_APP_DEFAULTAUTH === "fake" ? obj.username === undefined ? user.first_name ? user.first_name : obj.data.first_name : "Admin" || "Admin" :
                process.env.REACT_APP_DEFAULTAUTH === "firebase" ? obj.email && obj.email : "Admin"
            );
        }
    }, [userName, user]);

    //Dropdown Toggle
    const [isProfileDropdown, setIsProfileDropdown] = useState<boolean>(false);
    const toggleProfileDropdown = () => {
        setIsProfileDropdown(!isProfileDropdown);
    };
    return (
        <React.Fragment>
            <Dropdown isOpen={isProfileDropdown} toggle={toggleProfileDropdown} className="header-item">
                <DropdownToggle tag="button" type="button" className="custom-toggle btn header-button neutral-400">
                    <span className="d-flex align-items-center">
                        <img className="rounded-circle header-profile-user-photo" src={avatar1}
                            alt="Header Avatar" />
                        <span className="text-start ms-xl-1">
                        <i className="ri-arrow-down-s-line"></i>
                        </span>
                    </span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">

                    <h6 className="dropdown-header">Welcome {userName}!</h6>
                    <DropdownItem href={process.env.PUBLIC_URL + "/profile"}><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
                        <span className="align-middle">Profile</span></DropdownItem>
                    <DropdownItem href={process.env.PUBLIC_URL + "/apps-chat"}><i
                        className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Messages</span></DropdownItem>
                    <DropdownItem href={process.env.PUBLIC_URL + "#"}><i
                        className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Taskboard</span></DropdownItem>
                    <DropdownItem href={process.env.PUBLIC_URL + "/pages-faqs"}><i
                        className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Help</span></DropdownItem>
                    <div className="dropdown-divider"></div>
                    <DropdownItem href={process.env.PUBLIC_URL + "/pages-profile"}><i
                        className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Balance : <b>$5971.67</b></span></DropdownItem>
                    <DropdownItem href={process.env.PUBLIC_URL + "/pages-profile-settings"}><span
                        className="badge bg-success-subtle text-success mt-1 float-end">New</span><i
                            className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span
                                className="align-middle">Settings</span></DropdownItem>
                    <DropdownItem href={process.env.PUBLIC_URL + "/auth-lockscreen-basic"}><i
                        className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Lock screen</span></DropdownItem>
                    <DropdownItem href={process.env.PUBLIC_URL + "/logout"}><i
                        className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle" data-key="t-logout">Logout</span></DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

export default ProfileDropdown;