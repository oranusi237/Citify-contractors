import { Box, Heading, Text, Stack, Center, Accordion, Divider, AccordionItem, AccordionPanel, AccordionButton, AccordionIcon, Button, Flex, Spacer, Image, Grid, GridItem, } from "@chakra-ui/react";
import HeroSection from "../Reuseables/HeroSection";
import CustomSolidButton from "../Reuseables/Solidbutton";
import BgImage from "../../Components/Assets/house-sale.jpg"
import { Link } from "react-router-dom";
import TaskImage from "../Assets/Images/undraw_note_list.svg";
import HouseSearchImage from "../Assets/Images/undraw_house_searching.svg"
import { primaryColor } from "../Reuseables/colors";
import ServiceSection from "../Reuseables/Sections/Ourservices";

export default function Homepage() {

  function CustomAccordionButton({ label, itemNumber }) {
    return (
      <AccordionButton>
        <Flex fontWeight={400} gap={3} justify="start" align="center" flex={1} textAlign='left'>
          <Center fontSize="23px" color="white" fontWeight={800} textAlign="center" bg={primaryColor} borderRadius={"50%"} height={"30px"} width={"30px"}>{itemNumber}</Center>
          <Text fontSize={"16px"}>{label}</Text>
        </Flex>
        <AccordionIcon />
      </AccordionButton>
    )
  }

  return (
    <Box>
      <HeroSection buttonText={"Find out more"} hasLink={true} buttonLink="/about" backgroundImage={BgImage} headingText={"Citify Contractors"} heroDescription="A dynamic marketing and branding firm poised to revolutionize the real estate industry and elevating the Standards of Property Marketing Through Creative Brilliance and Expertise" />
      <Box mt={5}>
        <Grid gap={10} alignItems={"center"} gridTemplateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}>
          <GridItem justifySelf={"end"} justifyContent={"end"}>
            <Image width={"500px"} src={HouseSearchImage} height="400px" />
          </GridItem>

          <GridItem>
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
          </GridItem>
        </Grid>
      </Box>

      <Spacer height={50} />

      <Stack align={"center"} mt={5} background="#2E8B57" minH={"max-content"} borderRadius="20px">
        <Stack justify="center" align="center" py={10} flexWrap={"wrap"}>
          <Text color="white" textAlign={"center"}>What You Get</Text>
          <Heading color="white" textAlign={"center"}>Our Services</Heading>
          <Divider alignSelf="center" border={`2px solid ${primaryColor}`} width="150px" color={primaryColor} />
          <Flex alignSelf="center" width="100%" justify="center" wrap="wrap" gap={10}>
            <ServiceSection />
          </Flex>
        </Stack>
      </Stack>

      <Spacer height={100} />
      <Box mt={5} >
        <Flex alignSelf={"center"} align={"center"} justify="center" direction={['column', 'row', "row"]}>
          <Image objectFit={"contain"} height={"400px"} src={TaskImage} />
          <Box p={4}>
            <Flex justify={"flex-end"} width={"402px"} flexDirection={"column"} textAlign={"start"}>
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

                  <AccordionItem >
                    <h2>
                      <CustomAccordionButton itemNumber={3} label={"Get your invoice"} />
                    </h2>
                    <AccordionPanel pb={4}>
                      An invoice will be sent to you after proccessing your order which will contain your schedule information
                    </AccordionPanel>
                  </AccordionItem>
                </Stack>
              </Accordion>
            </Flex>
          </Box>
        </Flex >
      </Box >
      <Spacer height={100} />

      <Box mt={8} textAlign="center" background="#2E8B57" color="#fff" borderRadius="10px" height={180}>
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