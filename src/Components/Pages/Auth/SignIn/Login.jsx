import { FormControl, FormLabel, Stack, Input, Flex, Button, FormErrorMessage, Heading, Text } from "@chakra-ui/react";
import { primaryColor } from "../../../Reuseables/colors";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {

    const regValues = {
        email: "",
        password: "",
    }


    const [errors, setErrors] = useState(regValues);


    const [regInfo, setRegInfo] = useState(regValues)

    function handleChange(e) {
        const { name, value } = e.target;
        setRegInfo((prevValue) => ({ ...prevValue, [name]: value }));
        setErrors((prevError) => ({ ...prevError, [name]: errors.name }));
    }

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailRegex.test(value)) {
            return 'Please enter a valid email address!';
        }
        return '';
    };

    const validatePassword = (value) => {
        if (value.length < 8) {
            return "Password must have a minimum of 8 Characters"
        }
        return "";
    };



    function handleSubmit(e) {
        e.preventDefault();

        const newErrors = {};

        // Validate each field
        Object.entries(regInfo).forEach(([key, value]) => {
            let error = '';

            switch (key) {
                case 'email':
                    error = validateEmail(value);
                    break;
                case 'password':
                    error = validatePassword(value);
                    break;
                default:
                    break;
            }

            if (error) {
                newErrors[key] = error;
            }
        });

        // If there are validation errors, set the errors and stop form submission
        if (Object.keys(newErrors).length > 0 || regInfo.password !== regInfo.confirmedPassword) {
            setErrors(newErrors);
            return;
        }

        // If there are no validation errors, continue with form submission logic
        console.log("Form submitted successfully");
    }


    return (
        <Flex minH="80vh" justify="center">
            <form onSubmit={handleSubmit}>
                <Stack borderRadius={8} boxShadow={"0px 0px 12px 13px rgba(226,226,226,0.54)"} mt={"70px"} padding={"20px"} width={["90vw", "80vw", "500px"]}>
                    <Heading margin={"10px 0px"} textAlign={"center"} fontSize={"25px"}>Login to your account</Heading>

                    <FormControl isInvalid={errors.email}>
                        <FormLabel>Email Address</FormLabel>
                        <Input name="email" value={regInfo.email} onChange={handleChange} type="email" placeholder="Your email address" />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.password}>
                        <FormLabel>Password</FormLabel>
                        <Input name="password" value={regInfo.password} onChange={handleChange} type="password" placeholder="Enter your password" />
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>

                    <Button _hover={{ background: "#C70000" }} width={"full"} type="submit" fontWeight={900} color={"white"} bg={primaryColor} mt={5} alignSelf="center">Login</Button>
                    <Text textAlign="center">Don't have an account? Sign up <Link style={{color:  primaryColor}} to="/sign-up">here</Link></Text>
                </Stack>
            </form>
        </Flex >
    )
}