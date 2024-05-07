import { Box } from "@chakra-ui/react";
import { Navigate, useLocation } from "react-router-dom";


export default function RequireAuth({ childComponent }) {
    const location = useLocation()
    const token = localStorage.getItem("auth-token")

    return token ? <Box>{childComponent}</Box> : <Navigate to="/login" state={{ from: location }} replace />
}
