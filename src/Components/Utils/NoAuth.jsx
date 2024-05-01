import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../Store/user/userSelector";
import { selectAuth } from "../Store/user/authStatusSelector";
import { Navigate, useLocation } from "react-router-dom";

export default function HideOnAuth({ childComponent }) {
    const currentUser = useSelector(selectCurrentUser)
    const location = useLocation()
    const isAuthenticated = useSelector(selectAuth)
    return (
        isAuthenticated || currentUser ?
            <Navigate to="/profile" state={{ from: location }} replace />
            :
            <Box>
                {childComponent}
            </Box>
    )
}