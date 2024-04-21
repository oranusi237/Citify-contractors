import { Box, Heading, Text, Stack, HStack, Center, Button, Flex,  } from "@chakra-ui/react";
import Bg from "../Assets/Images/pexel1.jpg"
import Bg1 from "../Assets/Images/pexels-icsa-833425-1709003.jpg"
import { FaLandmark } from "react-icons/fa6";

export default function Homepage() {
    return (
        <div>
         <Box p={4} bgImage={Bg} bgSize={"cover"} backgroundPosition={"center"} height="500px">
         <Flex  justifyContent={"Center"}>
      <Stack spacing={8} color="#fff">
        <Center>
          <Heading> Business</Heading>
        </Center>
        <Text fontSize="25px">We help you achieve your goals.</Text>
      </Stack>
      </Flex>
      </Box>
      <Box mt={5} >
        <Stack direction={{base: 'column', md: 'row'}}>
          <Box bgImage={Bg1} bgSize={"cover"} bgPosition={"center"} flex={1} height="300px" borderRadius="5px"></Box>
          <Box bg="#282C35" color="white" p={4} flex={1} borderRadius="5px">
            <Flex alignItems={"center"} flexDirection={"column"} textAlign={"center"}>
        <Heading as="h2">About Us</Heading>
        <Text fontSize="lg">
        We are a dedicated team of professionals committed to excellence in every project we undertake. 
        With years of experience and a passion for what we do, we strive to deliver top-notch services 
        that meet our clients' unique needs and exceed their expectations. Our team's expertise, 
        combined with our unwavering commitment to quality and customer satisfaction, 
        sets us apart as a trusted name in our industry.
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
        <HStack  spacing={12} textAlign={"center"}>
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
    </Box>

      <Box mt={8} textAlign="center" background="#282C35" color="#fff" borderRadius="10px" height={180}>
        <Center flexDirection="column" lineHeight={10}>
        <Text>Get Started</Text>
       <Heading >Ready to get started?</Heading> 
        <Button mt={5}>
          <a href="/Contact">Contact Us</a>
        </Button>
        </Center>
      </Box>
        </div>
    )
}