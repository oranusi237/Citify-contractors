import { Box, Heading, Text, Stack, HStack, Center, Button, Flex, Icon, flexbox } from "@chakra-ui/react";
import Bg from "../Assets/Images/pexel1.jpg"
import Bg1 from "../Assets/Images/pexels-icsa-833425-1709003.jpg"
import { FaLandmark } from "react-icons/fa6";

export default function Homepage() {
    return (
        <div>
         <Box p={4} bgImage={Bg} bgSize={"cover"} backgroundPosition={"center"} height="500px">
         <Flex alignItems={"Center"} justifyContent={"Center"}>
      <Stack spacing={8} color="#B80000">
        <Center>
          <Heading fontSize="25px"> Business</Heading>
        </Center>
        <Text fontSize="20px">We help you achieve your goals.</Text>
      </Stack>
      </Flex>
      </Box>
      <Box mt={5} >
        <Stack direction={{base: 'column', md: 'row'}}>
          <Box bgImage={Bg1} bgSize={"cover"} bgPosition={"center"} flex={1} height="300px" borderRadius="5px"></Box>
          <Box bg="rgba(0, 0, 0, 0.5)" color="white" p={4} flex={1} borderRadius="5px">
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

      <Box p={4} mt={5} background="rgba(0, 0, 0, 0.5)" color="white" height={300}>
      <Box>
      <Flex  justifyContent={"center"} flexDirection={"column"} flexWrap={"wrap"}>
        <Heading variant="services" textAlign={"center"}>Our Services</Heading>
        <HStack spacing={12} textAlign={"center"}>
          <Box>
          <Box display={"inline-flex"}> <FaLandmark color="#B80000" size={60}/></Box>
          <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet 
          dolorum ipsum et beatae molestias dignissimos aliquid reprehenderit assumenda, quidem, nihil ducimus vitae.
           Debitis maxime modi animi voluptatum autem corporis.
         </Text>
          </Box>
          <Box>
           <Box display={"inline-flex"}> <FaLandmark color="#B80000" size={60}/></Box>
          <Text variant="serviceDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet 
          dolorum ipsum et beatae molestias dignissimos aliquid reprehenderit assumenda, quidem, nihil ducimus vitae.
           Debitis maxime modi animi voluptatum autem corporis.
          </Text>
          </Box>
          <Box>
          <Box display={"inline-flex"}> <FaLandmark color="#B80000" size={60}/></Box>
          <Text variant="serviceDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet 
          dolorum ipsum et beatae molestias dignissimos aliquid reprehenderit assumenda, quidem, nihil ducimus vitae.
           Debitis maxime modi animi voluptatum autem corporis.
          </Text>
          </Box>
        </HStack>
        </Flex>
      </Box>
    </Box>

      <Box mt={8} textAlign="center">
        <Text>Ready to get started?</Text>
        <Button>Contact Us</Button>
      </Box>
        </div>
    )
}