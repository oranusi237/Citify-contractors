import { Box, Flex } from "@chakra-ui/react";


export default function NavContainer({children}) {
    return (
        <Box>
            <Flex align="center" h={100} bg={"#B80000"} padding={7}>
                {children}
            </Flex>
        </Box>
    )
}