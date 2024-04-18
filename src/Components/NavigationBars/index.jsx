import { Box, useMediaQuery } from "@chakra-ui/react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function NavIndex() {
    const [isMobileDevice] = useMediaQuery('(max-width: 624px)')
    return (
        <Box>
            {isMobileDevice ? <MobileNav /> : <DesktopNav />}
        </Box>
    )
}