import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Select,
    Textarea,
    Alert,
    AlertIcon,
    Box,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import axios from 'axios';
import { Link, Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addDog } from 'src/redux/reducers/dogReducer';
import AllDogs from './AllDogs';

export default function DogProfileForm(props) {
    // const { dog } = props

    const dispatch = useDispatch()
    // const dogs = useSelector((state) => state.dog)

    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    //weight is an integer, does this affect default state? 
    const [weight, setWeight] = useState('')
    const [size, setSize] = useState('')
    const [age, setAge] = useState('')
    const [temperament, setTemperament] = useState('')
    const [coat, setCoat] = useState('')
    const [bio, setBio] = useState('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [complete, setComplete] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        // dispatch(addDog(dogs))
        axios.post('api/v1/dogs/register', {
            name,
            breed,
            weight,
            size,
            age,
            temperament,
            coat,
            bio
        })
            .then(data => {
                setName('')
                setBreed('')
                setWeight('')
                setSize('')
                setAge('')
                setTemperament('')
                setCoat('')
                setBio('')
                setLoading(false)
                setError('')
                setComplete(true)
               
            })
            .catch(error => {
                setLoading(false)
                setError(error.response)
            })

    }

    // const handleAddDog = async () => {
    //     const res = await fetch('/api/v1/dogs', {
    //         method: 'POST',
    //         body: JSON.stringify(dog),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })

        return (

            <Box>

           

            <form onSubmit={handleSubmit}>
                {complete && (
                    <Alert maxW={'60%'} borderRadius={'8'} mx={'auto'} status='success'>
                        <AlertIcon />
                        Profile successfully created!
                    </Alert>
                )}

                {error && (

                    <Alert maxW={'60%'} borderRadius={'8'} mx={'auto'} status='error'>
                        <AlertIcon />
                        Error!&nbsp; {error.data.error}
                    </Alert>
                )}
                <Flex
                    // bgSize={'100vh'}
                    // backgroundImage={'./colorful_background_3.jpeg'}
                    // bgRepeat={'no-repeat'}
                    // backgroundSize={'cover'}

                    // bgColor={'brand.200'}
                    // minH={'100vh'}
                    // align={'center'}
                    justify={'center'}
                >
                    <Stack

                        boxShadow={'lg'}
                        bgColor={'rgba(255 255 255 /90%)'}
                        backdropFilter={'blur(2px)'}
                        borderRadius={'10'} border={'2px'} borderColor={'brand.201'}
                        color={'black'}

                        spacing={4}
                        w={'full'}
                        maxW={'700'}

                        // rounded={'xl'}

                        p={6}
                        my={12}
                    >
                        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                            Dog Profile
                        </Heading>
                        <FormControl id="userName">
                            <FormLabel>User Icon</FormLabel>
                            <Stack direction={['column', 'row']} spacing={6}>
                                <Center>
                                    <Avatar border={'2px'} color={'brand.201'} size="xl" src="./IMG_0096.jpg">
                                        {/* <AvatarBadge
                                    as={IconButton}
                                    size="sm"
                                    rounded="full"
                                    top="-10px"
                                    colorScheme="red"
                                    aria-label="remove Image"
                                    icon={<SmallCloseIcon />}
                                /> */}
                                    </Avatar>
                                </Center>
                                <Center w="full">
                                    <Button w="full">Change Profile Picture</Button>
                                </Center>
                            </Stack>
                        </FormControl>
                        <Stack direction={'row'}>
                            <FormControl id="name" isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    required value={name} onChange={(e) => setName(e.target.value)}
                                    placeholder="Name"
                                    _placeholder={{ color: 'gray.500' }}
                                    type="text"
                                />
                            </FormControl>

                            <FormControl id="breed" isRequired>
                                <FormLabel>Breed</FormLabel>
                                <Input
                                    required value={breed} onChange={(e) => setBreed(e.target.value)}
                                    placeholder="Ex: Husky Mix"
                                    _placeholder={{ color: 'gray.500' }}
                                />
                            </FormControl>

                            <FormControl id="weight" isRequired>
                                <FormLabel>Weight</FormLabel>
                                <Input
                                    required value={weight} onChange={(e) => setWeight(e.target.value)}
                                    placeholder="Ex: 12lbs"
                                    _placeholder={{ color: 'gray.500' }}
                                    type="text"
                                />
                            </FormControl>
                            <FormControl id="age" isRequired>
                                <FormLabel>Age</FormLabel>
                                <Input
                                    required value={age} onChange={(e) => setAge(e.target.value)}
                                    placeholder="Age"
                                    _placeholder={{ color: 'gray.500' }}
                                    type="text"
                                />
                            </FormControl>
                        </Stack>
                        <Stack direction={'row'}>
                            <FormControl id="size" isRequired>
                                <FormLabel>Size</FormLabel>
                                <Select
                                    required value={size} onChange={(e) => setSize(e.target.value)}
                                    placeholder='Select option'>

                                    {/* value?? */}

                                    <option value='small'>Small - less than 22lb</option>
                                    <option value='medium'>Medium - 22lb-55lb</option>
                                    <option value='large'>Large - over 55lb</option>
                                </Select>
                            </FormControl>


                            <FormControl id="temperament" isRequired>
                                <FormLabel>Temperament</FormLabel>
                                <Select
                                    required value={temperament} onChange={(e) => setTemperament(e.target.value)}
                                    placeholder='Select option'>
                                    <option value='friendly'>Friendly</option>
                                    <option value='unfriendly'>Unfriendly</option>
                                </Select>
                            </FormControl>

                            <FormControl id="coat" isRequired>
                                <FormLabel>Coat</FormLabel>
                                <Select
                                    required value={coat} onChange={(e) => setCoat(e.target.value)}
                                    placeholder='Select option'>
                                    <option value='smooth'>Smooth Coat</option>
                                    <option value='double'>Double Coat</option>
                                    <option value='long'>Long Coat</option>
                                    <option value='wire'>Wire Coat</option>
                                    <option value='curly'>Curly Coat</option>
                                </Select>
                            </FormControl>
                        </Stack>

                        <FormControl id="bio" isRequired>
                            <FormLabel>Bio</FormLabel>
                            <Textarea
                                required value={bio} onChange={(e) => setBio(e.target.value)}
                                placeholder='THIS WILL BE A MODAL also pls provide a short bio thx' />
                        </FormControl>

                        <Stack>

                            <Box alignSelf={'flex-end'}>
                                <Button
                                    // onClick={handleAddDog}
                                    isLoading={loading} loadingText='Submitting' type={'submit'}
                                    alignSelf={'flex-end'}
                                    marginTop={'10'}
                                    colorScheme={'teal'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'teal.200',
                                    }}>
                                    Submit
                                </Button>
                            </Box>

                            {/* <Button
                        bg={'red.400'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'red.500',
                        }}>
                        Cancel
                    </Button>
                    <Button
                    isLoading={loading} loadingText='Submitting'
                    type={'submit'}
                        bg={'blue.400'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Submit
                    </Button> */}
                        </Stack>
                    </Stack>
                </Flex>
            </form>
            </Box>
        );
    }
// }