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

export default function CurrentDay() {
    const currentDay = new Date()

    const [dog, setDog] = useState({id:10, name: 'Dalton'})

    const { isOpen, onOpen, onClose } = useDisclosure()
    const yourDog = 'Dalton'

    return (
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
                    {currentDay.getMonth()}
                </Heading>
                <Heading p={'2'} color={'black'} fontSize={'8xl'} fontFamily={'body'}>
                    28
                </Heading>


                <Stack mt={8} direction={'row'} >
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

                    <Modal size={'5xl'} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            
                            <ModalHeader m={'0 auto'} fontSize={'3xl'} color={'black'}>Log {dog.name}'s health for today</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <HealthLog dog={dog}/>
                            </ModalBody>

                            {/* <ModalFooter>
                                
                            </ModalFooter> */}
                        </ModalContent>
                    </Modal>

        </Center>
    );
}







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





// import React, {Children} from 'react';
// import BigCalendar from 'react-big-calendar';
// import moment from 'moment';

// BigCalendar.momentLocalizer(moment);

// const CURRENT_DATE = moment().toDate();

// // example implementation of a wrapper
// const ColoredDateCellWrapper = ({children, value}) =>
//     React.cloneElement(Children.only(children), {
//         style: {
//             ...children.style,
//             backgroundColor: value < CURRENT_DATE ? 'lightgreen' : 'lightblue',
//         },
//     });

// const MyCalendar = props => (
//     <div style={{height: '100vh', margin: '10px'}}>
//         <BigCalendar
//             events={[]}
//             startAccessor="startDate"
//             endAccessor="endDate"
//             components={{
//                 // you have to pass your custom wrapper here
//                 // so that it actually gets used
//                 dateCellWrapper: ColoredDateCellWrapper,
//             }}
//         />
//     </div>
// );