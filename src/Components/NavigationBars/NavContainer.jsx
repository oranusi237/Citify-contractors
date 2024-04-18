import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";


export default function NavContainer({ children }: { children: ReactNode }) {
    return (
        <Box>
            <Flex align="center" h={100} bg={"#910A67"} padding={7}>
                {children}
            </Flex>
        </Box>
    )
}