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
  
  export default function WhyPawsibilities() {
    return (
      <Center py={8}>
        <Box
          maxW={'675px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pt={6}
          p={10}
          textAlign={'center'}>
          
          <Heading fontSize={'2xl'} fontFamily={'body'} mb={'6'}>
            Why Pawsibilities?
          </Heading>
          
          <Text 
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Having a pet is not a only a privilege, but a responsibility. It is our obligation to care for our pets to the absolute best of our abilities. How can you, a person with a non-stop, busy life filled with countless obligations, pawssibly keep track of yet another aspect of your life? 
            <br></br>
            <br></br>
            Do not fret! Pawsibilities is here to help. With this app you can track your pet's health daily. So, you can carry a clean conscience to your next vet visit knowing you have monitored your pets health to the best pawssible extent.
          </Text>
        </Box>
      </Center>
    );
  }