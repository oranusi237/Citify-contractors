import { Box, Stack, ListItem, List, Heading, Text } from "@chakra-ui/react";
import CustomSolidButton from "../Solidbutton";
import { primaryColor } from "../colors";

export default function PricingCard({ planName, planDuration, planPrice, feature1, feature2, feature3, feature4, feature5,
    feature6, feature7, feature8, feature9 }) {

    const goldPlan = typeof (planName) === "string" && planName.toString().toLowerCase().includes("gold")

    return (
        <Box>
            <Stack  margin textAlign="center" borderRadius={10} padding="15px" height="max-content" background={goldPlan ? "#EB4C15" : "white"}
                boxShadow={goldPlan ? "" : "0px 0px 12px 13px rgba(226,226,226,0.54)"} width="300px" >
                <Heading color={goldPlan ? "whitesmoke" : primaryColor}>{planName}</Heading>
                <Text fontWeight={600} color={"black"}>{planDuration}</Text>
                <Heading color={goldPlan ? "whitesmoke" : primaryColor}>₦{planPrice}</Heading>
                <List color={goldPlan ? "whitesmoke" : "black"}>
                    <ListItem fontWeight={"semi-bold"}>{feature1}</ListItem>
                    <ListItem>{feature2}</ListItem>
                    <ListItem>{feature3}</ListItem>
                    <ListItem>{feature4}</ListItem>
                    <ListItem>{feature5}</ListItem>
                    <ListItem>{feature6}</ListItem>
                    <ListItem>{feature7}</ListItem>
                    <ListItem>{feature8}</ListItem>
                    <ListItem>{feature9}</ListItem>
                </List>
                <CustomSolidButton  hoverColor={goldPlan && "#ffff"} textColor={goldPlan ? "#EB4C15" : "white"} buttonColor={!goldPlan ? primaryColor : "#F7F7F7"} buttonText={"Choose plan"} />
            </Stack>
        </Box >
    )
}