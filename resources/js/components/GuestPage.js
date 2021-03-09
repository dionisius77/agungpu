import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Logo from "../assets/logo.pupr.jpg";
import Routes from "../route/Routes";

export default function GuestPage() {
    const menuClicked = (page) => {
        window.location.hash = `/${page}`;
    };

    return (
        <div className="root">
            <div className="header">
                <div className="logo">
                    <img src={Logo} alt="Logo PUPR Kab Cianjur" />
                </div>
                <div className="menu-box">
                    <div
                        className="menu-btn"
                        onClick={() => menuClicked("Home")}
                    >
                        Home
                    </div>
                    <div
                        className="menu-btn"
                        onClick={() => menuClicked("Grafik")}
                    >
                        Grafik
                    </div>
                    <div
                        className="menu-btn"
                        onClick={() => menuClicked("Proyek")}
                    >
                        Proyek
                    </div>
                    <div
                        className="menu-btn"
                        onClick={() => menuClicked("Login")}
                    >
                        Login
                    </div>
                </div>
            </div>
            <div className="content-container">
                <HashRouter>
                    <Switch>
                        {Routes.MainRouter.map((item, index) => (
                            <Route
                                key={index.toString()}
                                path={item.path}
                                name={item.name}
                                component={item.component}
                            />
                        ))}
                        <Redirect exact from="**" to="/Home" />
                    </Switch>
                </HashRouter>
            </div>
            <div className="footer"></div>
        </div>
    );
}
