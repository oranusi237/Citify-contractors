import { Box, Menu, MenuButton, Button, MenuItem, MenuList, Spacer, Heading } from "@chakra-ui/react";
import NavItemsRenderers from "./NavItemsRenderers";
import { ImMenu4, ImMenu3 } from "react-icons/im"
import { useState } from "react";
import NavContainer from "./NavContainer";
import { Link } from "react-router-dom";


export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <Box>
            <NavContainer children={
                <>
                    <Link to="/"><Heading>Home</Heading></Link>
                    <Spacer />
                    <Menu>
                        <MenuButton fontSize={30} onClick={toggleMenu} as={Button}>
                            {!isOpen ? <ImMenu3 /> : <ImMenu4 />}
                        </MenuButton>
                        <MenuList>
                            <MenuItem><NavItemsRenderers direction="column" /></MenuItem>
                        </MenuList>
                    </Menu>
                </>
            } />


        </Box>
    )
}