import { Box, Stack, ListItem, List, Heading, Text } from "@chakra-ui/react";
import CustomSolidButton from "../Solidbutton";

export default function PricingCard({ planName, planDuration, planPrice, numberOfFeatures, feature1, feature2, feature3, feature4, feature5,
    feature6, feature7, feature8, feature9, feature10 }) {
    return (
        <Box>
            <Stack textAlign="center" borderRadius={10} padding="15px" height="max-content" background="#EB4C15" width="300px">
                <Heading color="whitesmoke">Plan Name</Heading>
                <Text color="whitesmoke">Plan Duration</Text>
                <Heading color="whitesmoke">₦100,000</Heading>
                <List color="white">
                    <ListItem>Feature one</ListItem>
                    <ListItem>Feature 2</ListItem>
                    <ListItem>Feature 3</ListItem>
                    <ListItem>Feature 4</ListItem>
                    <ListItem>Feature 5</ListItem>
                    <ListItem>Feature 6</ListItem>
                    <ListItem>Feature 7</ListItem>
                    <ListItem>Feature 8</ListItem>
                </List>
                <CustomSolidButton hoverColor="#ffff" textColor="#EB4C15" buttonColor="#F7F7F7" buttonText={"Choose plan"} />
            </Stack>
        </Box>
    )
}