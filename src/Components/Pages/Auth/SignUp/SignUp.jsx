import { FormControl, FormLabel, Stack, Input, Flex, Button, FormErrorMessage, FormHelperText, Heading, Text } from "@chakra-ui/react";
import { primaryColor } from "../../../Reuseables/colors";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RegisterNewUser } from "../../../Utils/Firebase/Firebase";

export default function SignUpPage() {

    const regValues = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmedPassword: ""
    }

    const [errors, setErrors] = useState(regValues);
    const [isloading, setIsLoading] = useState(false)

    const [regInfo, setRegInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmedPassword: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setRegInfo((prevValue) => ({ ...prevValue, [name]: value }));
        setErrors((prevError) => ({ ...prevError, [name]: errors.name }));
    }

    const validateFirstname = (value) => {
        if (!value || value.length < 4) {
            return 'First name must be at least 4 characters!';
        }
        return '';
    };

    const validateLastname = (value) => {
        if (!value || value.length < 4) {
            return 'Last name must be at least 4 characters!';
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

    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {};

        // Validate each field
        Object.entries(regInfo).forEach(([key, value]) => {
            setIsLoading(true)

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
                setIsLoading(false)
            }
        });

        // If there are validation errors, set the errors and stop form submission
        if (Object.keys(newErrors).length > 0 || regInfo.password !== regInfo.confirmedPassword) {
            setErrors(newErrors);
            setIsLoading(false)
            return;
        }

        try {
            RegisterNewUser
                (
                    {
                        email: regInfo.email,
                        firstName: regInfo.firstName, lastName: regInfo.lastName,
                        password: regInfo.password, phoneNumber: regInfo.phoneNumber
                    }
                )
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error registering user:", errorCode, errorMessage);
        } finally {
            setIsLoading(false)
        }

        // If there are no validation errors, continue with form submission logic
        console.log("Form submitted successfullyyyyyy");
    }

    // SignUpPage.js

    // ... (existing code)

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     // Your existing validation logic

    //     // If there are no validation errors, continue with user registration
    //     if (Object.keys(newErrors).length === 0 && regInfo.password === regInfo.confirmedPassword) {

    // }


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

                    <Button isLoading={isloading} _hover={{ background: "#034C24" }} width={"full"} type="submit" fontWeight={900} color={"white"} bg={primaryColor} mt={5} alignSelf="center">Sign up</Button>
                    <Text textAlign="center">Already have an account? Login <Link style={{ color: primaryColor }} to="/login">here</Link></Text>

                </Stack>
            </form>
        </Flex >
    )
}