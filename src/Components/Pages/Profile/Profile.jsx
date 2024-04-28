import { Box, Divider, Flex, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { fdb, } from "../../Utils/Firebase/Firebase";
import PlaceholderImage from "../../Assets/dummy-user-image.jpg"
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { primaryColor } from "../../Reuseables/colors";


export default function ProfilePage() {
    const [userDetails, setUserDetails] = useState([])
    useEffect(() => {
        const querySnapshot = async () => {
            const snapshot = await getDocs(collection(fdb, "Users"));
            snapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.data());
                setUserDetails(doc.data())
                // console.log(userDetails.filter((item)=> item.firstName === "John"))

            });
        };

        querySnapshot();
    }, []);

    return (
        <Flex align="center" direction="column" wrap="wrap">
            {/* profile side bar */}
            <Image my={5} height={"300px"} width={"300px"} borderRadius={"full"} objectFit={"cover"} src={PlaceholderImage} alt="profile image" />
            <Divider width="50%" />
            <Heading color={primaryColor} py={5} fontSize="25px">Profile information</Heading>
            <Divider width="50%" />
            <Stack borderRadius={10} gap={[5, 10]} padding={5} bg={"#ff0ff"} width={["100%", "100%", "700px"]}>
                <Flex gap={2} wrap="wrap" width={"100%"} px={10} justify="space-between">
                    <Stack>
                        <Heading fontSize="18px">Full Name</Heading>
                        <Text>{userDetails.firstName + " " + userDetails.lastName}</Text>
                    </Stack>

                    <Stack>
                        <Heading textAlign={["left", "right"]} fontSize="18px">Email address</Heading>
                        <Text>{userDetails.email}</Text>
                    </Stack>
                </Flex>

                <Flex gap={2} wrap="wrap" width={"100%"} px={10} justify="space-between">
                    <Stack>
                        <Heading fontSize="18px">Phone Number</Heading>
                        <Text>{userDetails.phoneNumber}</Text>
                    </Stack>

                    <Stack>
                        <Heading textAlign={["left", "right"]} fontSize="18px">Address</Heading>
                        <Text>{userDetails.address}</Text>
                    </Stack>
                </Flex>
                <Divider />
                {userDetails.isCompany === true &&
                    <Box mt={-5}>
                        <Heading color={primaryColor} mb={5} fontSize={"20px"} textAlign={"center"}>Company information</Heading>
                        <Flex wrap={"wrap"} gap={2} width={"100%"} px={10} justify="space-between">
                            <Stack>
                                <Heading fontWeight={550} fontSize="18px">Company name</Heading>
                                <Text>{userDetails.companyName}</Text>
                            </Stack>
                            <Stack textAlign={["left", "left", "right"]} width={["100%", "300px"]}>
                                <Heading fontSize="18px">Company description</Heading>
                                <Text>{userDetails.companyDescription}</Text>
                            </Stack>
                        </Flex>
                    </Box>
                }
            </Stack>
            <Spacer height={100} />
        </Flex>
    )
}