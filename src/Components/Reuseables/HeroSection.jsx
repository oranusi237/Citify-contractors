import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import CustomSolidButton from "./Solidbutton";
import { Link } from "react-router-dom";

export default function HeroSection({ backgroundImage, hasLink, buttonLink, buttonText }) {
    return (
        <Box height="600px" bgSize="cover" bgImage={backgroundImage}>
            <Stack height={"100%"} width="100%" bg="rgba(0, 0, 10, 0.8)">
                <Center height={"100%"}>
                    <Stack color="white" width={["auto", "auto", "500px"]} align="center">
                        <Heading>Welcome to City Contractors</Heading>
                        <Text textAlign="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem, quas aperiam corporis eum delectus ad non ab quibusdam dicta facere eaque quidem deserunt eligendi provident necessitatibus perspiciatis eius quod.</Text>
                        {
                            hasLink ?
                                <Link to={buttonLink}>
                                    <CustomSolidButton buttonText="Read more >>" />
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