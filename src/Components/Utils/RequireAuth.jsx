import { Box } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../Store/UserContext";

export default function RequireAuth({ childComponent }) {
    const {user, isAuthenticated} = useUserAuth()

    if (!user && !isAuthenticated) {
        return <Navigate to="/login" />
    } else {
        return <Box>{childComponent}</Box>
    }
}
