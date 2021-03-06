import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

import ImageButton from './ImageButton';
import SmoothList from 'react-smooth-list';

export default function DogCalendarCard(props) {
  const { log } = props
  const date = new Date(log.createdAt)

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
      'noAppetite': '../No_Appetite.png',
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
            src={log.Dog.Image.location}
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {log.name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            {date.toLocaleDateString()}
          </Text>

          <Stack mb={2} spacing={0} gap={'10px'} direction={{ base: 'row' }} flexWrap={'wrap'} alignItems={{ base: 'center' }} justify={{ base: 'center' }} className='icon-stack'>
            {log.physical.map((physical) => {
              return <ImageButton src={images.physical[physical]} />
            })}
            {/* log.physical !== 'none' && () */}
          </Stack>

          <Stack mb={2} spacing={0} gap={'10px'} direction={{ base: 'row' }} flexWrap={'wrap'} alignItems={{ base: 'center' }} justify={{ base: 'center' }} className='icon-stack'>
            {log.activity.map((activity) => {
              return <ImageButton src={images.activity[activity]} />
            })}
          </Stack>

          <Stack mb={2} spacing={0} gap={'10px'} direction={{ base: 'row' }} flexWrap={'wrap'} alignItems={{ base: 'center' }} justify={{ base: 'center' }} className='icon-stack'>
            {log.mood.map((mood) => {
              return <ImageButton src={images.mood[mood]} />
            })}
          </Stack>

          {log.Images.length !== 0 && (

            <Box>
              {log.Images.map((Images) => {
                console.log(Images)
                return <Image boxSize={'60'} borderRadius={'10'} my={'8'} src={Images.location} alt='s3pic' />
              })}
            </Box>

          )}
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

  );
}