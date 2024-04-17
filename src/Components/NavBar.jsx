import { Box, HStack, Flex } from '@chakra-ui/react';
import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
                <nav>
                    <Flex align='center' justify='center'>
                    <HStack spacing='15px'>
                    <Box>
                        <Link to="/">Home</Link>
                    </Box>
                    <Box>
                        <Link to={'About'}>About</Link>
                    </Box>
                    <Box>
                        <Link to={"Contact"}>Contact</Link>
                    </Box>
                    </HStack>
                    </Flex>
                </nav>
    </div>
  )
}

export default NavBar