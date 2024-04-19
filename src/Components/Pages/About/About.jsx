import { Box, Center, Flex, Heading, List, ListItem, Spacer, Stack, Text } from "@chakra-ui/react";
import ServiceImage from "../../Assets/customer-service.jpg";
import ServicesCard from "./ServicesCard";
import StatsBgImage from "../../Assets/handshake.jpg"
import { GrValidate, GrDocumentPerformance } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import WhyChooseUsCard from "./WhyChooseUsCard";
import StatisticsCard from "./StatsCard";
import { ImPower } from "react-icons/im";
import CustomSolidButton from "../../Reuseables/Solidbutton";


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
                    <StatisticsCard />
                    <StatisticsCard />
                    <StatisticsCard />
                </Flex>
            </Box>
            <Spacer height={100} />

            {/* packages section color="EB4C15"  */}

            <section>
                <Stack textAlign="center" borderRadius={10} padding="15px" height="max-content" background="#EB4C15" width="300px">
                    <Heading color="whitesmoke">Plan Name</Heading>
                    <Text color="whitesmoke">Plan Duration</Text>
                    <Heading color="whitesmoke">₦100,000</Heading>
                    <List color="white">
                        <ListItem>Feature one</ListItem>
                        <ListItem>Feature 2</ListItem>
                        <ListItem>Feature 3</ListItem>
                        <ListItem>Feature 4</ListItem>
                        <ListItem>Feature 5</ListItem>
                        <ListItem>Feature 6</ListItem>
                        <ListItem>Feature 7</ListItem>
                        <ListItem>Feature 8</ListItem>
                    </List>
                    <CustomSolidButton hoverColor="#ffff" textColor="#EB4C15" buttonColor="#F7F7F7" buttonText={"Choose plan"} />
                </Stack>
            </section>

            <Spacer height={100} />

            {/* why choose us  */}
            <Box padding={10} bg="#F7F7F7">
                <Stack bg="">
                    <Heading>Why choose us</Heading>
                    <Flex gap="15px" wrap="wrap">
                        <WhyChooseUsCard cardIcon={GrValidate} cardHeading={"Integrity"} description="At City Contractors, integrity guides our actions. We uphold honesty and transparency in all dealings, building trust with our clients through ethical practices and clear communication" />

                        <WhyChooseUsCard cardIcon={ImPower} cardHeading={"Quality"} description="Quality is paramount to us. We are committed to delivering work that stands the test of time, prioritizing durability, attention to detail, and precision to ensure client satisfaction." />

                        <WhyChooseUsCard cardIcon={GrDocumentPerformance} cardHeading={"Innovation"} description="We embrace innovation to stay ahead of industry trends. By adopting cutting-edge technologies and methods, we provide modern solutions that enhance efficiency and functionality." />

                        <WhyChooseUsCard cardIcon={BiSupport} cardHeading={"Customer Focus"} description="Our clients are our priority. We listen attentively to their needs, communicate proactively, and adapt flexibly to exceed expectations, building strong relationships based on collaboration and shared success" />
                    </Flex>
                </Stack>
            </Box>

            {/* Values and or mission and vission */}

            {/*Profile section is available */}
        </Box>
    )
}