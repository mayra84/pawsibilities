import React from 'react'
import Card from './Card'
import Card2 from './Card2'
import SmoothList from 'react-smooth-list'
import { Stack } from '@chakra-ui/react'
import Testimonials from './Testimonials'


function HomePageDogs() {
  return (
    <div>
      <SmoothList transitionDuration={1400}>
        <Stack direction={'row'} justify={'space-between'} p={6}>
        <Card />
        <Testimonials />
        <Card2 />
        </Stack>
    </SmoothList>
    </div>
  )
}

export default HomePageDogs