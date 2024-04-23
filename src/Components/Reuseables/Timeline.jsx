import { BsStars } from 'react-icons/bs';
import { CgMediaPodcast, CgWorkAlt } from 'react-icons/cg';
import { FaChalkboardTeacher, FaCheckCircle, FaPeopleArrows } from 'react-icons/fa';
import { Heading, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { primaryColor } from './colors';
import { MdBusinessCenter, MdSell } from 'react-icons/md';


export default function TimeLineComponent() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "primaryColor", color: '#000000' }}
                contentArrowStyle={{ borderRight: `7px solid  ${primaryColor}` }}
                // date="2011 - present"
                iconStyle={{ background: primaryColor, color: '#fff' }}
                icon={<CgWorkAlt />}
            >

                <Stack>
                    <Heading>Start-Up Costs</Heading>
                    <List spacing={2} ml={2}>
                        <ListItem>
                            <ListIcon fontSize="15px" as={FaCheckCircle} />
                            Rent: 2 million Naira
                        </ListItem>

                        <ListItem>
                            <ListIcon fontSize="15px" as={FaCheckCircle} />
                            Car: 3 million Naira
                        </ListItem>
                        <ListItem>
                            <ListIcon fontSize="15px" as={FaCheckCircle} />
                            Office Fitting: 1.5 million Naira
                        </ListItem>
                        <ListItem alignItems="center">
                            <ListIcon fontSize="15px" as={FaCheckCircle} />
                            Operational Costs: 1.5 million Naira
                        </ListItem>
                    </List>
                </Stack>

            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: 'black', color: '#fff' }}
                contentArrowStyle={{ borderRight: `10px solid  ${primaryColor}` }}
                icon={<CgWorkAlt />}
            >
                <Stack>
                    <Heading>Source of Finance</Heading>
                    <List spacing={2} ml={2}>
                        <ListItem>
                            <ListIcon fontSize="20px" as={FaCheckCircle} />
                            Personal Funds: 4 million Naira
                        </ListItem>

                        <ListItem>
                            <ListIcon fontSize="20px" as={FaCheckCircle} />
                            Investors: 2 million Naira
                        </ListItem>
                        <ListItem>
                            <ListIcon fontSize="20px" as={FaCheckCircle} />
                            Grants and Loans: 2 million Naira
                        </ListItem>
                    </List>
                </Stack>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: primaryColor, color: '#fff' }}
                icon={<CgWorkAlt />}
            >
                <Stack>
                    <Heading>Revenue Model</Heading>
                    <List spacing={2} ml={2}>
                        <ListItem>
                            <ListIcon fontSize="20px" as={FaCheckCircle} />
                            10% service charge on the total sale value for each property sold for partnering real estate firms.
                        </ListItem>

                        <ListItem>
                            <ListIcon fontSize="20px" as={FaCheckCircle} />
                            2% service charge from individual clients for documentation, search, and verification of property.
                        </ListItem>
                    </List>
                </Stack>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                iconStyle={{ background: "black", color: '#fff' }}
                icon={<BsStars />}
            />
        </VerticalTimeline>
    )
}



export function TimeLineComponentSecond() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "primaryColor", color: '#000000' }}
                contentArrowStyle={{ borderRight: `7px solid  ${primaryColor}` }}
                iconStyle={{ background: primaryColor, color: '#fff' }}
                icon={<FaPeopleArrows />}>

                <Stack>
                    <Heading>Partnership Development</Heading>
                    <Text>Forge strategic alliances with a minimum of 7 reputable real estate firms, ensuring a broad spectrum of property options for clients.</Text>
                </Stack>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: 'black', color: '#fff' }}
                contentArrowStyle={{ borderRight: `10px solid  ${primaryColor}` }}
                icon={<CgMediaPodcast />}
            >
                <Stack>
                    <Heading>Digital Presence</Heading>
                    <Text>Leverage social media, SEO, and online advertising to enhance brand visibility and attract potential clients.</Text>
                </Stack>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work" iconStyle={{ background: primaryColor, color: '#fff' }}
                contentArrowStyle={{ borderRight: `7px solid  ${primaryColor}` }}
                icon={<MdSell />}>
                <Stack>
                    <Heading> Event Marketing</Heading>
                    <Text>Participate in industry events, host seminars, and engage in community activities to build brand awareness.</Text>
                </Stack>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--work"
                iconStyle={{ background: primaryColor, color: '#fff' }}
                contentArrowStyle={{ borderRight: `7px solid  ${primaryColor}` }}
                icon={<MdBusinessCenter />} >
                <Stack>
                    <Heading>Client-Centric Approach</Heading>
                    <Text>Develop a client referral program to encourage satisfied clients to refer others, fostering a positive word-of-mouth reputation.</Text>
                </Stack>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: primaryColor, color: '#fff' }} contentArrowStyle={{ borderRight: `7px solid  ${primaryColor}` }}
                icon={<FaChalkboardTeacher />} >
                <Stack>
                    <Heading>Educational Content</Heading>
                    <Text>Create and share informative content about the real estate market, establishing Citify Contractors as a knowledge leader</Text>
                </Stack>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                iconStyle={{ background: "black", color: '#fff' }}
                icon={<BsStars />}
            />
        </VerticalTimeline>
    )
}