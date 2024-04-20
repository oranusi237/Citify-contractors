import { Box, Divider, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { primaryColor } from "../colors";

export default function Footer() {
    return (
        <footer>
            <Flex py="10px" bg="#F7F7F7" align="center" justify="space-around" direction="column" height={["200px", "200px", "150px"]} >
                <Flex wrap="wrap" gap={2} justify="center" align="center">
                    <Link >About</Link>
                    <Box borderRadius="50%" bg={primaryColor} height={1.5} width={1.5} display={["none", "none", "block"]}></Box>
                    <Link >Contact</Link>
                    <Box borderRadius="50%" bg={primaryColor} height={1.5} width={1.5} display={["none", "none", "block"]}></Box>
                    <Link >Terms and conditions</Link>
                </Flex>
                <Divider />
                <Flex justify="center" align="center">
                    <Text>Copyright ©  2024 City Contractors, all rights reserved </Text>
                </Flex>
            </Flex >
        </footer>
    )
}