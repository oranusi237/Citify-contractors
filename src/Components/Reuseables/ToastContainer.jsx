import { createStandaloneToast } from '@chakra-ui/react'

const { ToastContainer, toast } = createStandaloneToast()

export default function CustomToastContainer({toastTitle, description, status,}) {
    toast({
        title: toastTitle,
        description: description,
        status: status,
        duration: 9000,
        isClosable: true,
    })
    return (
        <ToastContainer />

    )
}