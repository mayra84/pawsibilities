import { Stack } from '@chakra-ui/react'
import React from 'react'
import SmoothList from 'react-smooth-list'
import CreatorProfiles from 'src/components/CreatorProfiles'
import WhyPawsibilities from 'src/components/WhyPawsibilities'

function AboutUs() {
  return (

    <SmoothList transitionDuration={1200} delay={200}>
      <Stack py={4}>
      <WhyPawsibilities />
      <CreatorProfiles />
      </Stack>
    </SmoothList>

  )
}

export default AboutUs
