import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Routes from "../route/Routes";
import { logout } from "./redux/authentication/auth.actions";

export default function AdminPage() {
    const [sidebar, setSidebar] = useState(true);
    const dispatch = useDispatch();

    const _logout = () => {
        console.log("logout");
        dispatch(logout());
    };

    const toogleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <div className="admin-container">
            <div className={sidebar ? "sidebar-open" : "sidebar-close"}>
                <div className="close-button" onClick={toogleSidebar}>
                    <i className="bi bi-x"></i>
                </div>
                <ul>
                    <li onClick={_logout}>Logout</li>
                </ul>
            </div>
            <div className="admin-content">
                {!sidebar && (
                    <div className="expand-button" onClick={toogleSidebar}>
                        <i className="bi bi-list"></i>
                    </div>
                )}
                <HashRouter>
                    <Switch>
                        {Routes.AdminRouter.map((item, index) => (
                            <Route
                                key={index.toString()}
                                path={item.path}
                                name={item.name}
                                component={item.component}
                            />
                        ))}
                        <Redirect exact from="**" to="/Perkerasan" />
                    </Switch>
                </HashRouter>
            </div>
        </div>
    );
}
