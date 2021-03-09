import AdminPage from "../components/AdminPage";
import GuestPage from "../components/GuestPage";
import { useDispatch, useSelector } from "react-redux";

export default function MainRoutes() {
    const { success } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    return <>{success === "login" ? <AdminPage /> : <GuestPage />}</>;
}
