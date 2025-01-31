import { Navigate, Outlet } from "react-router-dom";
import { BASE_ROUTE } from "../../constants/AppRoute";
import { getToken } from "../../services/AdminService";


export function PrivateRoute(props) {
    const token = getToken();
    console.log("token",token);
    if (token) {
        return <Outlet/>;
    }
    else {
        return <Navigate to={BASE_ROUTE}/>;
    }
}