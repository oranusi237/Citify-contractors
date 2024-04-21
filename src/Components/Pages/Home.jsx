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
      <HeroSection buttonText={"Find out more"} backgroundImage={Bg} headingText={"Business"} heroDescription="We help you achieve your goals" />

      <Box mt={5} >
        <Stack direction={{base: 'column', md: 'row'}}>
          <Box bgImage={Bg1} bgSize={"cover"} bgPosition={"center"} flex={1} height="300px" borderRadius="5px"></Box>
          <Box bg="#282C35" color="white" p={4} flex={1} borderRadius="5px">
            <Flex alignItems={"center"} flexDirection={"column"} textAlign={"center"}>
        <Heading as="h2">About Us</Heading>
        <Text fontSize="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorum ipsum et beatae molestias ut 
          dignissimos aliquid reprehenderit assumenda, quidem, nihil ducimus vitae. Debitis maxime modi animi 
          voluptatum autem corporis.
        </Text>
        <Button marginTop="5px" >
          <a href="/About">Read More</a>
          </Button>
        </Flex>
        </Box>
        </Stack>
      </Box>

      <Box p={4} mt={5} background="#282C35" color="white" height={300} borderRadius="20px">
      <Box>
      <Center flexDirection={"column"} flexWrap={"wrap"}>
        <Text textAlign={"center"}>What You Get</Text>
        <Heading textAlign={"center"}>Our Services</Heading>
        <HStack spacing={12} textAlign={"center"}>
          <Box>
          <Box display={"inline-flex"}> <FaLandmark color="#00840B" size={60}/></Box>
          <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet 
          dolorum ipsum et beatae molestias dignissimos aliquid reprehenderit assumenda, quidem, nihil ducimus vitae.
           Debitis maxime modi animi voluptatum autem corporis.
         </Text>
          </Box>
          <Box>
           <Box display={"inline-flex"}> <FaLandmark color="#00840B" size={60}/></Box>
          <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet 
          dolorum ipsum et beatae molestias dignissimos aliquid reprehenderit assumenda, quidem, nihil ducimus vitae.
           Debitis maxime modi animi voluptatum autem corporis.
          </Text>
          </Box>
          <Box>
          <Box display={"inline-flex"} > <FaLandmark color="#00840B" size={60}/></Box>
          <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet 
          dolorum ipsum et beatae molestias dignissimos aliquid reprehenderit assumenda, quidem, nihil ducimus vitae.
           Debitis maxime modi animi voluptatum autem corporis.
          </Text>
          </Box>
        </HStack>
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
          <Button mt={5}>
            <a href="/Contact">Contact Us</a>
          </Button>
        </Center>
      </Box>
    </Box >
  )
}