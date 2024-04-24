import React from "react"
import { PaystackButton } from "react-paystack"
import { Box } from "@chakra-ui/react"

export default function PaywithPaystack({email, name, phone}) {
    const publicKey = process.env.REACT_APP_PAYSTACK_PUB_KEY

    const amount = 1000000
 
    const componentProps = {
        email,
        amount,
        metadata: {
            name,
            phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
            alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Are you sure you want to exit"),
    }

    return (

        <Box>
            <PaystackButton text="Make payments now" {...componentProps} />
        </Box>
        // <div className="App">
        //   <div className="container">
        //     <div className="item">
        //       <img />
        //       <div className="item-details">
        //         <p>Dancing Shoes</p>
        //         <p>{amount}</p>
        //       </div>
        //     </div>
        //     <div className="checkout-form">
        //       <form>
        //         <label>Name</label>
        //         <input
        //           type="text"
        //           id="name"
        //           onChange={(e) => setName(e.target.value)}
        //         />
        //         <label>Email</label>
        //         <input
        //           type="text"
        //           id="email"
        //           onChange={(e) => setEmail(e.target.value)}
        //         />
        //         <label>Phone</label>
        //         <input
        //           type="text"
        //           id="phone"
        //           onChange={(e) => setPhone(e.target.value)}
        //         />
        //       </form>
        //       <PaystackButton {...componentProps} />
        //     </div>
        //   </div>
        // </div>
    )
}
