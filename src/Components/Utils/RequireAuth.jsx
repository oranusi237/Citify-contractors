import { Box } from "@chakra-ui/react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../Store/user/userSelector";
import { useEffect } from "react";


export default function RequireAuth({ childComponent }) {
    const location = useLocation()
    const currentUser = useSelector(selectCurrentUser)

    useEffect(() => {
        if (currentUser === null || currentUser === undefined) {
            // Redirect to the login page if the user is not logged in
            <Navigate to="/login" state={{ from: location }} replace />;
        }
    }, [currentUser, location]);

    return <Box>{childComponent}</Box>
}
