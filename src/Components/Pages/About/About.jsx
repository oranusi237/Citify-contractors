import { Box, Center, Divider, Flex, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import StatsBgImage from "../../Assets/handshake.jpg"
import StatisticsCard from "./StatsCard";
import { primaryColor } from "../../Reuseables/colors";
import ProfileCard from "../../Reuseables/Cards/ProfileCard";
import { TbTarget } from "react-icons/tb";
import { BsEye } from "react-icons/bs";
import { TimeLineComponentSecond } from "../../Reuseables/Timeline";
import FadeInAnimationContainer from "../../AnimationContainers/FadeIn";
import "../../AnimationContainers/styles.css"
import ServiceSection from "../../Reuseables/Sections/Ourservices";


export default function AboutPage() {

    return (
        <Box>
            {/* Inroduction section */}
            <Center mt={10}>
                <Stack alignSelf="center" justify="center" textAlign="center" width={["95%", "90%", "700px"]}>
                    <Heading>About Citify Contractors</Heading>
                    <Text>
                        Citify Contractors is a dynamic marketing and branding firm poised to revolutionize the real estate industry in Wuse, Abuja. With a startup capital of 8 million Naira, our goal is to establish partnerships with a minimum of 7 real estate firms, each offering at least 10 different site locations for clients to choose from. We anticipate monthly revenues of 2 million Naira, with a break-even point expected within the first 6 months. Our unique revenue model involves a 10% service charge on each property sold for our partnering firms and a 2% service charge from our individual clients for documentation, search, and property verification.
                    </Text>
                </Stack>
            </Center>

            <Spacer height={100} />

            {/* Mission and vission statement */}
            <Box >
                <Heading mb={5} textAlign="center">Our <span style={{ color: primaryColor }}>Mission</span> and <span style={{ color: primaryColor }}>Vision</span></Heading>
                <Flex pt={10} gap={20} wrap={"wrap"} justify="center" align="center">

                    <FadeInAnimationContainer children={
                        <Stack height="230px" borderRadius={8} boxShadow={"0px 0px 8px 15px rgba(236,236,236,0.75)"} padding={5} align="center" width={["90vw%", "300px", "400px"]}>
                            <TbTarget color={primaryColor} fontSize={50} />
                            <Heading fontSize={"25px"} textAlign="center">Mission</Heading>
                            <Text textAlign="center">To be the leading force in revolutionizing property marketing and branding, fostering growth and prosperity for our partners and clients alike.</Text>
                        </Stack>
                    } />

                    <FadeInAnimationContainer children={
                        <Stack animation={"BounceIn 0.6s linear 0.1s 1 normal forwards"} height="230px" borderRadius={8} boxShadow={" 0px 0px 8px 15px rgba(236,236,236,0.75)"} padding={5} align="center" width={["100%", "300px", "400px"]}>
                            <BsEye color={primaryColor} fontSize={50} />
                            <Heading fontSize={"25px"} textAlign="center">Vision</Heading>
                            <Text textAlign="center">Our mission is to provide innovative and effective marketing solutions, shaping a seamless and rewarding experience for real estate professionals and property buyers</Text>
                        </Stack>
                    } />
                </Flex>
            </Box>

            <Spacer height={100} />
            <Stack>
                <Stack>
                    <Heading textAlign={"center"}>Our Services</Heading>
                    <Divider alignSelf="center" border={`2px solid ${primaryColor}`} width="150px" color={primaryColor} />
                </Stack>
                <ServiceSection />
            </Stack>

            <Spacer height={100} />


            {/* services section  */}
            <Stack id="services" align="center" justify="center">
                <Box borderRadius={8} width={"90vw"} bg="#F7F7F7" padding={10}>
                    <Heading textAlign="center">Marketing Strategy</Heading>
                    <Text textAlign="center">Our marketing strategy is based on a comprehensive understanding of our target audience and their needs.</Text>
                    <Stack>
                        <TimeLineComponentSecond />
                    </Stack>

                </Box>
            </Stack>
            <Spacer height={100} />

            {/*Profile section is available */}
            <FadeInAnimationContainer children={
                <Stack my={20}>
                    <Heading textAlign="center">Our Team</Heading>
                    <Text fontWeight={600} textAlign="center">Meet the dynamic individuals driving Citify Contractors to success:</Text>
                    <Flex justify="center" gap={10} wrap="wrap">
                        <ProfileCard personName="Founder Name" personPosition={"Founder/CEO"} />
                        <ProfileCard personName="Director Name" personPosition={"Director Of Marketing"} />
                        <ProfileCard personName="HOP Name" personPosition={"Head Of Operations"} />
                        <ProfileCard personName="Finance Manager name" personPosition={"Finance Manager"} />
                    </Flex>
                </Stack>
            } />

            <Spacer height={100} />

            {/* why choose us  */}
            {/* <Box padding={10} bg="#F7F7F7">
                <Stack>
                    <Stack>
                        <Heading textAlign={"center"}>Financial Projections</Heading>
                        <Divider alignSelf="center" border={`2px solid ${primaryColor}`} width="150px" color={primaryColor} />
                    </Stack>
                    <Stack mt={10}>
                        <TimeLineComponent />
                    </Stack>
                </Stack>
            </Box> */}

            {/* Statistics section */}
            <FadeInAnimationContainer children={
                <Box minH="300px" height={["max-content", "max-content", "300px"]} bgImage={StatsBgImage}>
                    <Flex padding={5} wrap="wrap" gap={10} justify="center" align="center" bg="rgba(125,124,119,0.8)" height={["max-content", "max-content", "100%"]} width="100%">
                        <StatisticsCard />
                        <StatisticsCard />
                        <StatisticsCard />
                    </Flex>
                </Box>
            } />
            <Spacer height={100} />

        </Box>
    )
}