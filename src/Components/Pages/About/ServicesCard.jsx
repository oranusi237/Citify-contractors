import { Box, Heading, Stack, Icon, Text } from "@chakra-ui/react";
import { primaryColor } from "../../Reuseables/colors";
import HoverAnimationContainer from "../../AnimationContainers/Hover";

export default function ServicesCard({ cardIcon, description, serviceName }) {
    return (
        <Box>
            <HoverAnimationContainer children={
                <Stack flex={1} height="295px" bg="white" borderRadius={8} padding={"20px"} boxShadow={"-1px 1px 5px 1px rgba(192,198,165,0.75)"} justify="space-around" align="center" textAlign="center" width={["90%", "90%", "280px"]}>
                    <Icon fontSize={50} as={cardIcon} alt="service description image" />
                    <Heading fontWeight="900" color={primaryColor} fontSize="25px">{serviceName}</Heading>
                    <Text fontWeight={200} fontSize="17px">{description}</Text>
                </Stack>

            } />
        </Box>
    )
}