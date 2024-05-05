import { Box, Heading, Text, Stack, Center, Accordion, Divider, AccordionItem, AccordionPanel, AccordionButton, AccordionIcon, Button, Flex, Spacer, } from "@chakra-ui/react";
import Bg from "../Assets/Images/pexel1.jpg"
import Bg1 from "../Assets/Images/pexels-icsa-833425-1709003.jpg"
import HeroSection from "../Reuseables/HeroSection";
import CustomSolidButton from "../Reuseables/Solidbutton";
import { Link } from "react-router-dom";
import { primaryColor } from "../Reuseables/colors";
import ServiceSection from "../Reuseables/Sections/Ourservices";

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
      <Link to="/">
        <HeroSection buttonText={"Find out more"} backgroundImage={Bg} headingText={"Citify Contractors"} heroDescription="We help you achieve your goals" />
      </Link>
      <Box mt={5} >
        <Stack align="center" direction={{ base: 'column', md: 'row' }}>
          <Box bgImage={Bg1} bgSize={"cover"} bgPosition={"center"} flex={1} height="500px" borderRadius="5px"></Box>
          <Box p={4} flex={1} borderRadius="5px">
            <Flex alignItems={"center"} flexDirection={"column"} textAlign={"start"}>
              <Stack >
                <Heading fontSize="20px">About us</Heading>
                <Heading fontSize="25px">Why choosing us is best for you</Heading>
                {/* I used the shorter version of the about here and the lengthier one on the about page  */}
                <Text>Citify Contractors is a forward-thinking marketing and branding firm specializing in the real estate industry. With a commitment to innovation and excellence, we aim to redefine the standards of property marketing, offering unique solutions to both real estate firms and individual clients..</Text>
                <Link to="/about">
                  <CustomSolidButton buttonWidth="200px" buttonText="Find more about us" />
                </Link>
              </Stack>
            </Flex>
          </Box>
        </Stack>
      </Box>

      <Spacer height={50} />

      <Stack mt={5} background="#282C35" minH={"max-content"} borderRadius="20px">
        <Stack justify="center" align="center" py={10} flexWrap={"wrap"}>
          <Text color="white" textAlign={"center"}>What You Get</Text>
          <Heading color="white" textAlign={"center"}>Our Services</Heading>
          <Divider alignSelf="center" border={`2px solid ${primaryColor}`} width="150px" color={primaryColor} />
          <Flex width="100%" justify="center" wrap="wrap" gap={10}>
            <ServiceSection />
          </Flex>
        </Stack>
      </Stack>


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