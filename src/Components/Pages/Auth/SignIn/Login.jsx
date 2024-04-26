import { FormControl, FormLabel, Stack, Input, Flex, Button, FormErrorMessage, Heading, Text, useToast } from "@chakra-ui/react";
import { primaryColor } from "../../../Reuseables/colors";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../Store/UserContext";
import { browserLocalPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {

    const auth = getAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({ email: "", password: "" });
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })

    const toast = useToast()

    const { setUser } = useUserAuth()
    const { setIsAuthenticated } = useUserAuth()

    const navigate = useNavigate()

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginInfo((prevValue) => ({ ...prevValue, [name]: value }));
        setError((prevError) => ({ ...prevError, [name]: "" }))
    }


    function handleSubmit(e) {
        e.preventDefault();

        try {
            async function LoginAuthUserWithEmailAndPassword() {
                setPersistence(auth, browserLocalPersistence)
                setIsLoading(true)
                console.log("Logging you in, hold on tight")
                if (!loginInfo.email || !loginInfo.password) return;
                return (
                    await signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password).then((userCredential) => {
                        setUser(userCredential.user)
                        console.log("Your sign in was successful")
                        setIsLoading(false)
                        setIsAuthenticated(true)
                        navigate("/")
                    })
                        .catch((error) => {
                            setIsLoading(false)
                            console.log(error.message)
                            if (error.message === "Firebase: Error (auth/invalid-credential).") {
                                setError({ email: "Incorrect email", password: "Incorrect passsword" })
                                toast({ title: "Login failed", description: "Incorrect email or password", status: "error", position: "bottom", duration: 3000, })
                            }
                        })
                )
            }
            LoginAuthUserWithEmailAndPassword()
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Flex minH="80vh" justify="center">
            <form onSubmit={handleSubmit}>
                <Stack borderRadius={8} boxShadow={"0px 0px 12px 13px rgba(226,226,226,0.54)"} mt={"70px"} padding={"20px"} width={["90vw", "80vw", "500px"]}>
                    <Heading margin={"10px 0px"} textAlign={"center"} fontSize={"25px"}>Login to your account</Heading>

                    <FormControl isInvalid={error.email}>
                        <FormLabel>Email Address</FormLabel>
                        <Input autoComplete="email" name="email" value={loginInfo.email} onChange={handleChange} type="email" placeholder="Your email address" />
                        <FormErrorMessage>{error.email}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={error.password}>
                        <FormLabel>Password</FormLabel>
                        <Input autoComplete="current-password" name="password" value={loginInfo.password} onChange={handleChange} type="password" placeholder="Enter your password" />
                        <FormErrorMessage>{error.password}</FormErrorMessage>
                    </FormControl>

                    {/* add a remeber me check button to make firebase auth state persistence */}

                    <Button isLoading={isLoading} loadingText="Signing you in" _hover={{ background: "#034C24" }} width={"full"} type="submit" fontWeight={900} color={"white"} bg={primaryColor} mt={5} alignSelf="center">Login</Button>
                    <Text textAlign="center">Don't have an account? Sign up <Link style={{ color: primaryColor }} to="/sign-up">here</Link></Text>
                </Stack>
            </form>
        </Flex >
    )
}