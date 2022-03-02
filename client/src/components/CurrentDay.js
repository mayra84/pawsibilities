// import React, { Component, useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { Box, Container, Flex } from "@chakra-ui/react";
// import { useSelector } from "react-redux";

// const localizer = momentLocalizer(moment);



// export default function DogCalendar(props) {

//   const calendar = useSelector((state) => state.calendar)

//   const events = calendar.activities.map((event) => {
//     console.log(event)
//     return {
//       title: event.activity.title,
//       start: event.date,
//       end: event.date,
//       allDay: true,
//       resource: event
//     }
//   })


//   return (

//     <Flex
//       justifyContent='center'>
//       <Box
//         m='0 auto'
//         marginTop={'20'}
//         paddingTop={''}
//         bg={'white'}
//         boxShadow={'lg'}
//         borderRadius={'10'}>
//         <Calendar
//           localizer={localizer}
//           defaultDate={new Date()}

//           defaultView="month"
//           events={events}
//           style={{ height: "50vh", width: "100vh" }}
//         />
//       </Box>
//     </Flex>
//   );
// }








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
} from '@chakra-ui/react';
import HealthLog from './HealthLog';
import { useState } from 'react';
import DogIcon from './DogIcon';

export default function CurrentDay(props) {
    const currentDay = new Date()
    const objToday = new Date()
    const weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
    const dayOfWeek = weekday[objToday.getDay()]
    const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')
    const curMonth = months[objToday.getMonth()]


    const [dog, setDog] = useState({ id: 5, name: 'doggy' })

    const { isOpen, onOpen, onClose } = useDisclosure()
    const yourDog = 'Dalton'

    return (
        <SmoothList transitionDuration={1400}>
            <Center py={6}>
                <Stack  alignItems={'center'}>
                    <Stack direction={'row'} spacing={'68'} m={'10'}>
                        <DogIcon onClick={''} 
                        // onClick={() => { toggleMood('happy') }} src={'../Happy_3.png'} isActive={mood.includes('happy')} 
                        src={'https://cdn.pixabay.com/photo/2020/06/21/14/04/border-collie-5324985_1280.jpg'} />
                        <DogIcon onClick={''} src={'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk62174353-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ad86a8f60950da5faf2f06d6351c1bc8'} />
                        <DogIcon onClick={''} src={'https://www.maxpixel.net/static/photo/1x/Welsh-Corgi-Pembroke-Corgi-Dog-Pet-Cute-Animal-4237619.jpg'} />
                    </Stack>
                    <Box
                        borderRadius={'10'} border={'2px'} color={'brand.201'}
                        maxW={'320px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.900')}
                        boxShadow={'2xl'}
                        borderRadius={'500'}
                        //   rounded={'lg'}
                        p={6}
                        textAlign={'center'}>

                        <Heading p={'2'} color={'black'} fontSize={'4xl'} fontFamily={'body'}>
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
                                onClick={onOpen}
                                // alignSelf={'center'}
                                //   flex={1}
                                fontSize={'sm'}
                                rounded={'full'}
                                _focus={{
                                    bg: 'gray.200',
                                }}>
                                Open Health Survey
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
                {/* </Link> */}

                <Modal size={'6xl'} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>

                        <ModalHeader m={'0 auto'} my={'5'} fontSize={'3xl'} color={'black'}>Log {dog.name}'s health for today</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <HealthLog dog={dog} />
                        </ModalBody>

                        {/* <ModalFooter>
                                
                            </ModalFooter> */}
                    </ModalContent>
                </Modal>

            </Center>
        </SmoothList>
    );
}
