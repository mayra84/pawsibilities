import SmoothList from 'react-smooth-list';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    Divider,
} from '@chakra-ui/react';
import React from 'react';

export default function CreatorProfiles() {
    
    return (
            <SmoothList transitionDuration={1200} delay={200}>
        <Center p={'10'} height='50vh'>
            {/* <Center py={6}> */}
                <Box
                    maxW={'320px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={10}
                    textAlign={'center'}>
                    <Avatar
                        size={'xl'}
                        src={
                            'https://cdn.pixabay.com/photo/2020/06/21/14/04/border-collie-5324985_1280.jpg'
                        }
                        alt={'Avatar Alt'}
                        mb={4}
                        pos={'relative'}
                        // _after={{
                        //     content: '""',
                        //     w: 4,
                        //     h: 4,
                        //     bg: 'green.300',
                        //     border: '2px solid white',
                        //     rounded: 'full',
                        //     pos: 'absolute',
                        //     bottom: 0,
                        //     right: 3,
                        // }}
                    />
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        Mayra Estrella
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} mb={4}>

                    </Text>
                    <Text
                        textAlign={'center'}
                        color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}>
                        I'm the "M" in M&amp;Z!
                        <br></br>
                        My inspiration for Pawsibilities is born from my love for my three dogs: Dalton, Emma, and Cooper. They are my whole world and I want to make sure to always be the most responsible version of myself for them. I hope it helps other pet owners in proving their love and care for their Pawesome Pals.
                        {/* came from taking my eldest dog, Dalton, to the vet. We needed to give very precise information about Dalton's timeline and I realized.. I couldn't exactly remember. I was profoundly disappointed in my lack of responsibility. This was the exact moment I thought of Pawsibilities.  */}
                    </Text>

                    {/* <Stack mt={8} direction={'row'} spacing={4}>
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            _focus={{
                                bg: 'gray.200',
                            }}>
                            Message
                        </Button>
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                            }
                            _hover={{
                                bg: 'blue.500',
                            }}
                            _focus={{
                                bg: 'blue.500',
                            }}>
                            Follow
                        </Button>
                    </Stack> */}
                </Box>

                <Divider lineHeight={'20'} orientation='vertical' borderColor={'gray'} mx={'20%'} />

                <Box
                    maxW={'320px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={10}
                    textAlign={'center'}>
                    <Avatar
                        size={'xl'}
                        src={
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pu5U-pX2vFx3gvX2KQmS-YMOLVvLbCWIhA&usqp=CAU'
                        }
                        alt={'Avatar Alt'}
                        mb={4}
                        pos={'relative'}
                        // _after={{
                        //     content: '""',
                        //     w: 4,
                        //     h: 4,
                        //     bg: 'green.300',
                        //     border: '2px solid white',
                        //     rounded: 'full',
                        //     pos: 'absolute',
                        //     bottom: 0,
                        //     right: 3,
                        // }}
                    />
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        Zaria Mcburrows
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} mb={4}>

                    </Text>
                    <Text
                        textAlign={'center'}
                        color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}>
                        Actress, musician, songwriter and artist. PM for work inquires or{' '}
                        <Link href={'#'} color={'blue.400'}>
                            #tag
                        </Link>{' '}
                        me in your posts
                    </Text>

                    <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            #art
                        </Badge>
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            #photography
                        </Badge>
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            #music
                        </Badge>
                    </Stack>

                    {/* <Stack mt={8} direction={'row'} spacing={4}>
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            _focus={{
                                bg: 'gray.200',
                            }}>
                            Message
                        </Button>
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                            }
                            _hover={{
                                bg: 'blue.500',
                            }}
                            _focus={{
                                bg: 'blue.500',
                            }}>
                            Follow
                        </Button>
                    </Stack> */}
                </Box>
            {/* </Center> */}
        </Center>
                </SmoothList>
    );
}