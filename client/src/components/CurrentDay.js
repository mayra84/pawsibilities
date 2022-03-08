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

    //useSelector out of redux
    //map over them
    //onClick={() => setDog(dog)}


    // const handleModalOnClick = () => {
    //     onOpen()
    //     setOverlay(<OverlayOne />)
    // }

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
 
    return (
            <SmoothList transitionDuration={1400}>
                <Flex justify={'center'} w={'100%'}>
                    <Stack alignItems={'center'} w={'100%'}
                    >
                        <Stack direction={'row'} spacing={'68'} m={'10'}>
                            {dogs.length === 0 &&

                    <HeroHero />
                            }

                            {dogs.map(dog => (
                                <Box >
                                    <DogIcon                                    
                                   
                                    // key={dog.Image?.id}
                                    // onClick={() => setDog(dog)}
                                    onClick={() => setActiveDog(dog)}
                                        // onClick={() => { toggleDog(dog) }}
                                        //isActive = what was clicked
                                        src={dog.Image?.location} isActive={dog.id === activeDog?.id} 
                                        alt={dog.name}/>
                                        
                                </Box>
                            ))}
                        </Stack>

{/* <SimpleGrid direction={'row'} columns={{ sm: 1, md: 2, lg: 3 }}  */}
{/* // direction={{ base: 'column', md: 'row' }}
> */}

{/* direction={{ base: 'row', sm: 'column',  }} justifyContent={'space-between'} */}
                        <Stack alignItems={{sm: 'center', lg: 'flex-start'}} direction={{ lg: 'row', sm: 'column',  }} w={'95%'} maxW={'2300px'} justifyContent={'space-between'}
                        // gap={'650'}
                        >
                            {/* <Box> */}
                            <Box>
                            <Card />
                            </Box>
                        <Box
                        order={{lg: 0, sm: -1}}
                        // m={'0 auto'}
                        // mn={0}
                             border={'2px'} color={'brand.201'}
                            // maxW={'320px'}
                            // w={'full'}
                            bg={useColorModeValue('white', 'gray.900')}
                            boxShadow={'2xl'}
                            borderRadius={'500'}
                            minW={'325px'}
                            //   rounded={'lg'}
                            maxH={'350'}
                            p={6}
                            textAlign={'center'}
                            >

                            <Heading p={'2'} color={'black'} fontSize={'4xl'} fontFamily={'body'} >
                                {/* February */}
                                {/* {currentDay.getMonth()} */}
                                {curMonth}
                            </Heading>
                            <Heading p={'2'} color={'black'} fontSize={'8xl'} fontFamily={'body'}>
                                {/* 2 */}
                                {currentDay.getDate()}
                            </Heading>


                            <Stack mt={2} direction={'row'} py={'4'}>
                                {/* <Link color={'black'} p={'2'} m={'0 auto'} as={RouterLink} to={"/healthcalendar"}> */}
                                <Button
                                    m={'0 auto'}
                                    // size={'xs'}

//IF SOMETHING BROKE IT MIGHT HAVE BEEN HERE WITH THE ONCLICK


                                    onClick={onOpen}
                                    // alignSelf={'center'}
                                    //   flex={1}
                                    
                                    fontSize={'sm'}
                                    rounded={'full'}
                                    // _focus={{
                                    //     bg: 'gray.200',
                                    // }}

                                    bgColor={'teal.500'}
                            colorScheme={'teal.500'}
                            bg={'teal.500'}
                            borderRadius={'8'}
                            px={6}
                            _hover={{
                                bg: 'teal.300',
                            }}


                                    >
                                    Open Health Survey
                                </Button>
                            </Stack>
                        </Box>
                        <Box>
                        <Card2 />
                        </Box>
                        {/* </Box> */}
                        </Stack>
                        {/* </SimpleGrid> */}

                    </Stack>

                    {/* </Link> */}

                    <Modal size={'6xl'} isOpen={isOpen} onClose={onClose}>
                        {overlay}
                        <ModalOverlay />
                        <ModalContent>

                            <ModalHeader m={'0 auto'} my={'5'} fontSize={'3xl'} color={'black'}>Log {activeDog?.name}'s health for today</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <HealthLog dog={activeDog} />
                            </ModalBody>

                            <ModalFooter>
                
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                </Flex>
                <HomePageDogs />
            </SmoothList>
    );
}
