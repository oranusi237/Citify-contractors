import { Box, Divider, Flex, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { fdb, } from "../../Utils/Firebase/Firebase";
import PlaceholderImage from "../../Assets/dummy-user-image.jpg"
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { primaryColor } from "../../Reuseables/colors";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Store/user/userSelector";
import { Navigate, useLocation } from "react-router-dom";


export default function ProfilePage() {
    const [userDetails, setUserDetails] = useState([])
    const currentUser = useSelector(selectCurrentUser)
    const uid = currentUser.uid

    useEffect(() => {
        const querySnapshot = async () => {
            const snapshot = await getDocs(query(collection(fdb, "Users"), where("userID", "==", uid)));
            snapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.data());
                setUserDetails(doc.data());
            });
        };

        querySnapshot();
    },[]);

    const location = useLocation()

    return (

        !uid ? <Navigate to="/login" state={{ from: location }} replace /> :

            <Flex align="center" direction="column" wrap="wrap">
                <Stack width="max-content" align="start">
                    {/* profile side bar */}
                    <Image my={5} height={"300px"} width={"300px"} borderRadius={"full"} objectFit={"cover"} src={PlaceholderImage} alt="profile image" />
                    <Divider width="100%" />
                    <Heading color={primaryColor} py={5} fontSize="25px">Profile information</Heading>
                    <Divider width="100%" />
                    <Stack justify="start" borderRadius={10} gap={[5, 10]} padding={5} bg={"#ff0ff"} width={["100%", "100%", "700px"]}>
                        <Flex gap={2} wrap="wrap" width={"100%"} px={10} justify="space-between">
                            <Stack>
                                <Heading fontSize="18px">Full Name</Heading>
                                <Text>{userDetails?.firstName + " " + userDetails?.lastName}</Text>
                            </Stack>

                            <Stack>
                                <Heading textAlign={["left", "right"]} fontSize="18px">Email address</Heading>
                                <Text>{userDetails?.email}</Text>
                            </Stack>
                        </Flex>

                        <Flex gap={2} wrap="wrap" width={"100%"} px={10} justify="space-between">
                            <Stack>
                                <Heading fontSize="18px">Phone Number</Heading>
                                <Text>{userDetails?.phoneNumber}</Text>
                            </Stack>

                            <Stack>
                                <Heading textAlign={["left", "right"]} fontSize="18px">Address</Heading>
                                <Text>{userDetails?.address}</Text>
                            </Stack>
                        </Flex>
                        {userDetails?.isCompany === true &&
                            <Box>
                                <Divider />
                                <Heading color={primaryColor} py={5} fontSize={"20px"} textAlign={"start"}>Company information</Heading>
                                <Divider width />
                                <Flex direction="column" mt={5} wrap={"wrap"} gap={2} width={"100%"} px={10} justify="space-between">
                                    <Stack>
                                        <Heading fontWeight={550} fontSize="18px">Company name</Heading>
                                        <Text>{userDetails?.companyName}</Text>
                                    </Stack>
                                    <Stack textAlign={""} width={"100%"}>
                                        <Heading fontSize="18px">Company description</Heading>
                                        <Text>{userDetails?.companyDescription}</Text>
                                    </Stack>
                                </Flex>
                            </Box>
                        }
                    </Stack>
                    <Spacer height={100} />
                </Stack>
            </Flex>
    )
}