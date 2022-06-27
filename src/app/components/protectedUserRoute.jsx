import React from "react";
import { Route, Redirect, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../hooks/useAuth";
function ProtectedUserRoute({ component: Component, children, ...rest }) {
    const { currentUser } = useAuth();
    console.log('hire')
    console.log('component', Component)
    console.log('children', children)
    console.log('rest', ...rest)


    const ProtectedRoute = () => {
        if (!currentUser) {
          return <Navigate to="/auth" /*replace*/ />;
        }
      
        return <Component></Component>;
    };


    return (
        {ProtectedRoute}
    );
}
/*ProtectedUserRoute.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};*/

export default ProtectedUserRoute;
