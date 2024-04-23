import { BsStars } from 'react-icons/bs';
import { CgWorkAlt } from 'react-icons/cg';
import { FaCheckCircle } from 'react-icons/fa';
import { Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { primaryColor } from './colors';


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