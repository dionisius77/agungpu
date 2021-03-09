import Home from "../components/home/Home";
import Grafik from "../components/grafik/Grafik";
import Login from "../components/login/Login";
import Perkerasan from "../components/perkerasan/perkerasan";

const MainRouter = [
    { path: "/Home", name: "Home", component: Home },
    { path: "/Grafik", name: "Grafik", component: Grafik },
    { path: "/Login", name: "Login", component: Login },
];

const AdminRouter = [
    { path: "/perkerasan", name: "Perkerasan", component: Perkerasan },
];

export default {
    MainRouter,
    AdminRouter,
};
