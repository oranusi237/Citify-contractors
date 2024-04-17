import { Box, Button } from "@chakra-ui/react";
import { primaryColor } from "./colors";

export default function CustomSolidButton({type, buttonText, alignSelf}) {
    return (
        <Box>
            <Button _hover={{ background: "#C70000" }} width={"full"} type={type} fontWeight={900} color={"white"} bg={primaryColor} mt={5} alignSelf={alignSelf}>{buttonText}</Button>

        </Box>
    )
}