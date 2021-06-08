import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ChakraProvider, HStack, VStack, Button, Link, Center } from '@chakra-ui/react';
import Chessboard from 'chessboardjsx';

function Game() {
    return (
        <ChakraProvider>
            <div className='Game'>
                <VStack>
                    <Center>
                        This is the game page. <br />
                    </Center>
                    <Center>
                        <HStack>
                            <Button colorScheme='teal' variant='outline'>
                                <Link as={RouterLink} to='/'>Home</Link>
                            </Button>
                            <Button colorScheme='teal' variant='outline'>
                                <Link as={RouterLink} to='/About'>About</Link>
                            </Button>
                        </HStack>
                    </Center>
                    <Chessboard position='start' />
                </VStack>
            </div>
        </ChakraProvider>
    );
}


export default Game;