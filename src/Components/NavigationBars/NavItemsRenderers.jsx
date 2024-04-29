import { Stack, Heading, } from "@chakra-ui/react"
import { navItems } from "./navItems";
import { NavLink } from "react-router-dom";
import "./nav.css"
import { selectCurrentUser } from "../Store/user/userSelector";
import { useSelector } from "react-redux";
import { IoPower } from "react-icons/io5";

export default function NavItemsRenderers({ direction, color, onClick }) {

    const clearCache = () => {
        // Clear browser cache by reloading the page
        window.location.reload(true);
      };

    const currentUser = useSelector(selectCurrentUser)
    console.log(currentUser)
    const filteredLink = navItems.filter((items) => items.name.toLowerCase() !== "login" && items.name.toLowerCase() !== "sign up")
    const signedOutUserLink = navItems.filter((item) => item.name.toLowerCase() !== "profile")
    return (
        <Stack justify="center" direction={direction} gap={5}>
            {currentUser === null || currentUser === undefined ? signedOutUserLink.map((item) => (
                <NavLink onClick={onClick} className={({ isActive }) =>
                    isActive ? "active" : "in-active"
                } key={item.id} to={item.path}>
                    <Heading color={color} fontSize={20}>
                        {item.name}
                    </Heading>
                </NavLink>
            ))
                :
                filteredLink.map((item) => (
                    <NavLink onClick={onClick} className={({ isActive }) =>
                        isActive ? "active" : "in-active"
                    } key={item.id} to={item.path}>
                        <Heading color={color} fontSize={20}>
                            {item.name}
                        </Heading>
                    </NavLink>
                ))}
            {/* <Heading>{user!== null || user!== undefined ? user.email : ""}</Heading> */}
            {currentUser !== null && <IoPower fontSize={30} color="white" cursor="pointer" onClick={clearCache} />}

        </Stack >
    );
}
