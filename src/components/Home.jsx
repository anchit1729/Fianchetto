import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ChakraProvider, HStack, Button, Link, Center } from "@chakra-ui/react";


function Home() {
    return (
        <ChakraProvider>
            <Center h='20em'>
                Welcome to Fianchetto
            </Center>
            <Center h='20em'>
                <HStack>
                    <Button colorScheme='teal' variant='outline'>
                        <Link as={RouterLink} to='/Game'>Start Game</Link>
                    </Button>
                    <Button colorScheme='teal' variant='outline'>
                        <Link as={RouterLink} to='/About'>Learn More</Link>
                    </Button>
                </HStack>
            </Center>
        </ChakraProvider>
    );
}

export default Home;