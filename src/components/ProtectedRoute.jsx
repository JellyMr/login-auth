/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAllowed }) =>
  isAllowed ? children : <Navigate to="/login" />;

export default ProtectedRoute;
