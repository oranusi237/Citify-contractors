import { Box, Drawer, DrawerBody, useDisclosure, DrawerOverlay, DrawerContent, DrawerCloseButton, Spacer, Stack, Image } from "@chakra-ui/react";
import NavItemsRenderers from "./NavItemsRenderers";
import { MdOutlineMenu } from "react-icons/md";
import { useRef } from "react";
import NavContainer from "./NavContainer";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/logo.png"


export default function MobileNav() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <Box>
            <NavContainer children={
                <>
                    <Link to="/"><Image width="100px" src={Logo} alt="logo" /></Link>
                    <Spacer />
                    <MdOutlineMenu color="whitesmoke" cursor="pointer" refX={btnRef} fontSize={50} onClick={onOpen} />
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerBody >
                                <Stack mt={10}>
                                    <NavItemsRenderers onClick={onClose} direction="column" />
                                </Stack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>

                </>
            } />
        </Box>
    )
}