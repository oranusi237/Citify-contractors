
import { Box, Heading, Text, Stack, Center, Accordion, AccordionItem, AccordionPanel, AccordionButton, AccordionIcon, Button, Flex, Spacer, } from "@chakra-ui/react";
import Bg from "../Assets/Images/pexel1.jpg"
import Bg1 from "../Assets/Images/pexels-icsa-833425-1709003.jpg"
import HeroSection from "../Reuseables/HeroSection";
import CustomSolidButton from "../Reuseables/Solidbutton";
import { Link } from "react-router-dom";
import ServicesCard from "./About/ServicesCard";
import { BsHouse } from "react-icons/bs";
import { primaryColor } from "../Reuseables/colors";

export default function Homepage() {

  function CustomAccordionButton({ label, itemNumber }) {
    return (
      <AccordionButton>
        <Flex fontWeight={500} fontSize="23px" gap={3} justify="start" align="center" flex={1} textAlign='left'>
          <Center color="white" fontWeight={800} textAlign="center" bg={primaryColor} borderRadius={"50%"} height={"30px"} width={"30px"}>{itemNumber}</Center>{label}
        </Flex>
        <AccordionIcon />
      </AccordionButton>
    )
  }

  return (
    <Box>
      <HeroSection buttonText={"Find out more"} backgroundImage={Bg} headingText={"Citify Contractors"} heroDescription="We help you achieve your goals" />

      <Box mt={5} >
        <Stack align="center" direction={{ base: 'column', md: 'row' }}>
          <Box bgImage={Bg1} bgSize={"cover"} bgPosition={"center"} flex={1} height="500px" borderRadius="5px"></Box>
          <Box p={4} flex={1} borderRadius="5px">
            <Flex alignItems={"center"} flexDirection={"column"} textAlign={"start"}>
              <Stack >
                <Heading fontSize="20px">About us</Heading>
                <Heading fontSize="25px">Why choosing us is best for you</Heading>
                <Text>We are a dedicated team of professionals committed to excellence in every project we undertake. With years of experience and a passion for what we do, we strive to deliver top-notch services that meet our clients' unique needs and exceed their expectations. Our team's expertise, combined with our unwavering commitment to quality and customer satisfaction, sets us apart as a trusted name in our industry.</Text>
                <Link to="/about">
                  <CustomSolidButton buttonWidth="200px" buttonText="Find more about us" />
                </Link>
              </Stack>
            </Flex>
          </Box>
        </Stack>
      </Box>

      <Spacer height={50} />

      <Box p={4} mt={5} background="#282C35" minH={"max-content"} borderRadius="20px">
        <Center py={10} gap={3} flexDirection={"column"} flexWrap={"wrap"}>
          <Text color="white" textAlign={"center"}>What You Get</Text>
          <Heading color="white" textAlign={"center"}>Our Services</Heading>

          <Flex gap={10}>
            <ServicesCard serviceName={"Real estate management"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius, soluta exercitationem ducimus inventore saepe nostrum placeat temporibus, dolorum maxime vero sapiente tempore rerum enim eum ab architecto, commodi distinctio."} cardIcon={BsHouse} />

            <ServicesCard serviceName={"Branding"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius, soluta exercitationem ducimus inventore saepe nostrum placeat temporibus, dolorum maxime vero sapiente tempore rerum enim eum ab architecto, commodi distinctio."} cardIcon={BsHouse} />

            <ServicesCard serviceName={"Marketing"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius, soluta exercitationem ducimus inventore saepe nostrum placeat temporibus, dolorum maxime vero sapiente tempore rerum enim eum ab architecto, commodi distinctio."} cardIcon={BsHouse} />
          </Flex>
        </Center>
      </Box>


      <Box mt={5} >
        <Stack align="center" direction={{ base: 'column', md: 'row' }}>
          <Box bgImage={Bg1} bgSize={"cover"} bgPosition={"center"} flex={1} height="500px" borderRadius="5px"></Box>
          <Box p={4} flex={1} borderRadius="5px">
            <Flex alignItems={"center"} flexDirection={"column"} textAlign={"start"}>
              <Stack >
                <Heading fontSize="20px">How it works</Heading>
                <Accordion allowToggle>

                  <Stack gap={2}>
                    <AccordionItem>
                      <h2>
                        <CustomAccordionButton itemNumber={1} label={"Select a package"} />
                      </h2>
                      <AccordionPanel pb={4}>
                        Select a package from our pricing table
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <Heading >
                        <CustomAccordionButton itemNumber={2} label="Complete payment form" />
                      </Heading>
                      <AccordionPanel pb={4}>
                        Complete payment form and checkout
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem width="402px">
                      <h2>
                        <CustomAccordionButton itemNumber={3} label={"Get your invoice"} />
                      </h2>
                      <AccordionPanel pb={4}>
                        An invoice will be sent to you after proccessing your order which will contain your schedule information
                      </AccordionPanel>
                    </AccordionItem>
                  </Stack>
                </Accordion>
              </Stack>
            </Flex>
          </Box>
        </Stack >
      </Box >

      <Box mt={8} textAlign="center" background="#282C35" color="#fff" borderRadius="10px" height={180}>
        <Center flexDirection="column" lineHeight={10}>
          <Text>Get Started</Text>
          <Heading >Ready to get started?</Heading>
          <Link to="/contact">
          <Button mt={5}>Contact Us</Button>
          </Link>
        </Center>
      </Box>
    </Box >
  )
}