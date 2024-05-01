import { FormControl, FormLabel, Stack, Input, Flex, Button, FormErrorMessage, FormHelperText, Heading, Text, useToast, Switch, Textarea } from "@chakra-ui/react";
import { primaryColor } from "../../../Reuseables/colors";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, userRef } from "../../../Utils/Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc } from "firebase/firestore";

export default function SignUpPage() {

    const regValues = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmedPassword: ""
    }

    const toast = useToast()
    const [isCompany, setIsCompany] = useState(false)
    const [errors, setErrors] = useState(regValues);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const [regInfo, setRegInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmedPassword: "",
        companyName: "",
        companyDescription: "",
        address: "",
    })



    function handleChange(e) {
        const { name, value } = e.target;
        setRegInfo((prevValue) => ({ ...prevValue, [name]: value }));
        setErrors((prevError) => ({ ...prevError, [name]: errors.name }));
    }

    const validateFirstname = (value) => {
        if (!value || value.length < 2) {
            return 'First name must be at least 2 characters!';
        }
        return '';
    };

    const validateLastname = (value) => {
        if (!value || value.length < 2) {
            return 'Last name must be at least 2 characters!';
        }
        return '';
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailRegex.test(value)) {
            return 'Please enter a valid email address!';
        }
        return '';
    };

    const validatePhoneNumber = (value) => {
        if (value.length > 11) {
            return "Please enter a valid phone number"
        } else {
            return "";
        }
    };

    const validatePassword = (value) => {
        if (value.length < 8) {
            return "Password must have a minimum of 8 Characters"
        }
        return "";
    };

    const validateConfirmedPassword = (value) => {
        if (value !== regInfo.password) {
            return "Password does not match"
        }
        return "";
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {};
        setIsLoading(true)
        // Validate each field
        Object.entries(regInfo).forEach(([key, value]) => {
            let error = '';

            switch (key) {
                case 'firstName':
                    error = validateFirstname(value);
                    break;
                case 'lastName':
                    error = validateLastname(value);
                    break;
                case 'email':
                    error = validateEmail(value);
                    break;
                case 'phoneNumber':
                    error = validatePhoneNumber(value);
                    break;
                case 'password':
                    error = validatePassword(value);
                    break;
                case 'confirmedPassword':
                    error = validateConfirmedPassword(value)
                    break;
                default:
                    break;
            }

            if (error) {
                newErrors[key] = error;
                // setIsLoading(false)
            }
        });

        // If there are validation errors, set the errors and stop form submission
        if (Object.keys(newErrors).length > 0 || regInfo.password !== regInfo.confirmedPassword) {
            setErrors(newErrors);
            setIsLoading(false)
            return;
        }

        try {
            createUserWithEmailAndPassword(auth, regInfo.email, regInfo.password)
                .then(async (userCredential) => {
                    const userData = {
                        firstName: regInfo.firstName,
                        lastName: regInfo.lastName,
                        email: regInfo.email,
                        phoneNumber: regInfo.phoneNumber,
                        address: regInfo.address,
                        isCompany: isCompany,
                        companyName: regInfo.companyName,
                        companyDescription: regInfo.companyDescription,
                        userID: userCredential.user.uid
                    };
                    console.log(userCredential)
                    // Setting user data in Firestore after user creation
                    await addDoc(userRef, userData)
                })
                .then(() => {
                    console.log("New user has been created successfully");
                    toast({ title: "Registration successful", description: "User account was created successfully", status: "success", position: "bottom", duration: 3000, })
                    navigate("/profile")
                    // Set logged-in state after successful registration
                    localStorage.setItem('loggedInUser', true);
                })
                .catch((error) => {
                    console.log("An error occurred: " + error.message);
                    setIsLoading(false)
                });

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error registering user:", errorCode, errorMessage);
        } finally {
        }

        // If there are no validation errors, continue with form submission logic
        console.log("Form submitted successfullyyyyyy");
    }


    function handleToggle() {
        setIsCompany(!isCompany)
    }


    return (
        <Flex mb={10} minH="100vh" height="auto" align="center" justify="center">
            <form onSubmit={handleSubmit}>
                <Stack borderRadius={8} boxShadow={"0px 0px 12px 13px rgba(226,226,226,0.54)"} mt={"50px"} mb={"50px"} padding={"20px"} width={["90vw", "80vw", "500px"]}>
                    <Heading margin={"10px 0px"} textAlign="center" fontSize="25px">Create new account</Heading>
                    <FormControl isInvalid={errors.firstName}>
                        <FormLabel>First Name</FormLabel>
                        <Input name={"firstName"} value={regInfo.firstName} onChange={handleChange} type="text" placeholder="Your first name" />
                        <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.lastName}>
                        <FormLabel>Last Name</FormLabel>
                        <Input name="lastName" value={regInfo.lastName} onChange={handleChange} type="text" placeholder="Your last name" />
                        <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.email}>
                        <FormLabel>Email Address</FormLabel>
                        <Input name="email" value={regInfo.email} onChange={handleChange} type="email" placeholder="Your email address" />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.phoneNumber}>
                        <FormLabel>Phone Number</FormLabel>
                        <Input name="phoneNumber" value={regInfo.phoneNumber} onChange={handleChange} type="tel" placeholder="08035227154" />
                        <FormHelperText>Do not use international format(eg.+234)</FormHelperText>
                        <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
                    </FormControl>

                    <FormControl>
                        <FormLabel>{isCompany && "Company"} Address</FormLabel>
                        <Input name="address" value={regInfo.address} onChange={handleChange} type="text" placeholder="default street, Abuja, Nigeria" />
                        <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
                    </FormControl>

                    <FormControl my={5} display='flex' alignItems='center'>
                        <FormLabel htmlFor='email-alerts' mb='0'>
                            Sign up as a company?
                        </FormLabel>
                        <Switch id='email-alerts' onChange={handleToggle} />
                    </FormControl>

                    {isCompany && <FormControl>
                        <FormLabel>Company Name</FormLabel>
                        <Input name="companyName" value={regInfo.companyName} onChange={handleChange} type="text" placeholder="Your company name" />
                        <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>

                    </FormControl>}
                    {isCompany && <FormControl>
                        <FormLabel>Company Information</FormLabel>
                        <Textarea name="companyDescription" value={regInfo.companyDescription} onChange={handleChange} type="text" placeholder="Your company description here" />
                    </FormControl>}

                    <FormControl isInvalid={errors.password}>
                        <FormLabel>Password</FormLabel>
                        <Input name="password" value={regInfo.password} onChange={handleChange} type="password" placeholder="Enter your password" />
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.confirmedPassword}>
                        <FormLabel>Confirm Passsword</FormLabel>
                        <Input onChange={handleChange} name="confirmedPassword" value={regInfo.confirmedPassword} type="password" placeholder="Confirm Password" />
                        <FormErrorMessage>{errors.confirmedPassword}</FormErrorMessage>
                    </FormControl>

                    <Button isLoading={isLoading} loadingText="Creating new account" _hover={{ background: "#034C24" }} width={"full"} type="submit" fontWeight={900} color={"white"} bg={primaryColor} mt={5} alignSelf="center">Sign up</Button>
                    <Text textAlign="center">Already have an account? Login <Link style={{ color: primaryColor }} to="/login">here</Link></Text>

                </Stack>
            </form>
        </Flex >
    )
}