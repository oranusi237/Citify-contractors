import { Box, Icon, Stack, Heading, Text } from "@chakra-ui/react";
import { primaryColor } from "../../Reuseables/colors";

export default function WhyChooseUsCard({ cardIcon, cardHeading, description }) {
    return (
        <Box>
            <Stack padding={5} width="370px">
                <Stack borderRadius="50%" padding={3} bg="white" height="90px" width="90px" justify="center" align="center">
                    <Icon color={primaryColor} as={cardIcon} fontSize="50px" />
                </Stack>
                <Heading fontSize="30px" fontWeight={700}>{cardHeading}</Heading>
                <Text mt={2}>{description}</Text>
            </Stack>
        </Box >
    )
}