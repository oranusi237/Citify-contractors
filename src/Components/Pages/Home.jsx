import { Box, Heading, Text, Stack,  Center, Button, Flex } from "@chakra-ui/react";
import NavBar from "../NavBar";
import Bg from "../Assets/Images/pexel.jpg"

export default function Homepage() {
    return (
        <div>
            <Heading> <NavBar/> </Heading>
            <Box p={4} backgroundImage={Bg}>
              <Flex alignItems={"Center"} justifyContent={"Center"}>
      <Stack spacing={8} >
        <Center>
          <Heading fontSize="25px"> Business</Heading>
        </Center>
        <Text fontSize="20px">We help you achieve your goals.</Text>
      </Stack>
      </Flex>
      <Flex justifyContent="center">
      <Box mt={8}>
        <Heading fontSize="25px">About Us</Heading>
        <Text fontSize="lg">
          description
        </Text>
      </Box>
      </Flex>
      <Flex justifyContent="center">
      <Box mt={8}>
        <Heading fontSize="25px">Our Services</Heading>
        <Stack spacing={4} textAlign="center">
          <Text>description</Text>
          <Text>description</Text>
          <Text>description</Text>
        </Stack>
      </Box>
      </Flex>
      <Box mt={8} textAlign="center">
        <Text>Ready to get started?</Text>
        <Button>Contact Us</Button>
      </Box>
    </Box>
        </div>
    )
}