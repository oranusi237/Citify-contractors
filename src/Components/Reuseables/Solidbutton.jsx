import { Box, Button } from "@chakra-ui/react";
import { primaryColor } from "./colors";

export default function CustomSolidButton({ loadingText, isLoading, onClick, buttonWidth, hoverColor, type, buttonText, alignSelf, textColor, buttonColor }) {
    return (
        <Box>
            <Button isLoading={isLoading} loadingText={loadingText} onClick={onClick} _hover={{ background: hoverColor ? hoverColor : "#034C24" }} width={buttonWidth ? buttonWidth : "full"} type={type} fontWeight={900} color={textColor ? textColor : "white"} bg={buttonColor ? buttonColor : primaryColor} mt={5} alignSelf={alignSelf}>{buttonText}</Button>

        </Box>
    )
}