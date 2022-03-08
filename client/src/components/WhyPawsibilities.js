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
      <Center py={10}>
        <Box
          maxW={'675px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={10}
          textAlign={'center'}>
          
          <Heading fontSize={'2xl'} fontFamily={'body'} mb={'10'}>
            Why Pawsibilities?
          </Heading>
          
          <Text 
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Having a pet is not a only a privilege, but a responsibility. It is our obligation to care for our pets to the absolute best of our abilities. How can you, a person with a non-stop, busy life filled with countless obligations, pawssibly keep track of yet another aspect of your life? 
            <br></br>
            <br></br>
            Do not fret! Pawsibilities is here to help. With this app you can track your pet's health daily. So, you can carry a clean conscience to your next vet visit knowing you have monitored your pets behavior and health to the best pawssible extent.
          </Text>
  
          {/* <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #music
            </Badge>
          </Stack> */}
  
          {/* <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Message
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Follow
            </Button>
          </Stack> */}
        </Box>
      </Center>
    );
  }