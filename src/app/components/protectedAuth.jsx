import React from "react";
import { Route, Redirect, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../hooks/useAuth";
function ProtectedAuth({ component: Component, children, ...rest }) {
    const { currentUser } = useAuth();
  
    if (currentUser) {
        return <Navigate to="/user" replace />;
    }
    return children;
}

export default ProtectedAuth;