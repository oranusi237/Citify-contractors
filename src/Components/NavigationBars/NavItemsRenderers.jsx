import { Stack, Heading, } from "@chakra-ui/react"
import { navItems } from "./navItems";
import { NavLink } from "react-router-dom";
import "./nav.css"
import { useUserAuth } from "../Store/UserContext";

export default function NavItemsRenderers({ direction, color, onClick }) {
    const { isAuthenticated, user } = useUserAuth()
    const filteredLink = navItems.filter((items) => items.name.toLowerCase() !== "login" && items.name.toLowerCase() !== "sign up")
    const signedOutUserLink = navItems.filter((item) => item.name.toLowerCase() !== "profile")
    return (
        <Stack direction={direction} gap={5}>
            {!user || user === null || !isAuthenticated ? signedOutUserLink.map((item) => (
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
        </Stack>
    );
}
