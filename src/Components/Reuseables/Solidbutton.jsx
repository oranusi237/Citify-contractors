import { Box, Button } from "@chakra-ui/react";
import { primaryColor } from "./colors";

export default function CustomSolidButton({ otherProps, onClick, buttonWidth, hoverColor, type, buttonText, alignSelf, textColor, buttonColor }) {
    return (
        <Box>
            <Button onClick={onClick} _hover={{ background: hoverColor ? hoverColor : "#C70000" }} width={buttonWidth ? buttonWidth : "full"} type={type} fontWeight={900} color={textColor ? textColor : "white"} bg={buttonColor ? buttonColor : primaryColor} mt={5} alignSelf={alignSelf}>{buttonText}</Button>

        </Box>
    )
}