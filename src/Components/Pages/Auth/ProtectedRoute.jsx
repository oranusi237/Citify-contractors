import { Route, Navigate, useAuthState } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ProtectedRoute(children, ...rest) {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    useEffect(() => {
      // Check for existing logged-in user 
      const user = localStorage.getItem('loggedInUser'); 
      setIsLoggedIn(!!user);
    }, []);
    return (
    <Route {...rest}>
      {isLoggedIn ? children : <Navigate to="/login" replace />}
    </Route>
    )
}