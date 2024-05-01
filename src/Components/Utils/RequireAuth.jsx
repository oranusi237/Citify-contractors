import { Box } from "@chakra-ui/react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../Store/user/userSelector";
import { selectAuth } from "../Store/user/authStatusSelector";


export default function RequireAuth({ childComponent }) {
    const location = useLocation()
    const currentUser = useSelector(selectCurrentUser)
    const isAuthenticated = useSelector(selectAuth)

    return isAuthenticated || currentUser ? <Box>{childComponent}</Box> : <Navigate to="/login" state={{ from: location }} replace />
}
