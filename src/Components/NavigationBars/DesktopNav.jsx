import { Box, Image, Spacer } from "@chakra-ui/react";
import NavItemsRenderers from "./NavItemsRenderers";
import NavContainer from "./NavContainer";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/logo.png";

export default function DesktopNav() {
    return (
        <Box>
            <NavContainer children={
                <>
                    <Link to="/"><Image src={Logo} width="100px" alt="logo" /></Link>
                    <Spacer />
                    <NavItemsRenderers color="white" direction="row" />
                </>
            } />
        </Box >
    )
}