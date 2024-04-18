import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import HeroSectionImage from "../../Assets/coaching-image.jpg";
import CustomSolidButton from "../../Reuseables/Solidbutton";


export default function AboutPage() {
    return (
        <Box>
            {/* hero section */}
            <Box height="600px" bgSize="cover" bgImage={HeroSectionImage}>
                <Stack height={"100%"} width="100%" bg="rgba(0, 0, 10, 0.8)">
                    <Center height={"100%"}>
                        <Stack color="white" width={["auto", "auto", "500px"]} align="center">
                            <Heading>Welcome to City Contractors</Heading>
                            <Text textAlign="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem, quas aperiam corporis eum delectus ad non ab quibusdam dicta facere eaque quidem deserunt eligendi provident necessitatibus perspiciatis eius quod.</Text>
                            <CustomSolidButton buttonText="Read more >>" />
                        </Stack>
                    </Center>
                </Stack>
            </Box>

            {/* Inroduction section */}
    
            <Center>
                <Stack alignSelf="center" justify="center" textAlign="center" width={["95%", "90%", "700px"]}>
                    <Heading>About City Contractors</Heading>
                    <Text>
                        At City Contractors, we are a dedicated team of professionals committed to excellence in every project we undertake. With years of experience and a passion for what we do, we strive to deliver top-notch services that meet our clients' unique needs and exceed their expectations. Our team's expertise, combined with our unwavering commitment to quality and customer satisfaction, sets us apart as a trusted name in our industry.
                    </Text>
                </Stack>
            </Center>

            {/* About section with header */}

            {/* Statistics section */}

            {/* Values and or mission and vission */}

            {/*Profile section is available */}
        </Box>
    )
}