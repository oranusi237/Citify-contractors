import { Stack, Heading, } from "@chakra-ui/react"
import { navItems } from "./navItems";
import { NavLink } from "react-router-dom";
import "./nav.css"

export default function NavItemsRenderers({direction, color, onClick}) {
    return (
        <Stack direction={direction} gap={5}>
            {navItems.map((item) => (
                <NavLink onClick={onClick} className={({ isActive }) =>
                    isActive ? "active" : "in-active"
                } key={item.id} to={item.path}>
                    <Heading color={color} fontSize={20}>
                        {item.name}
                    </Heading>
                </NavLink>
            ))}
        </Stack>
    );
}
