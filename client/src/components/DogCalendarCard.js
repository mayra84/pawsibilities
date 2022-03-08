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
  SimpleGrid,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { dogReducer } from 'src/redux/reducers/dogReducer';
import ImageButton from './ImageButton';
import SmoothList from 'react-smooth-list';

export default function DogCalendarCard(props) {
  const { log } = props
  console.log(log)
  const date = log.createdAt
  // const curDate= date.toLocaleString()

  const images = {
    mood: {
      'happy': '../Happy_3.png',
      'calm': '../Calm.png',
      'energetic': '../Energetic.png',
      'sad': '../Sad.png',
      'anxious': '../Anxious.png',
      'apathetic': '../Apathetic.png',
      'none': '../None_Paw.png'
    },
    activity: {
      'walk': '../Walk.png',
      'park': '../Park.png',
      'run': '../Run.png',
      'swim': '../Swim.png',
      'playedFetch': '../Played_Fetch.png',
      'none': '../None_Ball.png'
    },
    physical: {
      'limping': '../Limping.png',
      'nausea': '../Nausea.png',
      'constipation': '../Constipation.png',
      'none': '../None_Bone.png'
    }
  }



  //   onClick={
  //     async () => {
  //         const res = await fetch(`/api/v1/dogs/${dog.id}`, {
  //           method: 'DELETE',
  //           body: JSON.stringify(dog),
  //           headers: {
  //             'Content-Type': 'application/json'
  //           }
  //         })

  //         dispatch(fetchDogs)
  //       }
  //     // () => dispatch(removeDog(dog))
  // }


  return (
    <Center py={6}>
      <SmoothList transitionDuration={1200} delay={200}>
        <Box
          borderRadius={'10'} border={'2px'} borderColor={'brand.201'}

          maxW={'lg'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
        >
          <SmoothList transitionDuration={1200} delay={200}>
            <Avatar
              size={'xl'}
              src={'IMG_0096.jpg'}
              alt={'Avatar Alt'}
              mb={4}
              pos={'relative'}

            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {log.name}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              {date}
            </Text>
            <Stack justify={'center'} alignItems={'center'} direction={'column'}>
              <Stack direction={'row'}>
                <Box
                  BoxAlign={'center'}
                  color={useColorModeValue('gray.700', 'gray.400')}
                  px={3}
                >
                  <SimpleGrid columns={{ sm: 2 }} alignItems='stretch' spacing={10} m={2}>
                    {log.mood.map((mood) => {
                      return <ImageButton src={images.mood[mood]} />
                    })}
                  </SimpleGrid>
                </Box>
              </Stack>
              <Box>
                <SimpleGrid columns={{ sm: 2 }} alignItems='stretch' spacing={10} m={2}>
                  {log.activity.map((activity) => {
                    return <ImageButton src={images.activity[activity]} />
                  })}
                </SimpleGrid>
              </Box>
              <Box>
                <SimpleGrid columns={{ sm: 2 }} alignItems='stretch' justify={'center'} spacing={10} m={2}>
                  {log.physical.map((physical) => {
                    return <ImageButton src={images.physical[physical]} />
                  })}
                  {/* log.physical !== 'none' && () */}
                </SimpleGrid>
              </Box>
              <Box>
            {log.Images.map((Images) => {
              console.log(Images)
              return <img my={'8'} src={Images.location} alt='s3pic'/>
            })}
</Box>
            </Stack>
            {log.notes ? (
              <Box pt={'5'}>
                <Text fontWeight={600} color={'black'} mb={4}>
                  Notes: <br></br> {log.notes}
                </Text>
              </Box>
            ) : (
              null
            )
            }



            {/* {log.Images ? ( */}
            {/* //   })
           
            // ) : (
            //   null
            // )} */}
            {/* map */}
            {/* log.Images.location */}


          </SmoothList>
        </Box>
      </SmoothList>
    </Center>
  );
}