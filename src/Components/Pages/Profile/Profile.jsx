import { Box, Divider, Flex, Heading, Image, Input, Spacer, Stack, Text, useToast } from "@chakra-ui/react";
import { app, fdb, } from "../../Utils/Firebase/Firebase";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { primaryColor } from "../../Reuseables/colors";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Store/user/userSelector";
import { Navigate, useLocation } from "react-router-dom";
import CustomSolidButton from "../../Reuseables/Solidbutton";
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getMetadata, ref as sRef } from "firebase/storage";
import { getStorage, uploadBytes } from "firebase/storage";


export default function ProfilePage() {
    const [userDetails, setUserDetails] = useState([])
    const currentUser = useSelector(selectCurrentUser)
    const [loading, setLoading] = useState(false)
    const auth = getAuth(app)
    const uid = currentUser.uid

    const [profileImage, setProfileImage] = useState(null)

    const toast = useToast()

    useEffect(() => {

        const querySnapshot = async () => {
            if (auth.currentUser !== null) {
                const snapshot = await getDocs(query(collection(fdb, "Users"), where("userID", "==", uid)));
                snapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.data());
                    setUserDetails(doc.data());
                });
            }
        };

        querySnapshot();
    }, []);

    function handleImageChange(event) {
        setProfileImage(event.target.files[0])
    }

    const handleUpload = () => {
        setLoading(true)
        if (profileImage) {
            // setLoading(true)
            const storage = getStorage();
            const storageRef = sRef(storage, `ProfilePics/${uid}`);
            // 'file' comes from the Blob or File API
            uploadBytes(storageRef, profileImage).then((snapshot) => {
                console.log('Uploaded a blob or file!' + snapshot.metadata);
            });

            getMetadata(sRef(storage, `/ProfilePics/${uid}`)).then((metaData) => {
                console.log(metaData)
            }).catch((error) => {
                setLoading(false)
                console.log(error)
            })

            getDownloadURL(sRef(storage, `ProfilePics/${uid}`))
                .then((url) => {
                    if (url !== "") {
                        updateProfile(auth.currentUser, { photoURL: url })
                        console.log("Update was successful")
                        setLoading(false)
                        window.location.reload()
                    }
                })
                .catch((error) => {
                    console.log(error)
                    setLoading(false)
                });
        } else {
            toast({ title: "No image selected", status: "error", description: "You have not selected any image, cannot upload an empty field", duration: 4000, position: "bottom-right" })
            setLoading(false)
        }
    };

    const location = useLocation()

    return (

        !uid ? <Navigate to="/login" state={{ from: location }} replace /> :

            <Flex align="center" direction="column" wrap="wrap">
                <Stack width="max-content" align="start">
                    {/* profile side bar */}
                    {currentUser.photoURL !== "" && currentUser.photoURL !== null && <Image my={5} height={"300px"} width={"300px"} borderRadius={"full"} objectFit={"cover"} src={currentUser.photoURL} />}
                    {!currentUser.photoURL &&
                        <>
                            <Stack py={5} justify="center" align="center">
                                {/* <Input onChange={(e) => setProfileImage(e.target.files[0])} type="file" /> */}
                                <Flex
                                    align="center"
                                    justify="center"
                                    border="2px dashed #CBD5E0"
                                    borderRadius="full"
                                    height={200}
                                    p={10}
                                    w={200}
                                    cursor="pointer"
                                >
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        position="absolute"
                                        width="full"
                                        height="full"
                                        opacity={0}
                                        aria-hidden="true"
                                        onChange={handleImageChange}
                                    />
                                    <Text textAlign="center" color="#718096">
                                        {profileImage === null ? " Drag and drop your image here or click to upload" : `Your selected image: ${profileImage?.name}`}
                                    </Text>
                                </Flex>
                                <CustomSolidButton isLoading={loading} loadingText={"Updating profile picture"} buttonText={"Update profile picture"} onClick={handleUpload} type={'button'} />
                            </Stack>
                        </>

                    }

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
                                <Flex my={100} mt={5} wrap={"wrap"} gap={2} width={"100%"} px={10} justify="space-between">
                                    <Stack>
                                        <Heading fontWeight={550} fontSize="18px">Company name</Heading>
                                        <Text>{userDetails?.companyName}</Text>
                                    </Stack>
                                    <Stack textAlign={["start", "start", "right"]} width={"50%"}>
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