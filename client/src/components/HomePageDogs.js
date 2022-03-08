import React from 'react'
import Card from './Card'
import Card2 from './Card2'
import SmoothList from 'react-smooth-list'
import { Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Link,
  SimpleGrid,} from '@chakra-ui/react'
import Testimonials from './Testimonials'

const Testimonial = ({ children } ) => {
  return <Box display={'flex'} flexDirection={'column'}>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
    m={0}
    flexGrow={'1'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
    //   alignItems={'stretch'}
      p={8}
      rounded={'xl'}
      align={'stretch'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
    // alignItems={'stretch'}
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'} flexBasis={'120px'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

function HomePageDogs() {
  return (
    <div>
      <SmoothList transitionDuration={1400}>
        <Stack direction={'row'} justify={'space-between'} p={6}>
        <Card />
        {/* <Testimonials /> */}
        <Box >
        {/* <SimpleGrid m={0}> */}
      {/* <Container maxW={'70%'} pt={175} as={Stack} spacing={10} alignSelf={'flex-end'} > */}
        <Stack >
          <Heading>Helpful Resources</Heading>
          {/* <Text>We have been working with clients around the world</Text> */}
        </Stack>
        <Stack
        // alignItems={'stretch'}
        
        
          direction={{ base: 'column', md: 'row' }}
          // spacing={{ base: 10, md: 4, lg: 10 }}
          >
            <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Common Pet Health Issues</TestimonialHeading>
              <TestimonialText >
              "The benefits can only increase when a pet owner knows more about the proper care and nutrition that their pet should be receiving."
              <br></br>
              <br></br>
              <Link fontWeight={'bold'} href="https://www.ardmoreah.com/pet-care/common-pet-health-issues/">Common Pet Health Issues</Link>
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar bg={'#FFFFFF'}
              src={
                'https://www.ardmoreah.com/images/logos/Logo.png'
              }
            //   name={'Jane Cooper'}
              title={'Ardmore Animal Hospital'}
            />
          </Testimonial>
          <Testimonial >
            <TestimonialContent >
              <TestimonialHeading >Healthy Dog</TestimonialHeading>
              <TestimonialText >
              "Like many first-time parents, new pet owners may over think every little quirk their dog displays. The good news is, there are signs that tell you when your dog is thriving."
              <br></br>
              <br></br>
              <Link fontWeight={'bold'} href="https://www.petinsurance.com/healthzone/pet-health/health-conditions/6-signs-your-dog-is-healthy/">6 Signs Your Dog is Healthy</Link>
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.ctfassets.net/440y9b545yd9/73igBtU9JzgwFD1leYxEIk/4fcdd46e9dde4d5c14a36abea1ad1529/PHZ-logo.png'
              }
              title={'Cambridge University Press'}
            />
          </Testimonial>
          {/* <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>How to Support a Loved One</TestimonialHeading>
              <TestimonialText >
              "If you are a caregiver of someone with a mental illness, it is normal to feel unprepared or confused on how to help them. Feelings of inadequacy are common but remember, you are not alone and there is always professional help available."
              <br></br>
              <br></br>
              <Link fontWeight={'bold'} href="https://www.mhanational.org/being-effective-caregiver">Being an Effective Caregiver</Link>
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={ 

                '../Mental_Health_America.png'
              }
            //   name={'Jane Cooper'}
              title={'CEO at ABC Corporation'}
            />
          </Testimonial> */}
          
        </Stack>
      {/* </Container> */}
      {/* </SimpleGrid> */}
    </Box>
        <Card2 />
        </Stack>
    </SmoothList>
    </div>
  )
}

export default HomePageDogs