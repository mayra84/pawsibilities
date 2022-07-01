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
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDisclosure } from '@chakra-ui/hooks';
import { fetchDogs } from 'src/redux/reducers/dogReducer';
import DogProfileForm from './DogProfileForm';
import SmoothList from 'react-smooth-list';
import { removeDog } from 'src/redux/reducers/dogReducer';
import Hero from './Hero';
import DogProfileUpdateForm from './DogProfileUpdateForm';

export default function AllDogs(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { dogs, user } = useSelector((state) => state)

    const [selectedDog, setSelectedDog] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!user) {
            return
        }
        dispatch(fetchDogs())
    }, [dispatch, user])


    const handleSuccess = () => {
        onClose()
        dispatch(fetchDogs())
        setDisplayAlert(true)
    }

    const [displayAlert, setDisplayAlert] = useState(false)
    // useEffect(() => {
    const timer = setTimeout(() => {
        setDisplayAlert(false);
    }, 7000)


    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px)'
        />
    )

    const [overlay, setOverlay] = React.useState(<OverlayOne />)


    // const handleRemoveDog = () => {
    //     dispatch(removeDog)
    // }

    // const handleRemoveDog = async () => {
    //     const res = await fetch(`/api/v1/dogs/${dog.id}`, {
    //       method: 'DELETE',
    //       body: JSON.stringify(dog),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     })

    //     dispatch(fetchDogs())
    //   }

    // const handleRemoveDog = async (dog) => {

    //     const res = await axios.delete(`/api/v1/dogs/${dog.id}`)
    //     .then(res => res.data)


    //     // const res = await fetch(`/api/v1/dogs/${dog.id}`, {
    //     //     method: 'DELETE',
    //     //     body: JSON.stringify(dog),
    //     //     headers: {
    //     //         'Content-Type': 'application/json'
    //     //     }
    //     // })

    //     dispatch(fetchDogs)
    // }

    return (


        <Box>
            {displayAlert && (
                <SmoothList transitionDuration={600}>
                    <Alert maxW={'60%'} borderRadius={'8'} mx={'auto'} status='success'>
                        <AlertIcon />
                        Profile successfully created!
                    </Alert>
                </SmoothList>
            )}
            <Stack >
                <SmoothList transitionDuration={1400}>
                    <Stack direction={'row'} spacing={'68'} m={''}>
                        {dogs.length === 0 ? (
                            <Hero />

                        ) : (
                            <Stack mt={'0'} maxW={'40'} m={'0 auto'}>

                                <Button onClick={onOpen} bgColor={'teal'}
                                    fontSize={'sm'}
                                    rounded={'full'}
                                    colorScheme={'teal.500'}
                                    bg={'teal'}
                                    borderRadius={'8'}
                                    px={6}
                                    _hover={{
                                        bg: 'teal.300',
                                    }}>Add Dog Profile</Button>
                            </Stack>

                        )

                        }
                    </Stack>
                </SmoothList>
            </Stack>
            <Center py={6}>

                <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
                    {overlay}
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody>

                            {selectedDog ? (
                                <DogProfileUpdateForm dog={selectedDog}/>
                            ) : (

                                <DogProfileForm onSuccess={handleSuccess} />
                            )}


                        </ModalBody>

                        <ModalFooter>

                        </ModalFooter>
                    </ModalContent>
                </Modal>

                <SmoothList transitionDuration={1000} delay={100}>
                <SimpleGrid columns={{ sm: 1, lg: 2 }} alignItems='stretch' spacing={20} m={10}>

                    {dogs.map((dog) => (

                        <Box
                            key={dog.id}
                            bgColor={'rgba(255 255 255 /90%)'}
                            backdropFilter={'blur(2px)'}
                            borderRadius={'10'} 
                            // border={'2px'} color={'brand.201'}
                            maxW={'95%'}
                            w={'800px'}

                            //   bg={useColorModeValue('white', 'gray.900')}
                            boxShadow={'2xl'}
                            rounded={'lg'}
                            p={10}
                            textAlign={'center'}>
                            <SmoothList transitionDuration={1000} delay={100}>

                                <Avatar
                                    key={dog.Image?.id}
                                    size={'xl'}
                                    src={dog.Image?.location}
                                    alt={'Avatar Alt'}
                                    mb={4}
                                    pos={'relative'}
                                />
                                <Heading fontSize={'4xl'} fontFamily={'body'} color={'black'} pb={5}>
                                    {dog.name}
                                </Heading>
                                <Text fontWeight={600} color={'black'} mb={4}>
                                    {dog.breed}

                                </Text>
                                <Stack direction={'row'} p={4}>
                                    <Text fontWeight={600} color={'black'} mb={4}>
                                        Weight: {dog.weight}lbs
                                    </Text>
                                    <Text fontWeight={600} color={'black'} mb={4}>
                                        Size: {dog.size}
                                    </Text>
                                    <Text fontWeight={600} color={'black'} mb={4}>
                                        Age: {dog.age} years
                                    </Text>
                                    <Text fontWeight={600} color={'black'} mb={4}>
                                        Coat: {dog.coat}
                                    </Text>
                                </Stack>
                                <Text fontWeight={600} color={'black'} mb={4}>
                                    Temperament: {dog.temperament}
                                </Text>

                                <Text fontWeight={600} color={'black'} mb={4}>
                                    Bio: {dog.bio}
                                </Text>

                                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>

                                </Stack>

                                <Stack mt={8} direction={'row'} spacing={4}>
                                    <Button
                                        onClick={
                                            async () => {
                                                const res = await fetch(`/api/v1/dogs/${dog.id}`, {
                                                    method: 'DELETE',
                                                    body: JSON.stringify(dog),
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    }
                                                })

                                                dispatch(fetchDogs)
                                            }
                                            // () => dispatch(removeDog(dog))
                                        }
                                        flex={1}
                                        fontSize={'sm'}
                                        rounded={'full'}
                                        _focus={{
                                            bg: 'gray.200',
                                        }}>
                                        Delete
                                    </Button>
                                    <Button

                                        onClick={() => {
                                            onOpen()
                                            setSelectedDog(dog)
                                        }}

                                        flex={1}
                                        bgColor={'teal'}
                                    fontSize={'sm'}
                                    rounded={'full'}
                                    colorScheme={'teal.500'}
                                    bg={'teal'}
                                    borderRadius={'8'}
                                    px={6}
                                    _hover={{
                                        bg: 'teal.300',
                                    }}>
                                        Update
                                    </Button>
                                </Stack>
                            </SmoothList>
                        </Box>
                    ))}
                </SimpleGrid>
                </SmoothList>
            </Center>
        </Box >
    );
}