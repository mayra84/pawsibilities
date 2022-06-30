import { Link as RouterLink } from 'react-router-dom'
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
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Image,
    Flex,
    SimpleGrid,
    Alert,
    AlertIcon,
    CloseButton,
} from '@chakra-ui/react';
import HealthLog from './HealthLog';
import React, { useEffect, useState } from 'react';
import DogIcon from './DogIcon';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogs } from 'src/redux/reducers/dogReducer';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Card2 from './Card2';
import HomePageDogs from './HomePageDogs';
import HeroHero from './Hero';

export default function CurrentDay(props) {
    const currentDay = new Date()
    const objToday = new Date()
    const weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
    const dayOfWeek = weekday[objToday.getDay()]
    const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')
    const curMonth = months[objToday.getMonth()]


    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px)'
        />
    )

    const [overlay, setOverlay] = React.useState(<OverlayOne />)


    const dispatch = useDispatch()

    const [activeDog, setActiveDog] = useState(null)

    const { dogs, user } = useSelector((state) => state)
    const [complete, setComplete] = useState(false)

    useEffect(() => {
        if (!user) {
            return
        }
        dispatch(fetchDogs)
    }, [dispatch, user])

    useEffect(() => {
        if (dogs.length === 0) {
            return
        }
        setActiveDog(dogs[0])
        // dispatch(fetchDogs)
    }, [dogs])


    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleSuccess = () => {
        dispatch(fetchDogs)
        onClose()
        setComplete(true)

        console.log('yay')
    }

    const timer = setTimeout(() => {
        setComplete(false);
    }, 7000)


    return (

        <SmoothList transitionDuration={1400}>
            {complete && (
                <SmoothList transitionDuration={600}>
                    <Alert maxW={'60%'} borderRadius={'8'} mx={'auto'} status='success'>
                        <AlertIcon />
                        Successfully logged!
                        <CloseButton onClick={() => setComplete(false)} position='absolute' right='8px' top='8px' />
                    </Alert>

                </SmoothList>
            )}

            <Stack className='2' flexDirection={{ base: 'column', lg: 'column' }} justify={'center'} alignContent={''} alignItems={'center'}>
                <Stack m={2} gap={'10px'} direction={{base: 'row'}} flexWrap={'wrap'} alignItems={{base: 'center'}} justify={{base: 'center'}}>
                {dogs.length === 0 &&

                    <HeroHero />
                }

                {dogs.map(dog => (
                    <Stack 
                    alignItems={{ base: 'center', lg: 'center' }}
                        flexDirection={{ base: 'row', lg: 'row' }}>
                        <Box gap={'10px'} paddingTop={1} direction={{base: 'row'}} flexWrap={'wrap'} alignItems={{base: 'center'}} justify={{base: 'center'}}>
                            <DogIcon
                                onClick={() => setActiveDog(dog)}
                                src={dog.Image?.location} isActive={dog.id === activeDog?.id}
                                alt={dog.name} />
                        </Box>
                    </Stack>
                ))}
                </Stack>
                <Stack
                    className='3'
                    alignItems={'center'}
                    w={'100%'}
                    flexDirection={{ base: 'column', lg: 'row' }} maxW={'95%'}
                    justifyContent={'center'}
                >

                    <Stack className='4' alignItems={{ base: 'center', lg: 'center' }}
                        justify={{ base: 'space-around'}}
                        flexDirection={{ base: 'column', lg: 'row' }}


                        w={'2300px'} maxW={'95%'}

                    >

                        <Box className='card-1' pt={{ base: 6, md: 2, lg: 2 }} m={2}>
                            <Card />
                        </Box>

                        <Box

                            className='current-day-circle'
                            alignSelf={{ base: 'center', lg: 'flex-start' }}
                            order={{ base: -1, lg: 0 }}
                            bg={useColorModeValue('white', 'gray.900')}
                            boxShadow={'dark-lg'}
                            borderRadius={'500'}
                            minW={{ base: '325px' }}
                            maxH={'350'}
                            p={6}
                            textAlign={'center'}
                        >

                            <Heading p={'2'} color={'black'} fontSize={'4xl'} fontFamily={'body'}>
                                {curMonth}
                            </Heading>
                            <Heading p={'2'} color={'black'} fontSize={'8xl'} fontFamily={'body'}>
                                {currentDay.getDate()}
                            </Heading>


                            <Stack mt={2} direction={'row'} py={'4'}>
                                <Button
                                    m={'0 auto'}
                                    //IF SOMETHING BROKE IT MIGHT HAVE BEEN HERE WITH THE ONCLICK

                                    onClick={onOpen}
                                    fontSize={'base'}
                                    rounded={'full'}
                                    bgColor={'teal.500'}
                                    colorScheme={'teal.500'}
                                    bg={'teal.500'}
                                    borderRadius={'8'}
                                    px={4}
                                    _hover={{
                                        bg: 'teal.300',
                                    }}


                                >
                                    Open Health Survey
                                </Button>
                            </Stack>
                        </Box>

                        <Box className='card-2' p={2}>
                            <Card2 />
                        </Box>

                    </Stack>

                </Stack>


                <Modal w={'1100px'}
                    maxW={'95%'} isOpen={isOpen} onClose={onClose}>
                    {overlay}
                    <ModalOverlay />
                    <ModalContent w={'1100px'}
                        maxW={'95%'}>

                        <ModalHeader m={'0 auto'} my={'5'} fontSize={'3xl'} color={'black'}>Log {activeDog?.name}'s health for today</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody p={{ base: 1, lg: 6 }}>
                            <HealthLog dog={activeDog} onSuccess={handleSuccess} />
                        </ModalBody>

                        <ModalFooter>

                        </ModalFooter>
                    </ModalContent>
                </Modal>


            </Stack>

            <HomePageDogs />
        </SmoothList>
    );
}

