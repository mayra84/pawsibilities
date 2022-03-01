import React, { Component, useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box, Container, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import SmoothList from 'react-smooth-list';
import { fetchHealth } from "src/redux/reducers/calendarReducer";

const localizer = momentLocalizer(moment);



export default function DogCalendar(props) {

  const dispatch = useDispatch()
  const calendar = useSelector((state) => state.calendar)
  useEffect(() => {
    dispatch(fetchHealth)
  }, [dispatch])

  const events = calendar.logs.map((event) => {
    // console.log(event)
    const start = new Date(event.createdAt)
    const end = new Date(event.createdAt)
    end.setTime(end.getTime() + 360000)
    console.log(start, end)
    return {
      title: event.Dog.name,
      start: start,
      end: end,
      resource: event
    }
  })


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
          />
        </Box>
      </Flex>
    </SmoothList>
  );
}

