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
            {/* <Text as={'span'} color={'green.400'}>
              your audience
            </Text> */}
          </Heading>
            
          {/* <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Link textUnderlineOffset={'none'} as={RouterLink} to="/activities">
                <Button
              colorScheme={'teal.500'}
              bg={'teal.500'}
              borderRadius={'8'}
              px={6}
              _hover={{
                bg: 'teal.500',
              }}>
              Go to Activities
            </Button>
            </Link> */}

            {/* <Link as={RouterLink} to="/activities"> Activities</Link> */}

            {/* <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button> */}
            {/* <Box> */}
              {/* <Icon
                as={Arrow}
                color={useColorModeValue('gray.800', 'gray.300')}
                w={71}
                position={'absolute'}
                right={-71}
                top={'10px'}
              /> */}
              {/* <Text
                fontSize={'lg'}
                fontFamily={'Caveat'}
                position={'absolute'}
                right={'-125px'}
                top={'-15px'}
                transform={'rotate(10deg)'}>
                Starting at $15/mo
              </Text> */}
            {/* </Box>
          </Stack> */}
        </Stack>
      </Container>
    </div>
  )
}

export default HomePageHero