import { Center, Heading, Stack, Text } from "@chakra-ui/react";

export default function PageNotFound() {
    return (
        <Center minH={"80vh"} textAlign="center">
            <Stack>
                <Heading>404 error!</Heading>
                <Text>The page you are looking for cannot be found</Text>
            </Stack>
        </Center>
    )
}