import { Box, useDisclosure, Modal, Button, ModalOverlay, ModalContent, ModalBody, ModalHeader, ModalCloseButton, ModalFooter, Text, useToast } from "@chakra-ui/react";
import CustomSolidButton from "../Solidbutton";
import { useNavigate } from "react-router-dom";

export default function PaymentConfirmationModal({ selectedPackage, PaymentButton }) {
    const token = localStorage.getItem("auth-token")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()
    const toast = useToast()

    function handleModalOpen() {
        if (token) {
            onOpen()
        } else {
            toast({ title: "User not authenticated", description: "You need to login before making payment", status: "warning" })
            sessionStorage.setItem('previousPage', window.location.href);
            navigate("/login")
        }
    }

    return (
        <Box>
            <CustomSolidButton onClick={handleModalOpen} buttonText={"Select Package"} />

            <Modal isCentered closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">Payment confirmation</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Text textAlign={"center"}>Are you sure you want to pay for the <span style={{ fontWeight: 700 }}>{selectedPackage}</span>?</Text>
                    </ModalBody>

                    <ModalFooter justifyContent={"space-between"}>
                        <Button variant={"outline"} onClick={onClose} colorScheme='red' mr={3}>
                            Cancel
                        </Button>
                        <Box onClick={onClose}>
                            {PaymentButton}
                        </Box>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}