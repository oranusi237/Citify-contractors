import { Flex } from "@chakra-ui/react";
import ServiceImage from "../../Assets/customer-service.jpg";
import { MdBusinessCenter, MdOutlineRealEstateAgent, MdBrandingWatermark, MdSell } from "react-icons/md";
import ServicesCard from "../../Pages/About/ServicesCard";



export default function ServiceSection() {
    return (
        <Flex flex={1} gap={10} mt={5} justify="center" wrap="wrap" >
            <ServicesCard description="Forge strategic alliances with a minimum of 7 reputable real estate firms, ensuring a broad spectrum of property options for clients." cardIcon={MdOutlineRealEstateAgent} serviceName="Real estate management" />

            <ServicesCard description="Leverage social media, SEO, and online advertising to enhance brand visibility and attract potential clients." serviceImage={ServiceImage} serviceName="Branding" cardIcon={MdBrandingWatermark} />

            <ServicesCard description="Develop a client referral program to encourage satisfied clients to refer others, fostering a positive word-of-mouth reputation" serviceImage={ServiceImage} serviceName="Buisness Development and Training" cardIcon={MdBusinessCenter} />

            <ServicesCard description="Participate in industry events, host seminars, and engage in community activities to build brand awareness" serviceImage={ServiceImage} serviceName="Marketing" cardIcon={MdSell} />

        </Flex>
    )
}