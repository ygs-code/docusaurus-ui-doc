
// 按需加载插件
import {lazy} from "src/router/react-lazy-router-dom";
import pagesRouterRoutesconfig from "src/pages/router/routesConfig.js";


let routesComponentConfig=[
                    {  
                     path: "/",
                     exact: false,
                     name:"~layout",
                     entry:"/pages/Layout/index.js",
                     Component:lazy(
                           () => import(/* webpackChunkName:"~layout" */ "src/pages/Layout/index.js")
                      ),
                    //  syncComponent:~layout,
                     level:1
                   },
                    {  
                     path: "/login",
                     exact: true,
                     name:"logIn",
                     entry:"/pages/LogIn",
                     Component:lazy(
                           () => import(/* webpackChunkName:"logIn" */ "src/pages/LogIn")
                      ),
                    //  syncComponent:Login,
                     level:1
                   },
                    {  
                     path: "/register",
                     exact: true,
                     name:"register",
                     entry:"/pages/Register",
                     Component:lazy(
                           () => import(/* webpackChunkName:"register" */ "src/pages/Register")
                      ),
                    //  syncComponent:Register,
                     level:1
                   },
                    {  
                     path: "/reset-password",
                     exact: true,
                     name:"resetPassword",
                     entry:"/pages/ResetPassword",
                     Component:lazy(
                           () => import(/* webpackChunkName:"resetPassword" */ "src/pages/ResetPassword")
                      ),
                    //  syncComponent:Resetpassword,
                     level:1
                   },
                    {  
                     path: "/",
                     exact: true,
                     name:"index",
                     entry:"/pages/Index",
                     Component:lazy(
                           () => import(/* webpackChunkName:"index" */ "src/pages/Index")
                      ),
                    //  syncComponent:Index,
                     level:2
                   },
                    {  
                     path: "/account",
                     exact: true,
                     name:"account",
                     entry:"/pages/Account/index",
                     Component:lazy(
                           () => import(/* webpackChunkName:"account" */ "src/pages/Account/index")
                      ),
                    //  syncComponent:Account,
                     level:2
                   },
                    {  
                     path: "/deposit",
                     exact: true,
                     name:"deposit",
                     entry:"/pages/Deposit/index",
                     Component:lazy(
                           () => import(/* webpackChunkName:"deposit" */ "src/pages/Deposit/index")
                      ),
                    //  syncComponent:Deposit,
                     level:2
                   },
                    {  
                     path: "/withdrawal",
                     exact: true,
                     name:"withdrawal",
                     entry:"/pages/Withdrawal/index",
                     Component:lazy(
                           () => import(/* webpackChunkName:"withdrawal" */ "src/pages/Withdrawal/index")
                      ),
                    //  syncComponent:Withdrawal,
                     level:2
                   },
                    {  
                     path: "/card-manage",
                     exact: true,
                     name:"cardManage",
                     entry:"/pages/CardManage/index",
                     Component:lazy(
                           () => import(/* webpackChunkName:"cardManage" */ "src/pages/CardManage/index")
                      ),
                    //  syncComponent:Cardmanage,
                     level:2
                   },
                    {  
                     path: "/personal-info-write",
                     exact: true,
                     name:"personalInfoWrite",
                     entry:"/pages/PersonalInfoWrite/Details/index",
                     Component:lazy(
                           () => import(/* webpackChunkName:"personalInfoWrite" */ "src/pages/PersonalInfoWrite/Details/index")
                      ),
                    //  syncComponent:Personalinfowrite,
                     level:2
                   },
                    {  
                     path: "/personal-info-checked",
                     exact: true,
                     name:"personalInfoChecked",
                     entry:"/pages/PersonalInfoChecked/index",
                     Component:lazy(
                           () => import(/* webpackChunkName:"personalInfoChecked" */ "src/pages/PersonalInfoChecked/index")
                      ),
                    //  syncComponent:Personalinfochecked,
                     level:2
                   },
                    {  
                     path: "/change-password",
                     exact: true,
                     name:"changePassword",
                     entry:"/pages/ChangePassword/index",
                     Component:lazy(
                           () => import(/* webpackChunkName:"changePassword" */ "src/pages/ChangePassword/index")
                      ),
                    //  syncComponent:Changepassword,
                     level:2
                   },
                    {  
                     path: "/trading-order",
                     exact: true,
                     name:"tradingOrder",
                     entry:"/pages/TradingOrder/index",
                     Component:lazy(
                           () => import(/* webpackChunkName:"tradingOrder" */ "src/pages/TradingOrder/index")
                      ),
                    //  syncComponent:Tradingorder,
                     level:2
                   },
                    {  
                     path: "/deposit-and-withdrawal-report",
                     exact: true,
                     name:"depositAndWithdrawalReport",
                     entry:"/pages/DepositAndWithdrawalReport/index",
                     Component:lazy(
                           () => import(/* webpackChunkName:"depositAndWithdrawalReport" */ "src/pages/DepositAndWithdrawalReport/index")
                      ),
                    //  syncComponent:Depositandwithdrawalreport,
                     level:2
                   },
                    {  
                     path: "/customer-list",
                     exact: true,
                     name:"customerList",
                     entry:"/pages/LowerLevelCustomers/CustomerList/index",
                     Component:lazy(
                           () => import(/* webpackChunkName:"customerList" */ "src/pages/LowerLevelCustomers/CustomerList/index")
                      ),
                    //  syncComponent:Customerlist,
                     level:2
                   },
                    {  
                     path: "/customer-trading-order",
                     exact: true,
                     name:"customerTradingOrder",
                     entry:"/pages/LowerLevelCustomers/TradingOrder/index",
                     Component:lazy(
                           () => import(/* webpackChunkName:"customerTradingOrder" */ "src/pages/LowerLevelCustomers/TradingOrder/index")
                      ),
                    //  syncComponent:Customertradingorder,
                     level:2
                   },
                    {  
                     path: "/customer-deposit-and-withdrawal-report",
                     exact: true,
                     name:"customerDepositAndWithdrawalReport",
                     entry:"/pages/LowerLevelCustomers/DepositAndWithdrawalReport/index",
                     Component:lazy(
                           () => import(/* webpackChunkName:"customerDepositAndWithdrawalReport" */ "src/pages/LowerLevelCustomers/DepositAndWithdrawalReport/index")
                      ),
                    //  syncComponent:Customerdepositandwithdrawalreport,
                     level:2
                   },
                    {  
                     path: "/payment-callback/:checkoutId/:chargeId",
                     exact: true,
                     name:"paymentCallback",
                     entry:"/pages/PaymentCallback/index",
                     Component:lazy(
                           () => import(/* webpackChunkName:"paymentCallback" */ "src/pages/PaymentCallback/index")
                      ),
                    //  syncComponent:Paymentcallback,
                     level:2
                   },
                    {  
                     path: "/decorator",
                     exact: true,
                     name:"decorator",
                     entry:"/pages/Decorator/index",
                     Component:lazy(
                           () => import(/* webpackChunkName:"decorator" */ "src/pages/Decorator/index")
                      ),
                    //  syncComponent:Decorator,
                     level:1
                   },
                    {  
                     path: "/system/demo/details/:action/:id?",
                     exact: false,
                     name:"demoDetails",
                     entry:"/pages/system/pages/demo/details/index.js",
                     Component:lazy(
                           () => import(/* webpackChunkName:"demoDetails" */ "src/pages/system/pages/demo/details/index.js")
                      ),
                    //  syncComponent:Demodetails,
                     level:2
                   },
                    {  
                     path: "/system/demo",
                     exact: false,
                     name:"demo",
                     entry:"/pages/system/pages/demo/index.js",
                     Component:lazy(
                           () => import(/* webpackChunkName:"demo" */ "src/pages/system/pages/demo/index.js")
                      ),
                    //  syncComponent:Demo,
                     level:2
                   },
                    {  
                     path: "/system",
                     exact: true,
                     name:"system",
                     entry:"/pages/system/index.js",
                     Component:lazy(
                           () => import(/* webpackChunkName:"system" */ "src/pages/system/index.js")
                      ),
                    //  syncComponent:System,
                     level:2
                   },
                    {  
                     path: "/react-range-picker",
                     exact: false,
                     name:"ReactRangePicker",
                     entry:"/pages/ReactRangePicker/index.tsx",
                     Component:lazy(
                           () => import(/* webpackChunkName:"ReactRangePicker" */ "src/pages/ReactRangePicker/index.tsx")
                      ),
                    //  syncComponent:Reactrangepicker,
                     level:1
                   },
    ];

export const routesConfigs = [
  ...pagesRouterRoutesconfig,
];     

export default routesComponentConfig;
        