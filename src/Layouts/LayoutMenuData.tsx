import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState<boolean>(false);
    const [isApps, setIsAir] = useState<boolean>(false);
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isPages, setIsPages] = useState<boolean>(false);
    const [isBaseUi, setIsBaseUi] = useState<boolean>(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState<boolean>(false);
    const [isForms, setIsForms] = useState<boolean>(false);
    const [isTables, setIsTables] = useState<boolean>(false);
    const [isCharts, setIsCharts] = useState<boolean>(false);
    const [isIcons, setIsIcons] = useState<boolean>(false);
    const [isMaps, setIsMaps] = useState<boolean>(false);
    const [isMultiLevel, setIsMultiLevel] = useState<boolean>(false);

    // Apps
    const [isCalendar, setCalendar] = useState<boolean>(false);
    const [isEmail, setEmail] = useState<boolean>(false);
    const [isSubEmail, setSubEmail] = useState<boolean>(false);
    const [isEcommerce, setIsEcommerce] = useState<boolean>(false);
    const [isProjects, setIsProjects] = useState<boolean>(false);
    const [isTasks, setIsTasks] = useState<boolean>(false);
    const [isCRM, setIsCRM] = useState<boolean>(false);
    const [isCrypto, setIsCrypto] = useState<boolean>(false);
    const [isInvoices, setIsInvoices] = useState<boolean>(false);
    const [isSupportTickets, setIsSupportTickets] = useState<boolean>(false);
    const [isNFTMarketplace, setIsNFTMarketplace] = useState<boolean>(false);
    const [isJobs, setIsJobs] = useState<boolean>(false);
    const [isJobList, setIsJobList] = useState<boolean>(false);
    const [isCandidateList, setIsCandidateList] = useState<boolean>(false);

    // Authentication
    const [isSignIn, setIsSignIn] = useState<boolean>(false);
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [isPasswordReset, setIsPasswordReset] = useState<boolean>(false);
    const [isPasswordCreate, setIsPasswordCreate] = useState<boolean>(false);
    const [isLockScreen, setIsLockScreen] = useState<boolean>(false);
    const [isLogout, setIsLogout] = useState<boolean>(false);
    const [isSuccessMessage, setIsSuccessMessage] = useState<boolean>(false);
    const [isVerification, setIsVerification] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    // Pages
    const [isProfile, setIsProfile] = useState<boolean>(false);
    const [isLanding, setIsLanding] = useState<boolean>(false);

    // Charts
    const [isApex, setIsApex] = useState<boolean>(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState<boolean>(false);
    const [isLevel2, setIsLevel2] = useState<boolean>(false);

    const [iscurrentState, setIscurrentState] = useState("Dashboard");

    function updateIconSidebar(e : any) {
        if (e && e.target && e.target.getAttribute("sub-items")) {
            const ul : any = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("sub-items");
                const getID = document.getElementById(id) as HTMLElement
                if (getID)
                    getID.classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove("twocolumn-panel");
        console.log(iscurrentState);
        if (iscurrentState !== "Dashboard") {
            setIsDashboard(false);
        }
        if (iscurrentState !== "Air") {
            setIsAir(false);
        }
        if (iscurrentState !== "Auth") {
            setIsAuth(false);
        }
        if (iscurrentState !== "Pages") {
            setIsPages(false);
        }
        if (iscurrentState !== "BaseUi") {
            setIsBaseUi(false);
        }
        if (iscurrentState !== "AdvanceUi") {
            setIsAdvanceUi(false);
        }
        if (iscurrentState !== "Forms") {
            setIsForms(false);
        }
        if (iscurrentState !== "Tables") {
            setIsTables(false);
        }
        if (iscurrentState !== "Charts") {
            setIsCharts(false);
        }
        if (iscurrentState !== "Icons") {
            setIsIcons(false);
        }
        if (iscurrentState !== "Maps") {
            setIsMaps(false);
        }
        if (iscurrentState !== "MuliLevel") {
            setIsMultiLevel(false);
        }
        if (iscurrentState === "Widgets") {
            history("/widgets");
            document.body.classList.add("twocolumn-panel");
        }
        if (iscurrentState !== "Landing") {
            setIsLanding(false);
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isApps,
        isAuth,
        isPages,
        isBaseUi,
        isAdvanceUi,
        isForms,
        isTables,
        isCharts,
        isIcons,
        isMaps,
        isMultiLevel,
    ]);

    const menuItems : any = [
       
        {
            id: "dashboard",
            label: "Dashboards",
            icon: "mdi mdi-speedometer",
            link: "/#",
            stateVariables: isDashboard,
            click: function (e : any) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState("Dashboard");
                updateIconSidebar(e);
            },
        },
        {
            id: "air",
            label: "Air Freight Operation",
            icon: "mdi mdi-view-grid-plus-outline",
            link: "/#",
            click: function (e : any) {
                e.preventDefault();
                setIsAir(!isApps);
                setIscurrentState("Air");
                updateIconSidebar(e);
            },
            stateVariables: isApps,
            subItems: [
                {
                    id: "calendar",
                    label: "Calendar",
                    link: "/#",
                    parentId: "air",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setCalendar(!isCalendar);
                    },
                    stateVariables: isCalendar,
                    childItems: [
                        {
                            id: 1,
                            label: "Main Calendar",
                            link: "/apps-calendar",
                            parentId: "air"
                        },
                        {
                            id: 2,
                            label: "Month Grid",
                            link: "/apps-calendar-month-grid",
                            parentId: "air"
                        },
                    ]
                },
                {
                    id: "chat",
                    label: "Chat",
                    link: "/apps-chat",
                    parentId: "air",
                },
                {
                    id: "mailbox",
                    label: "Email",
                    link: "/#",
                    parentId: "air",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setEmail(!isEmail);
                    },
                    stateVariables: isEmail,
                    childItems: [
                        {
                            id: 1,
                            label: "Mailbox",
                            link: "/apps-mailbox",
                            parentId: "air",
                        },
                        {
                            id: 2,
                            label: "Email Templates",
                            link: "/#",
                            parentId: "air",
                            isChildItem: true,
                            stateVariables: isSubEmail,
                            click: function (e : any) {
                                e.preventDefault();
                                setSubEmail(!isSubEmail);
                            },
                            childItems: [
                                {
                                    id: 2,
                                    label: "Basic Action",
                                    link: "/apps-email-basic",
                                    parentId: "air",
                                },
                                {
                                    id: 3,
                                    label: "Ecommerce Action",
                                    link: "/apps-email-ecommerce",
                                    parentId: "air",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "appsecommerce",
                    label: "Ecommerce",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsEcommerce(!isEcommerce);
                    },
                    parentId: "air",
                    stateVariables: isEcommerce,
                    childItems: [
                        {
                            id: 1,
                            label: "Products",
                            link: "/apps-ecommerce-products",
                            parentId: "air",
                        },
                        {
                            id: 2,
                            label: "Product Details",
                            link: "/apps-ecommerce-product-details",
                            parentId: "air",
                        },
                        {
                            id: 3,
                            label: "Create Product",
                            link: "/apps-ecommerce-add-product",
                            parentId: "air",
                        },
                        {
                            id: 4,
                            label: "Orders",
                            link: "/apps-ecommerce-orders",
                            parentId: "air",
                        },
                        {
                            id: 5,
                            label: "Order Details",
                            link: "/apps-ecommerce-order-details",
                            parentId: "air",
                        },
                        {
                            id: 6,
                            label: "Customers",
                            link: "/apps-ecommerce-customers",
                            parentId: "air",
                        },
                        {
                            id: 7,
                            label: "Shopping Cart",
                            link: "/apps-ecommerce-cart",
                            parentId: "air",
                        },
                        {
                            id: 8,
                            label: "Checkout",
                            link: "/apps-ecommerce-checkout",
                            parentId: "air",
                        },
                        {
                            id: 9,
                            label: "Sellers",
                            link: "/apps-ecommerce-sellers",
                            parentId: "air",
                        },
                        {
                            id: 10,
                            label: "Seller Details",
                            link: "/apps-ecommerce-seller-details",
                            parentId: "air",
                        },
                    ],
                },
                {
                    id: "appsprojects",
                    label: "Projects",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsProjects(!isProjects);
                    },
                    parentId: "air",
                    stateVariables: isProjects,
                    childItems: [
                        {
                            id: 1,
                            label: "List",
                            link: "/apps-projects-list",
                            parentId: "air",
                        },
                        {
                            id: 2,
                            label: "Overview",
                            link: "/apps-projects-overview",
                            parentId: "air",
                        },
                        {
                            id: 3,
                            label: "Create Project",
                            link: "/apps-projects-create",
                            parentId: "air",
                        },
                    ],
                },
                {
                    id: "tasks",
                    label: "Tasks",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsTasks(!isTasks);
                    },
                    parentId: "air",
                    stateVariables: isTasks,
                    childItems: [
                        { id: 1, label: "Kanban Board", link: "/apps-tasks-kanban", parentId: "air", },
                        { id: 2, label: "List View", link: "/apps-tasks-list-view", parentId: "air", },
                        { id: 3, label: "Task Details", link: "/apps-tasks-details", parentId: "air", },
                    ],
                },
                {
                    id: "appscrm",
                    label: "CRM",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsCRM(!isCRM);
                    },
                    parentId: "air",
                    stateVariables: isCRM,
                    childItems: [
                        { id: 1, label: "Contacts", link: "/apps-crm-contacts" },
                        { id: 2, label: "Companies", link: "/apps-crm-companies" },
                        { id: 3, label: "Deals", link: "/apps-crm-deals" },
                        { id: 4, label: "Leads", link: "/apps-crm-leads" },
                    ],
                },
                {
                    id: "appscrypto",
                    label: "Crypto",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsCrypto(!isCrypto);
                    },
                    parentId: "air",
                    stateVariables: isCrypto,
                    childItems: [
                        { id: 1, label: "Transactions", link: "/apps-crypto-transactions" },
                        { id: 2, label: "Buy & Sell", link: "/apps-crypto-buy-sell" },
                        { id: 3, label: "Orders", link: "/apps-crypto-orders" },
                        { id: 4, label: "My Wallet", link: "/apps-crypto-wallet" },
                        { id: 5, label: "ICO List", link: "/apps-crypto-ico" },
                        { id: 6, label: "KYC Application", link: "/apps-crypto-kyc" },
                    ],
                },
                {
                    id: "invoices",
                    label: "Invoices",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsInvoices(!isInvoices);
                    },
                    parentId: "air",
                    stateVariables: isInvoices,
                    childItems: [
                        { id: 1, label: "List View", link: "/apps-invoices-list" },
                        { id: 2, label: "Details", link: "/apps-invoices-details" },
                        { id: 3, label: "Create Invoice", link: "/apps-invoices-create" },
                    ],
                },
                {
                    id: "supportTickets",
                    label: "Support Tickets",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsSupportTickets(!isSupportTickets);
                    },
                    parentId: "air",
                    stateVariables: isSupportTickets,
                    childItems: [
                        { id: 1, label: "List View", link: "/apps-tickets-list" },
                        { id: 2, label: "Ticket Details", link: "/apps-tickets-details" },
                    ],
                },
                {
                    id: "NFTMarketplace",
                    label: "NFT Marketplace",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsNFTMarketplace(!isNFTMarketplace);
                    },
                    parentId: "air",
                    stateVariables: isNFTMarketplace,
                    childItems: [
                        { id: 1, label: "Marketplace", link: "/apps-nft-marketplace" },
                        { id: 2, label: "Explore Now", link: "/apps-nft-explore" },
                        { id: 3, label: "Live Auction", link: "/apps-nft-auction" },
                        { id: 4, label: "Item Details", link: "/apps-nft-item-details" },
                        { id: 5, label: "Collections", link: "/apps-nft-collections" },
                        { id: 6, label: "Creators", link: "/apps-nft-creators" },
                        { id: 7, label: "Ranking", link: "/apps-nft-ranking" },
                        { id: 8, label: "Wallet Connect", link: "/apps-nft-wallet" },
                        { id: 9, label: "Create NFT", link: "/apps-nft-create" },
                    ],
                },
                {
                    id: "filemanager",
                    label: "File Manager",
                    link: "/apps-file-manager",
                    parentId: "air",
                },
                {
                    id: "todo",
                    label: "To Do",
                    link: "/apps-todo",
                    parentId: "air",
                },
                {
                    id: "job",
                    label: "Jobs",
                    link: "/#",
                    parentId: "air",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsJobs(!isJobs);
                    },
                    stateVariables: isJobs,
                    childItems: [
                        {
                            id: 1,
                            label: "Statistics",
                            link: "/apps-job-statistics",
                            parentId: "air",
                        },
                        {
                            id: 2,
                            label: "Job Lists",
                            link: "/#",
                            parentId: "air",
                            isChildItem: true,
                            stateVariables: isJobList,
                            click: function (e : any) {
                                e.preventDefault();
                                setIsJobList(!isJobList);
                            },
                            childItems: [
                                {
                                    id: 1,
                                    label: "List",
                                    link: "/apps-job-lists",
                                    parentId: "air",
                                },
                                {
                                    id: 2,
                                    label: "Grid",
                                    link: "/apps-job-grid-lists",
                                    parentId: "air",
                                },
                                {
                                    id: 3,
                                    label: "Overview",
                                    link: "/apps-job-details",
                                    parentId: "air",
                                },
                            ],
                        },
                        {
                            id: 3,
                            label: "Candidate Lists",
                            link: "/#",
                            parentId: "air",
                            isChildItem: true,
                            stateVariables: isCandidateList,
                            click: function (e : any) {
                                e.preventDefault();
                                setIsCandidateList(!isCandidateList);
                            },
                            childItems: [
                                {
                                    id: 1,
                                    label: "List View",
                                    link: "/apps-job-candidate-lists",
                                    parentId: "air",
                                },
                                {
                                    id: 2,
                                    label: "Grid View",
                                    link: "/apps-job-candidate-grid",
                                    parentId: "air",
                                },
                            ],
                        },
                        {
                            id: 4,
                            label: "Application",
                            link: "/apps-job-application",
                            parentId: "air",
                        },
                        {
                            id: 5,
                            label: "New Job",
                            link: "/apps-job-new",
                            parentId: "air",
                        },
                        {
                            id: 6,
                            label: "Companies List",
                            link: "/apps-job-companies-lists",
                            parentId: "air",
                        },
                        {
                            id: 7,
                            label: "Job Categories",
                            link: "/apps-job-categories",
                            parentId: "air",
                        },
                    ],
                },
                {
                    id: "apiKey",
                    label: "API Key",
                    link: "/apps-api-key",
                    parentId: "air",
                },
            ],
        },
        {
            id: "oceanAirOperation",
            label: "Ocean Air Operation",
            icon: "bx bx-user-circle",
            link: "/#",
            click: function (e : any) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIscurrentState("Auth");
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
            subItems: [
                {
                    id: "signIn",
                    label: "Sign In",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsSignIn(!isSignIn);
                    },
                    parentId: "authentication",
                    stateVariables: isSignIn,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-signin-basic" },
                        { id: 2, label: "Cover", link: "/auth-signin-cover" },
                    ],
                },
                {
                    id: "signUp",
                    label: "Sign Up",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsSignUp(!isSignUp);
                    },
                    parentId: "authentication",
                    stateVariables: isSignUp,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-signup-basic" },
                        { id: 2, label: "Cover", link: "/auth-signup-cover" },
                    ],
                },
                {
                    id: "passwordReset",
                    label: "Password Reset",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsPasswordReset(!isPasswordReset);
                    },
                    parentId: "authentication",
                    stateVariables: isPasswordReset,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-pass-reset-basic" },
                        { id: 2, label: "Cover", link: "/auth-pass-reset-cover" },
                    ],
                },
                {
                    id: "passwordCreate",
                    label: "Password Create",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsPasswordCreate(!isPasswordCreate);
                    },
                    parentId: "authentication",
                    stateVariables: isPasswordCreate,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-pass-change-basic" },
                        { id: 2, label: "Cover", link: "/auth-pass-change-cover" },
                    ],
                },
                {
                    id: "lockScreen",
                    label: "Lock Screen",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsLockScreen(!isLockScreen);
                    },
                    parentId: "authentication",
                    stateVariables: isLockScreen,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-lockscreen-basic" },
                        { id: 2, label: "Cover", link: "/auth-lockscreen-cover" },
                    ],
                },
                {
                    id: "logout",
                    label: "Logout",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsLogout(!isLogout);
                    },
                    parentId: "authentication",
                    stateVariables: isLogout,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-logout-basic" },
                        { id: 2, label: "Cover", link: "/auth-logout-cover" },
                    ],
                },
                {
                    id: "successMessage",
                    label: "Success Message",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsSuccessMessage(!isSuccessMessage);
                    },
                    parentId: "authentication",
                    stateVariables: isSuccessMessage,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-success-msg-basic" },
                        { id: 2, label: "Cover", link: "/auth-success-msg-cover" },
                    ],
                },
                {
                    id: "twoStepVerification",
                    label: "Two Step Verification",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsVerification(!isVerification);
                    },
                    parentId: "authentication",
                    stateVariables: isVerification,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-twostep-basic" },
                        { id: 2, label: "Cover", link: "/auth-twostep-cover" },
                    ],
                },
                {
                    id: "errors",
                    label: "Errors",
                    link: "/#",
                    isChildItem: true,
                    click: function (e : any) {
                        e.preventDefault();
                        setIsError(!isError);
                    },
                    parentId: "authentication",
                    stateVariables: isError,
                    childItems: [
                        { id: 1, label: "404 Basic", link: "/auth-404-basic" },
                        { id: 2, label: "404 Cover", link: "/auth-404-cover" },
                        { id: 3, label: "404 Alt", link: "/auth-404-alt" },
                        { id: 4, label: "500", link: "/auth-500" },
                        { id: 5, label: "Offline Page", link: "/auth-offline" },
                    ],
                },
            ],
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
