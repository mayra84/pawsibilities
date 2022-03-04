import React, { Component, useEffect, useMemo, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box, Container, Flex, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalCloseButton, ModalBody, Modal } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import SmoothList from 'react-smooth-list';
import { fetchHealth } from "src/redux/reducers/calendarReducer";
import DogCalendarCard from "./DogCalendarCard";

const localizer = momentLocalizer(moment);

const colors = ['#FED9B7', '#F07167', '#006D77', '#00AFB9', '#0081A7']
let currentColor = 0

const newColor = () => {
  return colors[currentColor++ % colors.length]
}

export default function DogCalendar(props) {
  //falsy
  const [info, setInfo] = useState(null)


  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const calendar = useSelector((state) => state.calendar)
  // console.log(calendar.logs)
  useEffect(() => {
    dispatch(fetchHealth)
  }, [dispatch])

  
  const { events, colors } = useMemo(() => {
    let colors = {
      
    }
    const events = calendar.logs.map((log) => {
      // console.log(event)
      if (!(log.Dog.id in colors)) {
        colors[log.Dog.id] = newColor()
      }

      const start = new Date(log.createdAt)
      const end = new Date(log.createdAt)
      end.setTime(end.getTime() + 360000)
      // console.log(start, end)
      return {
        title: log.Dog.name,
        start: start,
        end: end,
        resource: log
      }
    })
    return {
      events, colors
    }
  }, [calendar.logs]
  )
  // console.log(colors)

  // (console.log(target.onClick()))

  return (
    <SmoothList transitionDuration={1400}>
      <Flex
        justifyContent='center'>
        <Box
          m='0 auto'
          marginTop={'20'}
          paddingTop={''}
          bg={'white'}
          boxShadow={'lg'}
          borderRadius={'10'}>
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={events}
            style={{ height: "50vh", width: "100vh" }}

            //receives a function returns an object
            eventPropGetter={(event, start, end, isSelected) => ({
              event,
              start,
              end,
              isSelected,
              style: { backgroundColor: colors[event.resource.Dog.id] }
            })}

            onSelectEvent={(event) => {
              setInfo(event)
              onOpen()

            }}
          />
        </Box>
        <Modal size={'3xl'} isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent>

            <ModalHeader m={'0 auto'} mt={'5'} fontSize={'3xl'} color={'black'}>
              {info && info.resource.Dog.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {info && <DogCalendarCard log={info.resource} />}
            </ModalBody>

            <ModalFooter>
                                
                            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </SmoothList>
  );
}
