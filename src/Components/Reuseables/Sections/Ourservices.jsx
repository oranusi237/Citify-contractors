import { Flex } from "@chakra-ui/react";
import ServiceImage from "../../Assets/customer-service.jpg";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { CgMediaPodcast } from "react-icons/cg";
import { MdBusinessCenter } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import ServicesCard from "../../Pages/About/ServicesCard";



export default function ServiceSection() {
    return (
        <Flex flex={1} gap={10} mt={5} justify="center" wrap="wrap" >
            <ServicesCard description="Forge strategic alliances with a minimum of 7 reputable real estate firms, ensuring a broad spectrum of property options for clients." cardIcon={FaPeopleCarryBox} serviceName="Real estate management" />

            <ServicesCard description="Leverage social media, SEO, and online advertising to enhance brand visibility and attract potential clients." serviceImage={ServiceImage} serviceName="Branding" cardIcon={CgMediaPodcast} />

            <ServicesCard description="Participate in industry events, host seminars, and engage in community activities to build brand awareness" serviceImage={ServiceImage} serviceName="Marketing" cardIcon={CgMediaPodcast} />

            <ServicesCard description="Develop a client referral program to encourage satisfied clients to refer others, fostering a positive word-of-mouth reputation" serviceImage={ServiceImage} serviceName="Buisness Development and Training" cardIcon={MdBusinessCenter} />

        </Flex>
    )
}