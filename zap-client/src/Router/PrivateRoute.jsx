import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (loading) return <div>Loading...</div>
    if (!user) {
        return <Navigate to="/login" state={{ from }} />
    }
    return children;
};

export default PrivateRoute;