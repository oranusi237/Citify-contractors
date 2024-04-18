import { Box, Heading, Stack, Image } from "@chakra-ui/react";
import { primaryColor } from "../../Reuseables/colors";

export default function ServicesCard({ serviceImage, description, serviceName }) {
    return (
        <Box>
            <Stack bg="white" borderRadius={8} padding={"20px"} boxShadow={"-1px 1px 20px 2px rgba(192,198,165,0.75)"} justify="center" align="center" textAlign="center" width={["90%", "90%", "300px"]}>
                <Image src={serviceImage} alt="service description image" />
                <Heading fontWeight="900" color={primaryColor} fontSize="25px">{serviceName}</Heading>
                <Heading fontWeight={200} fontSize="17px">{description}</Heading>
            </Stack>
        </Box>
    )
}