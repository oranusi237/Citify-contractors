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
                        We are a dedicated team of professionals committed to excellence in every project we undertake. With years of experience and a passion for what we do, we strive to deliver top-notch services that meet our clients' unique needs and exceed their expectations. Our team's expertise, combined with our unwavering commitment to quality and customer satisfaction, sets us apart as a trusted name in our industry.
                    </Text>
                </Stack>
            </Center>

            <Spacer height={100} />
            {/* Mission and vission statement */}

            <Box>
                <Heading textAlign="center">Our <span style={{ color: primaryColor }}>mission</span> and <span style={{ color: primaryColor }}>vission</span></Heading>
                <Flex pt={10} gap={20} wrap={"wrap"} justify="center" align="center">
                    <Stack borderRadius={8} boxShadow={" 0px 0px 8px 30px rgba(236,236,236,0.75)"} padding={5} align="center" width={["100%", "300px", "400px"]}>
                        <TbTarget color={primaryColor} fontSize={50} />
                        <Heading fontSize={"25px"} textAlign="center">Mission</Heading>
                        <Text textAlign="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur reprehenderit aliquam ea neque quia magni cumque pariatur molestiae nulla incidunt, dolore saepe eligendi, porro assumenda repudiandae enim voluptatum repellendus quaerat?</Text>
                    </Stack>
                    <Stack borderRadius={8} boxShadow={" 0px 0px 8px 30px rgba(236,236,236,0.75)"} padding={5} align="center" width={["100%", "300px", "400px"]}>
                        <BsEye color={primaryColor} fontSize={50} />
                        <Heading fontSize={"25px"} textAlign="center">Vision</Heading>
                        <Text textAlign="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur reprehenderit aliquam ea neque quia magni cumque pariatur molestiae nulla incidunt, dolore saepe eligendi, porro assumenda repudiandae enim voluptatum repellendus quaerat?</Text>
                    </Stack>
                </Flex>
            </Box>

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

            {/* packages section color="EB4C15"  */}

            <section>
                <Heading mb={2} textAlign="center" color={primaryColor} fontSize={"20px"}>Pricing</Heading>
                <Heading color={"#031B23"} fontSize="25px" textAlign="center">Explore our pricing options to find the perfect fit for your project needs.</Heading>
                <Spacer height={10} />
                <Flex justify="center" wrap="wrap" gap={10} >
                    <PricingCard planName={"Basic Plan"} planPrice={"50,000"} planDuration={"Yearly Plan"} feature1={"Dummy feature here"} feature2={"Dummy feature here"} feature3={"Dummy feature here"} feature4={"Dummy feature here"} feature5={"Dummy feature here"} feature6={"Dummy feature here"} feature7={"Dummy feature here"} feature8={"Dummy feature here"} feature9={"Dummy feature here"} />

                    <PricingCard planName={"Gold Plan"} planPrice={"50,000"} planDuration={"Yearly Plan"} feature1={"Dummy feature here"} feature2={"Dummy feature here"} feature3={"Dummy feature here"} feature4={"Dummy feature here"} feature5={"Dummy feature here"} feature6={"Dummy feature here"} feature7={"Dummy feature here"} feature8={"Dummy feature here"} feature9={"Dummy feature here"} />

                    <PricingCard planName={"Basic Plan"} planPrice={"50,000"} planDuration={"Yearly Plan"} feature1={"Dummy feature here"} feature2={"Dummy feature here"} feature3={"Dummy feature here"} feature4={"Dummy feature here"} feature5={"Dummy feature here"} feature6={"Dummy feature here"} feature7={"Dummy feature here"} feature8={"Dummy feature here"} feature9={"Dummy feature here"} />
                </Flex>
            </section>

            <Spacer height={100} />



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


            {/*Profile section is available */}
            <Stack my={20}>
                <Heading textAlign="center">Meet our team</Heading>
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