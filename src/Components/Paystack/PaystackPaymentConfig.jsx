import React, { useEffect, useState } from "react"
import { PaystackButton } from "react-paystack"
import { Box, useToast } from "@chakra-ui/react"
import "./styles.css"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../Store/user/userSelector"
import { app, fdb, transRef } from "../Utils/Firebase/Firebase"
import { getAuth } from "firebase/auth"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"

export default function PaywithPaystack({ amnt, SelectedPlan }) {

    const [userDetails, setUserDetails] = useState([])
    const currentUser = useSelector(selectCurrentUser)
    const auth = getAuth(app)
    const uid = currentUser?.uid

    const name = userDetails?.firstName + userDetails?.lastName
    const email = userDetails?.email
    const phone = userDetails?.phoneNumber

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
    }, [auth.currentUser, uid]);

    const pubKey = process.env.REACT_APP_PAYSTACK_PUB_KEY
    const toast = useToast()
    const amount = amnt * 100

    async function UploadTransaction() {
        const transactionData = {
            purchasedPlan: SelectedPlan,
            amountPaid: amount,
            customerName: name,
            customerEmail: email,
            customerPhoneNumber: phone,
            paymentId: uid
        }
        await addDoc(transRef, transactionData).then(() => {
            console.log("Transaction was added to transaction table successfully")
        })
    }

    const componentProps = {
        email,
        amount,
        metadata: {
            name,
            phone,
        },
        publicKey: pubKey,
        text: "Confirm and Pay",
        onSuccess: () => {
            UploadTransaction()
            toast({ title: "Payment Successful", status: "success", description: "Your payment was successful, you will receive and email with confirmation of payment" })

        },
        onClose: () => alert("Are you sure you want to exit"),
    }

    return (

        <Box>
            <PaystackButton className="payment-button" {...componentProps} />
        </Box>
    )
}