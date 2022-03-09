import { Box, Button, Container, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, Link as RouterLink } from 'react-router-dom'

function HomePageHero() {
  return (
    <div>
        <Container boxShadow={'lg'}
                bgColor={'rgba(255 255 255 /60%)'}
                backdropFilter={'blur(2px)'}
                borderRadius={'10'} maxW={'xl'} justifyContent={'center'} alignItems={'center'}>
        <SimpleGrid minChildWidth='120px' spacing='40px'>
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
        </SimpleGrid>
      </Container>
    </div>
  )
}

export default HomePageHero