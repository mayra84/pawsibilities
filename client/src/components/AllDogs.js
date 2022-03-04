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
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDisclosure } from '@chakra-ui/hooks';
import { fetchDogs } from 'src/redux/reducers/dogReducer';
import DogProfileForm from './DogProfileForm';
import SmoothList from 'react-smooth-list';

export default function AllDogs(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { dogs, user } = useSelector((state) => state)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!user) {
            return
        }
        dispatch(fetchDogs)
    }, [dispatch, user])


    const handleSuccess = () => {
        onClose()
        dispatch(fetchDogs)
    }

    return (


        <Box>
            <Stack maxW={'40'} m={'0 auto'}>

                <Button onClick={onOpen} bgColor={'gray.200'}>Add Dog Profile</Button>
            </Stack>
            <Center py={6}>

                <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody>

                            <DogProfileForm onSuccess={handleSuccess}/>

                        </ModalBody>

                        <ModalFooter>

                        </ModalFooter>
                    </ModalContent>
                </Modal>


                <SimpleGrid columns={{ sm: 1, lg: 2 }} alignItems='stretch' spacing={20} m={10}>

                    {dogs.map((dog) => (

                        <Box
                        key={dog.id}
                            bgColor={'rgba(255 255 255 /90%)'}
                            backdropFilter={'blur(2px)'}
                            borderRadius={'10'} border={'2px'} color={'brand.201'}
                            maxW={'800px'}
                            w={'full'}

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
                                {/* <Badge
                                px={2}
                                py={1}
                                //   bg={useColorModeValue('gray.50', 'gray.800')}
                                fontWeight={'400'}>
                                #art
                            </Badge>
                            <Badge
                                px={2}
                                py={1}
                                //   bg={useColorModeValue('gray.50', 'gray.800')}
                                fontWeight={'400'}>
                                #photography
                            </Badge>
                            <Badge
                                px={2}
                                py={1}
                                //   bg={useColorModeValue('gray.50', 'gray.800')}
                                fontWeight={'400'}>
                                #music
                            </Badge> */}
                            </Stack>

                            <Stack mt={8} direction={'row'} spacing={4}>
                                <Button

                                    flex={1}
                                    fontSize={'sm'}
                                    rounded={'full'}
                                    _focus={{
                                        bg: 'gray.200',
                                    }}>
                                    Delete
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
                                    Update
                                </Button>
                            </Stack>
                        </SmoothList>
                        </Box>
                    ))}
            </SimpleGrid>
        </Center>
        </Box >
    );
}