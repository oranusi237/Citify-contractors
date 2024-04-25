import { Box, Heading, Spacer, Flex } from "@chakra-ui/react";
import FadeInAnimationContainer from "../../AnimationContainers/FadeIn";
import "../../AnimationContainers/styles.css";
import { primaryColor } from "../../Reuseables/colors";
import PricingCard from "../../Reuseables/Cards/PricingCard";

export default function PricingPage() {
    function formatCurrency(amount) {
        return new Intl.NumberFormat().format(amount)
    }
    return (
        <Box mb={16} mt={50} minH="100vh">
            <section>
                <FadeInAnimationContainer children={
                    <Box animation={"BounceIn 0.6s linear 0.1s 1 normal forwards"}>
                        <Heading mb={2} textAlign="center" color={primaryColor} fontSize={"25px"}>Pricing</Heading>
                        <Heading color={"#031B23"} fontWeight={500} fontSize="23px" textAlign="center">Explore our pricing options to find the perfect fit for your project needs.</Heading>
                        <Spacer height={16} />
                        <Flex justify="center" wrap="wrap" gap={10} >
                            <PricingCard numberOfFeatures={8} planName={"Basic Plan"} planPriceNGN={formatCurrency(1200000)} planPriceUSD={formatCurrency(1000)} planDuration={"Yearly Plan"} feature1={"Scale 1:100"} feature2={"Cars"} feature3={"Card board walls and Roofing sheets"} feature4={"Local Tress and Shrubs"} feature5={"4mm Glass Box Casing "} feature6={"Delivery"} feature7={"Normal Table"} feature8={"Normal exhibition stand"} />

                            <PricingCard numberOfFeatures={10} planName={"Premium Plan"} planPriceNGN={formatCurrency(1500000)} planPriceUSD={formatCurrency(1200)} planDuration={"Yearly Plan"} feature1={"Scale 1:100 "} feature2={"Interior  lights or Exterior lights"} feature3={"Cars"} feature4={"Card board made Corrugated Roofing sheets"} feature5={"Normal Tress and Shrubs"} feature6={"4mm Glass Box Casing"} feature7={"Model Table Stand"} feature8={"Delivery"} feature9={"Standard Table Stand"} feature10={"Standard exhibition stand"} />

                            <PricingCard numberOfFeatures={12} planName={"Gold Plan"} planPriceNGN={formatCurrency(2000000)} planPriceUSD={formatCurrency(1600)} planDuration={"Yearly Plan"} feature1={"Scale 1:100"} feature2={"0.2cm thick form board for walls"} feature3={"Exterior and Interior Lights"} feature4={"Human figures"} feature5={"Live lighted Cars"} feature6={"3D Corrugated Plastic Roofing sheets"} feature7={"Foreign Tress and Shrubs"} feature8={"4mm Glass Box Casing"} feature9={"Customised Model Table Stand"} feature10={"Delivery"} feature11={"Fully Customized Table Stand"} feature12={"Fully customized Exhibition stand "} />
                        </Flex>
                    </Box>
                } />
            </section>
        </Box>
    )
}