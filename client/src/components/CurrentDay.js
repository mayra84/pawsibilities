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
	// const domEnder = function() { const a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }()
	// const dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder
	const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')
	const curMonth = months[objToday.getMonth()]
	// const curYear = objToday.getFullYear()
	// const curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours())
	// const curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes()
	// const curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds()
	// const curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    // const today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

    const [dog, setDog] = useState({id:2, name: 'Emma'})

    const { isOpen, onOpen, onClose } = useDisclosure()
    const yourDog = 'Dalton'

    return (
        <SmoothList transitionDuration={1400}>
        <Center py={6}>
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
                    {/* </Link> */}

                    <Modal size={'6xl'} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            
                            <ModalHeader m={'0 auto'} fontSize={'3xl'} color={'black'}>Log {dog.name}'s health for today</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <DogIcon src={'../IMG_0096.jpg'}></DogIcon>
                                <HealthLog dog={dog}/>
                            </ModalBody>

                            {/* <ModalFooter>
                                
                            </ModalFooter> */}
                        </ModalContent>
                    </Modal>

        </Center>
        </SmoothList>
    );
}
