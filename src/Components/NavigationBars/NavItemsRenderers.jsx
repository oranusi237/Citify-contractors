import { Stack, Heading, Flex } from "@chakra-ui/react"
import { navItems } from "./navItems";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./nav.css"
import { selectCurrentUser } from "../Store/user/userSelector";
import { useSelector } from "react-redux";



export default function NavItemsRenderers({ direction, color, onClick }) {
    const token = localStorage.getItem("auth-token")
    const navigate = useNavigate()

    function LogoutUser() {
        const handleClearCookiesAndSiteData = () => {
            if (window.confirm("Are you sure you want to logout")) {
                window.sessionStorage.clear()
                localStorage.removeItem("persist:root")
                localStorage.removeItem("auth-token")
                navigate("/login")
            }
        };
        handleClearCookiesAndSiteData()
    }
    const location = useLocation()

    const currentUser = useSelector(selectCurrentUser)
    console.log(currentUser)
    const filteredLink = navItems.filter((items) => items.name.toLowerCase() !== "login" && items.name.toLowerCase() !== "sign up")
    const signedOutUserLink = navItems.filter((item) => item.name.toLowerCase() !== "profile")
    return (
        <Stack align={direction === "row" && "center"} justify="center" direction={direction} gap={5}>
            {token === null ? signedOutUserLink.map((item) => (
                <NavLink onClick={onClick} className={location.pathname.includes(item.name) ? "active" : "in-active"} key={item.id} to={item.path}>
                    <Heading color={color} fontSize={20}>
                        {item.name}
                    </Heading>
                </NavLink>
            ))
                :
                filteredLink.map((item) => (
                    <NavLink onClick={onClick} className={location.pathname.includes(item.name) ? "active" : "in-active"} key={item.id} to={item.path}>
                        <Heading color={"white"} fontSize={20}>
                            {item.name}
                        </Heading>
                    </NavLink>
                ))
            }
            {
                token !== null &&
                <Flex cursor={"pointer"} onClick={LogoutUser} gap={1} align="center">
                    <Heading color={"white"} fontSize={20}>Logout</Heading>
                </Flex>
            }

        </Stack >
    );
}
