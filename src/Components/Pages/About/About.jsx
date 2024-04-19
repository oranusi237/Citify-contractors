import { Box, Center, Flex, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import ServiceImage from "../../Assets/customer-service.jpg";
import ServicesCard from "./ServicesCard";
import StatsBgImage from "../../Assets/handshake.jpg"
import { GrValidate, GrDocumentPerformance } from "react-icons/gr";
import { TbCurrencyNaira } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import WhyChooseUsCard from "./WhyChooseUsCard";


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
                        <ServicesCard description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem, quas aperiam corporis eum delectus" cardIcon={GrDocumentPerformance} serviceName="Service 1" />
                        <ServicesCard description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem, quas aperiam corporis eum delectus" serviceImage={ServiceImage} serviceName="Service 2" />
                        <ServicesCard description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem, quas aperiam corporis eum delectus" serviceImage={ServiceImage} serviceName="Service 3" />
                        <ServicesCard description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem, quas aperiam corporis eum delectus" serviceImage={ServiceImage} serviceName="Service 4" />
                    </Flex>
                </Box>
            </Stack>
            <Spacer height={100} />

            {/* Statistics section */}
            <Box minH="300px" height={["max-content", "max-content", "300px"]} bgImage={StatsBgImage}>
                <Flex padding={5} wrap="wrap" gap={10} justify="center" align="center" bg="rgba(125,124,119,0.8)" height={["max-content", "max-content", "100%"]} width="100%">
                    {/* <Stack>
                        <Flex justify="center" gap={10}> */}
                    <Stack borderRadius={10} style={{ backdropFilter: "blur(10px)" }} textAlign="center" bg="rgba(161,165,158, 0.7)" justify="center" align="center" width={["90%", "90%", "250px"]} padding={5}>
                        <Heading color="white">100+</Heading>
                        <Text fontWeight={500} color="whitesmoke">Projects completed</Text>
                        <Text color="whitesmoke">We have completed over one hundred projects and still counting</Text>
                    </Stack>
                    <Stack borderRadius={10} style={{ backdropFilter: "blur(10px)" }} textAlign="center" bg="rgba(161,162,158, 0.7)" justify="center" align="center" width={["90%", "90%", "250px"]} padding={5}>
                        <Heading color="white">100+</Heading>
                        <Text fontWeight={500} color="whitesmoke">Projects completed</Text>
                        <Text color="whitesmoke">We have completed over one hundred projects and still counting</Text>
                    </Stack>
                    <Stack borderRadius={10} style={{ backdropFilter: "blur(10px)" }} textAlign="center" bg="rgba(161,160,158, 0.7)" justify="center" align="center" width={["90%", "90%", "250px"]} padding={5}>
                        <Heading color="white">100+</Heading>
                        <Text fontWeight={500} color="whitesmoke">Projects completed</Text>
                        <Text color="whitesmoke">We have completed over one hundred projects and still counting</Text>
                    </Stack>
                    {/* </Flex>
                    </Stack> */}
                </Flex>
            </Box>
            <Spacer height={100} />
            {/* why choose us  */}
            <Box padding={10} bg="#F7F7F7">
                <Stack bg="">
                    <Heading>Why choose us</Heading>
                    <Flex gap="15px" wrap="wrap">
                        <WhyChooseUsCard cardIcon={GrValidate} cardHeading={"Professional appraoch"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis asperiores est, commodi aliquid ipsum, dolores tempore tenetur, magni deserunt blanditiis rem sapiente labore ad corrupti at. Sapiente, repellat error?" />

                        <WhyChooseUsCard cardIcon={GrDocumentPerformance} cardHeading={"Proven track record"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis asperiores est, commodi aliquid ipsum, dolores tempore tenetur, magni deserunt blanditiis rem sapiente labore ad corrupti at. Sapiente, repellat error?" />

                        <WhyChooseUsCard cardIcon={TbCurrencyNaira} cardHeading={"Cost optimization"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis asperiores est, commodi aliquid ipsum, dolores tempore tenetur, magni deserunt blanditiis rem sapiente labore ad corrupti at. Sapiente, repellat error?" />

                        <WhyChooseUsCard cardIcon={BiSupport} cardHeading={"Customer support"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis asperiores est, commodi aliquid ipsum, dolores tempore tenetur, magni deserunt blanditiis rem sapiente labore ad corrupti at. Sapiente, repellat error?" />
                    </Flex>
                </Stack>
            </Box>

            {/* Values and or mission and vission */}

            {/*Profile section is available */}
        </Box>
    )
}