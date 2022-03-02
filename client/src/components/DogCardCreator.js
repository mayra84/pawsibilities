import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import DogCalendarCard from './DogCalendarCard'

function DogCardCreator() {

  const calendar = useSelector((state) => state.calendar)

  return (
    <div>
      <Box>
        {calendar.logs.map((log) => {
          return <DogCalendarCard key={log.id} log={log.log} 
          // name={log.name} mood={log.mood} physical={log.physical} activity={log.activity} notes={log.notes} 
          />
        })}
      </Box>
    </div>
  )
}

export default DogCardCreator

