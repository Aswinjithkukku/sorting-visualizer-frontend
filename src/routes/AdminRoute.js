import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AdminRoute({ children, ...rest }) {
  const { isLoggedIn, user } = useSelector((state) => state.users);

  if (!isLoggedIn) {
    return <Navigate replace to="/login" />;
  } else if (user?.role !== "admin") {
    return <Navigate replace to="/" />;
  }

  return children;
}

export default AdminRoute;
