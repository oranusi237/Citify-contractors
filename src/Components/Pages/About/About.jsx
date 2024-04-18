import { Box, Center, Flex, Heading, Icon, Spacer, Stack, Text } from "@chakra-ui/react";
import ServiceImage from "../../Assets/customer-service.jpg";
import ServicesCard from "./ServicesCard";
import { GiGrowth } from "react-icons/gi";


export default function AboutPage() {
    return (
        <Box>
            {/* hero section */}


            {/* Inroduction section */}

            <Spacer height={"70px"} />

            {/* About section with header */}
            <Center>
                <Stack alignSelf="center" justify="center" textAlign="center" width={["95%", "90%", "700px"]}>
                    <Heading>About City Contractors</Heading>
                    <Text>
                        At City Contractors, we are a dedicated team of professionals committed to excellence in every project we undertake. With years of experience and a passion for what we do, we strive to deliver top-notch services that meet our clients' unique needs and exceed their expectations. Our team's expertise, combined with our unwavering commitment to quality and customer satisfaction, sets us apart as a trusted name in our industry.
                    </Text>
                </Stack>
            </Center>

            <Spacer height={100} />

            {/* services section  */}
            <Stack align="center" justify="center">
                <Box borderRadius={8} width={"90vw"} bg="#F7F7F7" padding={10}>
                    <Heading textAlign="center">Our services</Heading>
                    <Text textAlign="center">We offer professional services at all times. You can browse through our extensive services and let us know how we can help you</Text>
                    <Flex gap={10} mt={5} justify="center" wrap="wrap">
                        <ServicesCard description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem, quas aperiam corporis eum delectus" serviceImage={ServiceImage} serviceName="Service 1" />
                        <ServicesCard description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem, quas aperiam corporis eum delectus" serviceImage={ServiceImage} serviceName="Service 2" />
                        <ServicesCard description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem, quas aperiam corporis eum delectus" serviceImage={ServiceImage} serviceName="Service 3" />
                        <ServicesCard description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem, quas aperiam corporis eum delectus" serviceImage={ServiceImage} serviceName="Service 4" />
                    </Flex>
                </Box>
            </Stack>
            <Spacer height={100} />

            {/* Statistics section */}
            <Box>
                <Heading>Statistics section</Heading>
                <Stack justify="center" align="center" width={["90%", "90%", "250px"]} boxShadow={"-1px 1px 10px 2px rgba(192,198,165,0.75)"} padding={5}>
                    <Stack justify="center" align="center" width="200px" height="150px" background={"#FEBEBE"} position="relative">
                        <Icon alignSelf="center" fontSize={50} as={GiGrowth} position="absolute" />
                    </Stack>

                </Stack>
            </Box>

            {/* Values and or mission and vission */}

            {/*Profile section is available */}
        </Box>
    )
}