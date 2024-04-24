import { Box } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ childComponent }) {
    let user;
    if (user === null|| user === undefined) {
        return <Navigate to="/login" />
    } else {
        return <Box>{childComponent}</Box>
    }
}