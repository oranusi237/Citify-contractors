import { Box, Flex } from "@chakra-ui/react";
import { primaryColor } from "../Reuseables/colors";


export default function NavContainer({children}) {
    return (
        <Box>
            <Flex align="center" h={100} bg={primaryColor} padding={7}>
                {children}
            </Flex>
        </Box>
    )
}