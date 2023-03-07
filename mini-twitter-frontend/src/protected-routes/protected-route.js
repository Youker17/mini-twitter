import React from "react";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";



export function ProtectedRoute({ element: Component, ...rest }){

    
    const token = useSelector(state=>state.auth.token);

    if (token) {
        return <Route {...rest} element={<Component/>} />;
      } else {
        return <Navigate to="/login" />;
      }
    


}
    
