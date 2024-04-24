import { Box, Card, CardBody, CardFooter, Image, Heading, Text, Flex, Tooltip } from "@chakra-ui/react";
import userImage from "../../Assets/dummy-user-image.jpg"
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { primaryColor } from "../colors";


export default function ProfileCard({ personName, personPosition, facebookLink, twitterLink, linkedInLink }) {
    return (
        <Box>
            <Card boxSizing="border-box" padding={0} align="center" width="300px">
                <CardBody justifyContent="center">
                    <Image borderRadius={8} objectFit="cover" width="250px" height="300px" src={userImage} alt="staff image" />
                    <Heading textAlign="center" fontSize={"20px"}>{personPosition}</Heading>
                    <Text textAlign="center">{personName}</Text>
                </CardBody>
                <CardFooter>
                    <Flex gap={5}>
                        <Tooltip label="Follow on Facebook">
                            <Link to={facebookLink}>
                                <FaFacebook fontSize={20} color={primaryColor} />
                            </Link>
                        </Tooltip>

                        <Tooltip label="Follow on twitter">
                            <Link to={twitterLink}>
                                <FaTwitter fontSize={20} color={primaryColor} />
                            </Link>
                        </Tooltip>

                        <Tooltip label="Follow on linkedin">
                            <Link to={linkedInLink}>
                                <FaLinkedin fontSize={20} color={primaryColor} />
                            </Link>
                        </Tooltip>
                    </Flex>
                </CardFooter>
            </Card>
        </Box>
    )
}