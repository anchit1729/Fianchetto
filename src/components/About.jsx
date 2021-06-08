import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ChakraProvider, HStack, Button, Link, Center } from "@chakra-ui/react";

function About() {
    return (
        <ChakraProvider>
            <div className='About'>
                <Center h='20em'>
                    Fianchetto is a lightweight web app that allows users to play chess games online with other players,
                    or even test their skills against a custom built chess AI.
                </Center>
                <Center h='20em'>
                    <HStack>
                        <Button colorScheme='teal' variant='outline'>
                            <Link as={RouterLink} to='/Game'>Start Game</Link>
                        </Button>
                        <Button colorScheme='teal' variant='outline'>
                            <Link as={RouterLink} to='/'>Home</Link>
                        </Button>
                    </HStack>
                </Center>
            </div>
        </ChakraProvider >
    );
}


export default About;