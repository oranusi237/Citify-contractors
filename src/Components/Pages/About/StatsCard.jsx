import { Box, Stack, Text, Heading } from "@chakra-ui/react";

export default function StatisticsCard() {
    return (
        <Box>
            <Stack borderRadius={10} style={{ backdropFilter: "blur(10px)" }} textAlign="center" bg="rgba(161,165,158, 0.7)" justify="center" align="center" width={["90%", "90%", "250px"]} padding={5}>
                <Heading color="white">100+</Heading>
                <Text fontWeight={500} color="whitesmoke">Projects completed</Text>
                <Text color="whitesmoke">We have completed over one hundred projects and still counting</Text>
            </Stack>
        </Box>
    )
}