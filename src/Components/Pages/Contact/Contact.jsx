import { Box, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import CustomSolidButton from "../../Reuseables/Solidbutton";

export default function ContactPage() {
    return (
        <Box>
            <Flex wrap={"wrap"} align="start" padding={10}>
                <Stack padding={10}>
                    <Text lineHeight={1.8} fontSize="18px">Welcome to City Contractors, where your satisfaction is our utmost priority. We are dedicated to fostering open communication and are always eager to assist you. Whether you have inquiries regarding our comprehensive range of services, wish to provide feedback, or simply want to connect, we invite you to reach out. 

                        Please feel free to contact us by completing the form below. Alternatively, you can email us directly at contact@citycontractors.com. Our committed team is devoted to delivering prompt and informative responses to all your inquiries.

                        We recognize the value of dependable communication and eagerly anticipate the opportunity to serve you. Thank you for considering City Contractors for your needs. We look forward to connecting with you soon!
                    </Text>
                </Stack>
                <form>
                    <Stack padding={10} width={["90vw", "80vw", "60vw"]}>
                        <Heading>Contact us</Heading>
                        <FormControl>
                            <FormLabel>Full name</FormLabel>
                            <Input type="tex" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Message</FormLabel>
                            <Textarea />
                        </FormControl>
                        <CustomSolidButton buttonText={"Send message"} type={"submit"} />
                    </Stack>
                </form>
            </Flex>
        </Box>
    )
}