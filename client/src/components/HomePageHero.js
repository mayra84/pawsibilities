import { Box, Button, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, Link as RouterLink } from 'react-router-dom'

function HomePageHero() {
  return (
    <div>
        <Container boxShadow={'lg'}
                bgColor={'rgba(255 255 255 /60%)'}
                backdropFilter={'blur(2px)'}
                borderRadius={'10'} border={'2px'} color={'brand.201'} maxW={'xl'} justifyContent={'center'} alignItems={'center'}>
        <Stack
        p={'10'}
        justifyContent={'center'}
        m={'0 auto'} 
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
        //   py={{ base: 20, md: 36 }}
          >
          <Heading
          color={'black'}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Sign up to discover the Pawsibilities! <br />

          </Heading>
            

        </Stack>
      </Container>
    </div>
  )
}

export default HomePageHero