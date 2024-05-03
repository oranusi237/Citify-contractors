import { Box, useDisclosure, Modal, Button, ModalOverlay, ModalContent, ModalBody, ModalHeader, ModalCloseButton, ModalFooter, Text } from "@chakra-ui/react";
import CustomSolidButton from "../Solidbutton";

export default function PaymentConfirmationModal({ selectedPackage, PaymentButton }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <CustomSolidButton onClick={onOpen} buttonText={"Selec Package"} />

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