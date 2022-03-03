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
    useColorModeValue,
  } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { dogReducer } from 'src/redux/reducers/dogReducer';
  
  export default function DogCalendarCard(props) {
    const { log } = props
    

    // const { health } = props
    // console.log(props.health)


    //map over calendar logs
    // 
    // console.log(dogName)
    
    //for next button
    // const events = calendar.logs.map((log) => {
    //   // console.log(log)
      
    //   const start = new Date(log.createdAt)
    //   const end = new Date(log.createdAt)
    //   end.setTime(end.getTime() + 360000)
    //   // console.log(start, end)
    //   return {
    //     title: log.Dog.name,
    //     start: start,
    //     end: end,
    //     resource: log
    //   }
    // })

    // console.log(calendar.logs[0].createdAt)
    // const dogName = calendar.logs[2].Dog.name
    // const mood = calendar.logs[2].mood
    // const physical = calendar.logs[2].physical
    // const activity = calendar.logs[2].activity
    // const date = calendar.logs[2].createdAt
  

    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
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
            {/* {date} */}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            {log.mood} {log.physical} {log.activity}
            
          </Text>
  
          
        </Box>
      </Center>
    );
  }