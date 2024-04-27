import { Box, Heading } from "@chakra-ui/react";
import { fdb, } from "../../Utils/Firebase/Firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";



// const App = () => {
//   const [users, setUsers] = React.useState([]);

//   React.useEffect(() => {
//     usersRef.get().then((querySnapshot) => {
//       const users = [];
//       querySnapshot.forEach((doc) => {
//         users.push(doc.data());
//       });
//       setUsers(users);
//     });
//   }, []);

//   return <UserList users={users} />;
// };





export default function ProfilePage() {
    const [userDetails, setUserDetails] = useState([])
    useEffect(() => {
        const querySnapshot = async () => {
            const snapshot = await getDocs(collection(fdb, "Users"));
            snapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.data());
                setUserDetails(doc.data())
                // console.log(userDetails.filter((item)=> item.firstName === "John"))

            });
        };

        querySnapshot();
    }, []);

    return (
        // setTimeout(() => {
        <Box>
            <Heading>{userDetails.firstName}</Heading>
            <Heading>{userDetails.email}</Heading>
        </Box>
        // }, 2000)
    )
}