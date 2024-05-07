import { Box } from "@chakra-ui/react";
import { Navigate, useLocation } from "react-router-dom";

export default function HideOnAuth({ childComponent }) {
    const location = useLocation()
    const token = localStorage.getItem("auth-token")
    return (
        <Box>
            {token ?
                <Navigate to="/profile" state={{ from: location }} replace />
                :
                <Box>
                    {childComponent}
                </Box>
            }
        </Box>
    )
}