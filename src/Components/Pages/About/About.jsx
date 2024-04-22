import { Box, Center, Flex, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import ServiceImage from "../../Assets/customer-service.jpg";
import StatsBgImage from "../../Assets/handshake.jpg"
import ServicesCard from "./ServicesCard";
import { GrValidate, GrDocumentPerformance } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import WhyChooseUsCard from "./WhyChooseUsCard";
import StatisticsCard from "./StatsCard";
import { ImPower } from "react-icons/im";
import PricingCard from "../../Reuseables/Cards/PricingCard";
import { primaryColor } from "../../Reuseables/colors";
import ProfileCard from "../../Reuseables/Cards/ProfileCard";
import { TbTarget } from "react-icons/tb";
import { BsEye } from "react-icons/bs";


export default function AboutPage() {
    return (
        <Box>
            {/* hero section */}


            {/* Inroduction section */}

            <Spacer height={"70px"} />

            {/* About section with header */}
            <Center>
                <Stack alignSelf="center" justify="center" textAlign="center" width={["95%", "90%", "700px"]}>
                    <Heading>About Citify Contractors</Heading>
                    <Text>
                        Citify Contractors is a forward-thinking marketing and branding firm specializing in the real estate industry. With a commitment to innovation and excellence, we aim to redefine the standards of property marketing, offering unique solutions to both real estate firms and individual clients.
                    </Text>
                </Stack>
            </Center>

            <Spacer height={"80px"} />

            {/* Mission and vission statement */}
            <Box>
                <Heading mb={5} textAlign="center">Our <span style={{ color: primaryColor }}>mission</span> and <span style={{ color: primaryColor }}>vision</span></Heading>
                <Flex pt={10} gap={20} wrap={"wrap"} justify="center" align="center">
                    <Stack height="230px" borderRadius={8} boxShadow={" 0px 0px 8px 30px rgba(236,236,236,0.75)"} padding={5} align="center" width={["100%", "300px", "400px"]}>
                        <TbTarget color={primaryColor} fontSize={50} />
                        <Heading fontSize={"25px"} textAlign="center">Mission</Heading>
                        <Text textAlign="center">To be the leading force in revolutionizing property marketing and branding, fostering growth and prosperity for our partners and clients alike.</Text>
                    </Stack>
                    <Stack height="230px" borderRadius={8} boxShadow={" 0px 0px 8px 30px rgba(236,236,236,0.75)"} padding={5} align="center" width={["100%", "300px", "400px"]}>
                        <BsEye color={primaryColor} fontSize={50} />
                        <Heading fontSize={"25px"} textAlign="center">Vision</Heading>
                        <Text textAlign="center">Our mission is to provide innovative and effective marketing solutions, shaping a seamless and rewarding experience for real estate professionals and property buyers</Text>
                    </Stack>
                </Flex>
            </Box>

            <Spacer height={100} />

            {/* services section  */}
            <Stack id="services" align="center" justify="center">
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

            {/* packages section color="EB4C15"  */}

            <section>
                <Heading mb={2} textAlign="center" color={primaryColor} fontSize={"25px"}>Pricing</Heading>
                <Heading color={"#031B23"} fontWeight={500} fontSize="23px" textAlign="center">Explore our pricing options to find the perfect fit for your project needs.</Heading>
                <Spacer height={10} />
                <Flex justify="center" wrap="wrap" gap={10} >
                    <PricingCard planName={"Basic Plan"} planPrice={"50,000"} planDuration={"Yearly Plan"} feature1={"Dummy feature here"} feature2={"Dummy feature here"} feature3={"Dummy feature here"} feature4={"Dummy feature here"} feature5={"Dummy feature here"} feature6={"Dummy feature here"} feature7={"Dummy feature here"} feature8={"Dummy feature here"} feature9={"Dummy feature here"} />

                    <PricingCard planName={"Gold Plan"} planPrice={"50,000"} planDuration={"Yearly Plan"} feature1={"Dummy feature here"} feature2={"Dummy feature here"} feature3={"Dummy feature here"} feature4={"Dummy feature here"} feature5={"Dummy feature here"} feature6={"Dummy feature here"} feature7={"Dummy feature here"} feature8={"Dummy feature here"} feature9={"Dummy feature here"} />

                    <PricingCard planName={"Basic Plan"} planPrice={"50,000"} planDuration={"Yearly Plan"} feature1={"Dummy feature here"} feature2={"Dummy feature here"} feature3={"Dummy feature here"} feature4={"Dummy feature here"} feature5={"Dummy feature here"} feature6={"Dummy feature here"} feature7={"Dummy feature here"} feature8={"Dummy feature here"} feature9={"Dummy feature here"} />
                </Flex>
            </section>

            <Spacer height={100} />



            {/* why choose us  */}
            <Box padding={10} bg="#F7F7F7">
                <Stack bg="">
                    <Heading>Detailed Marketting Strategy</Heading>
                    <Flex gap="15px" wrap="wrap">
                        <WhyChooseUsCard cardIcon={GrValidate} cardHeading={"Partnership Development"} description="At City Contractors, integrity guides our actions. We uphold honesty and transparency in all dealings, building trust with our clients through ethical practices and clear communication" />

                        <WhyChooseUsCard cardIcon={BiSupport} cardHeading={"Client-Centric Approach"} description="Develop a client referral program to encourage satisfied clients to refer others, fostering a positive word-of-mouth reputation." />

                        <WhyChooseUsCard cardIcon={ImPower} cardHeading={"Digital Presence"} description="Leverage social media, SEO, and online advertising to enhance brand visibility and attract potential clients." />

                        <WhyChooseUsCard cardIcon={GrDocumentPerformance} cardHeading={"Event Marketing"} description="Participate in industry events, host seminars, and engage in community activities to build brand awareness." />

                        <WhyChooseUsCard cardIcon={BiSupport} cardHeading={"Educational Content"} description="Create and share informative content about the real estate market, establishing Citify Contractors as a knowledge leader" />
                    </Flex>
                </Stack>
            </Box>


            {/*Profile section is available */}
            <Stack my={20}>
                <Heading textAlign="center">Our Team</Heading>
                <Text fontWeight={600} textAlign="center">Meet the dynamic individuals driving Citify Contractors to success:</Text>
                <Flex justify="center" gap={10} wrap="wrap">
                    <ProfileCard personName="John Doe" personPosition={"CEO"} />
                    <ProfileCard personName="John Doe" personPosition={"CEO"} />
                    <ProfileCard personName="John Doe" personPosition={"CEO"} />
                </Flex>
            </Stack>

            {/* Statistics section */}
            <Box minH="300px" height={["max-content", "max-content", "300px"]} bgImage={StatsBgImage}>
                <Flex padding={5} wrap="wrap" gap={10} justify="center" align="center" bg="rgba(125,124,119,0.8)" height={["max-content", "max-content", "100%"]} width="100%">
                    <StatisticsCard />
                    <StatisticsCard />
                    <StatisticsCard />
                </Flex>
            </Box>
            <Spacer height={100} />

        </Box>
    )
}