import { Box, Stack, ListItem, List, Heading, Text, } from "@chakra-ui/react";
import CustomSolidButton from "../Solidbutton";
import { primaryColor } from "../colors";
import HoverAnimationContainer from "../../AnimationContainers/Hover";
// import { useEffect, } from "react";

export default function PricingCard({ planName, numberOfFeatures, planDuration, planPriceNGN, planPriceUSD, feature1, feature2, feature3, feature4, feature5,
    feature6, feature7, feature8, feature9, feature10, feature11, feature12 }) {

    // const [currentRate, setCurrentRate] = useState()

    // const api_key = process.env.EXCHANGE_API_KE;

    //882205078b9f6cf3f56db71c

    // useEffect(() => {
    //     async function getrates() {
    //         const response = await fetch(`https://v6.exchangerate-api.com/v6/${api_key}/latest/USD`)
    //             .then((res) => console.log(res))
    //             .catch((error) => console.log(error))
    //     }
    //     getrates()
    // }, [])


    return (
        <Box>
            <HoverAnimationContainer children={
                <Stack boxSizing="border-box" margin textAlign="center" borderRadius={10} padding="15px" height="max-content" background={"white"}
                    boxShadow={"0px 0px 12px 13px rgba(226,226,226,0.54)"} width="300px" >
                    <Heading color={primaryColor}>{planName}</Heading>
                    <Text fontWeight={600} color={"black"}>{planDuration}</Text>
                    <Heading color={primaryColor}>₦{planPriceNGN}</Heading>
                    <Heading color={primaryColor}>(${planPriceUSD})</Heading>
                    <List color={"black"}>
                        <ListItem>1. {feature1}</ListItem>
                        <ListItem>2. {feature2}</ListItem>
                        <ListItem>3. {feature3}</ListItem>
                        <ListItem>4. {feature4}</ListItem>
                        <ListItem>5. {feature5}</ListItem>
                        <ListItem>6. {feature6}</ListItem>
                        <ListItem>7. {feature7}</ListItem>
                        {numberOfFeatures >= 8 && <ListItem>8. {feature8}</ListItem>}
                        {numberOfFeatures >= 9 && <ListItem>9. {feature9}</ListItem>}
                        {numberOfFeatures >= 10 && <ListItem>10. {feature10}</ListItem>}
                        {numberOfFeatures >= 11 && <ListItem>11. {feature11}</ListItem>}
                        {numberOfFeatures === 12 && <ListItem>12. {feature12}</ListItem>}
                    </List>
                    {/* <Spacer /> */}
                    <Stack pb={5}>
                        <CustomSolidButton  buttonText={"Choose plan"} />
                    </Stack>
                </Stack>
            } />
        </Box >
    )
}