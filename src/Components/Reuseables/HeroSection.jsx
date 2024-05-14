import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import CustomSolidButton from "./Solidbutton";
import { Link } from "react-router-dom";

export default function HeroSection({ backgroundImage, hasLink, buttonLink, buttonText, headingText, heroDescription }) {
    return (
        <Box height="600px" bgSize="cover" bgImage={backgroundImage}>
            <Stack height={"100%"} width="100%" bg="rgba(0, 0, 10, 0.8)">
                <Center height={"100%"}>
                    <Stack color="white" width={["auto", "auto", "500px"]} align="center">
                        <Heading>{headingText}</Heading>
                        <Text letterSpacing={1.1} fontSize={"18px"} fontWeight={500} textAlign="center">{heroDescription}.</Text>
                        {
                            hasLink ?
                                <Link to={buttonLink}>
                                    <CustomSolidButton buttonText={buttonText} />
                                </Link>
                                :
                                <CustomSolidButton buttonText={buttonText} />
                        }
                    </Stack>
                </Center>
            </Stack>
        </Box>
    )
}