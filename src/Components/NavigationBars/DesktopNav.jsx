import { Box, Heading, Spacer } from "@chakra-ui/react";
import NavItemsRenderers from "./NavItemsRenderers";
import NavContainer from "./NavContainer";
import { Link } from "react-router-dom";

export default function DesktopNav() {
    return (
        <Box>
            <NavContainer children={
                <>
                    <Link to="/"><Heading>Home</Heading></Link>
                    <Spacer />
                    <NavItemsRenderers direction="row" />
                </>
            } />
        </Box >
    )
}