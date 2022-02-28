import { CheckCircleIcon, CheckIcon } from '@chakra-ui/icons';
import {
    CheckboxGroup,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Textarea,
    flexbox,
    Alert,
    AlertIcon,
    Modal,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Image,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import CurrentDay from './CurrentDay';
import DogDropDown from './DogDropDown';
import ImageButton from './ImageButton';

function HealthLog(props) {

    //HOW TO ADD MULTIPLE THINGS TO STATE? SPREAD? SELECTING MULTIPLE THINGS
    //VALUE? ONCHANGE?

    const [mood, setMood] = useState([])
    const [physical, setPhysical] = useState('')
    const [activity, setActivity] = useState('')
    const [notes, setNotes] = useState('')

    const [complete, setComplete] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.post(`/api/v1/health/log/${props.dog.id}`, {
            mood,
            physical,
            activity,
            notes
        })
            .then(data => {
                setMood([])
                setPhysical('')
                setActivity('')
                setNotes('')
                setLoading(false)
                setError('')
                setComplete(true)

            })
            .catch(error => {
                setLoading(false)
                setError(error.response)
            })
    }

const toggleMood = (value) => {
    setMood([...mood, value])

    if (mood.includes(value)) {
        setMood(mood.filter((m) => {
            return m !== value
        } ))
    } else {
        setMood([...mood, value])
    }
}

    return (
        <div>


            {complete && (
                <Alert maxW={'60%'} borderRadius={'8'} mx={'auto'} status='success'>
                    <AlertIcon />
                    Successfully logged!
                </Alert>
            )}

            {error && (

                <Alert maxW={'60%'} borderRadius={'8'} mx={'auto'} status='error'>
                    <AlertIcon />
                    Error!&nbsp; {error.data.error}
                </Alert>
            )}

            <form onSubmit={handleSubmit}>
                <Stack spacing={8} mx={'auto'} pb={8} >
                    <Stack align={'center'}>
                        <Box
                            boxShadow={'lg'}
                            bgColor={'rgba(255 255 255 /90%)'}
                            backdropFilter={'blur(2px)'}
                            borderRadius={'10'} border={'2px'} color={'brand.201'}
                            rounded={'lg'}
                            //   bg={useColorModeValue('white', 'gray.700')}
                            p={12}>
                            <Stack spacing={2}>

                                {/* <DogDropDown /> */}


                                <FormControl id="mood">
                                    <FormLabel fontSize={'2xl'} color={'black'}>Mood</FormLabel>
                                    <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                        <Stack mx={'8'} mt={'6'} mb={'10'} spacing={[1, 5]} direction={['column', 'row']}>
                                            {/* <Checkbox value='happy'> */}
                                            <ImageButton onClick={() => {toggleMood('happy')}} src={'../Happy_3.png'} isActive={mood.includes('happy')}/>
                                            
                                                {/* </Checkbox> */}

                                            {/* <Checkbox value='calm'> */}
                                                <ImageButton onClick={() => {toggleMood('calm')}} src={'../Calm.png'} isActive={mood.includes('calm')} />
                                                {/* </Checkbox> */}
                                            {/* <Checkbox value='energetic'> */}
                                                <Image
                                                boxShadow={'lg'}
                                                onClick={''}
                                                // isActive={'true'}
                                                alignSelf={'left'}
                                                borderRadius={'75'}
                                                boxSize='115'
                                                objectFit='fill'
                                                src='../Energetic.png'
                                                alt='Pawsibilities' />
                                                {/* </Checkbox> */}
                                            {/* <Checkbox value='sad'> */}
                                                <Image
                                                boxShadow={'lg'}
                                                onClick={''}
                                                // isActive={'true'}
                                                alignSelf={'left'}
                                                borderRadius={'75'}
                                                boxSize='115'
                                                objectFit='fill'
                                                src='../Sad.png'
                                                alt='Pawsibilities' />
                                                {/* </Checkbox> */}
                                            {/* <Checkbox value='anxious'> */}
                                                <Image
                                                boxShadow={'lg'}
                                                onClick={''}
                                                // isActive={'true'}
                                                alignSelf={'left'}
                                                borderRadius={'75'}
                                                boxSize='115'
                                                objectFit='fill'
                                                src='../Anxious.png'
                                                alt='Pawsibilities' />
                                                {/* </Checkbox> */}
                                            {/* <Checkbox value='apathetic'> */}
                                                <Image
                                                boxShadow={'lg'}
                                                onClick={''}
                                                // isActive={'true'}
                                                alignSelf={'left'}
                                                borderRadius={'75'}
                                                boxSize='115'
                                                objectFit='fill'
                                                src='../Apathetic.png'
                                                alt='Pawsibilities' />
                                                {/* </Checkbox> */}
                                        </Stack>
                                    </CheckboxGroup>
                                </FormControl>
                                <FormControl id="physicalObservations">
                                    <FormLabel fontSize={'2xl'} color={'black'}>Physical Observations</FormLabel>
                                    <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                        <Stack mx={'8'} mt={'6'} mb={'10'} spacing={[1, 5]} direction={['column', 'row']}>
                                            {/* <Checkbox value='limping'> */}
                                            <Image
                                                boxShadow={'lg'}
                                                onClick={''}
                                                // isActive={'true'}
                                                alignSelf={'left'}
                                                borderRadius={'75'}
                                                boxSize='115'
                                                objectFit='fill'
                                                src='../Limping_2.png'
                                                alt='Pawsibilities' />
                                            {/* </Checkbox> */}
                                           
                                            {/* <Checkbox value='nausea'> */}
                                            <Image
                                                boxShadow={'lg'}
                                                onClick={''}
                                                // isActive={'true'}
                                                alignSelf={'left'}
                                                borderRadius={'75'}
                                                boxSize='115'
                                                objectFit='fill'
                                                src='../Nausea_2.png'
                                                alt='Pawsibilities' />
                                            {/* </Checkbox> */}
                                            {/* <Checkbox value='constipation'> */}
                                            <Image
                                                boxShadow={'lg'}
                                                onClick={''}
                                                // isActive={'true'}
                                                alignSelf={'left'}
                                                borderRadius={'75'}
                                                boxSize='115'
                                                objectFit='fill'
                                                src='../Constipation.png'
                                                alt='Pawsibilities' />
                                            {/* </Checkbox> */}
                                            {/* <Checkbox value='abnormalAppetite'>Abnormal Appetite</Checkbox> */}
                                            {/* <Checkbox value='irregular bowel movement'>Irregular Bowel Movement</Checkbox> */}
                                        </Stack>
                                    </CheckboxGroup>
                                </FormControl>
                                <FormControl id="activity">
                                    <FormLabel fontSize={'2xl'} color={'black'}>Activity</FormLabel>
                                    <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                        <Stack mx={'8'} mt={'6'} mb={'10'} spacing={[1, 5]} direction={['column', 'row']}>
                                            {/* when option clicked, ask to input distance/time */}
                                            {/* <Checkbox value='walk'> */}
                                            <Image
                                                boxShadow={'lg'}
                                                onClick={''}
                                                // isActive={'true'}
                                                alignSelf={'left'}
                                                borderRadius={'75'}
                                                boxSize='115'
                                                objectFit='fill'
                                                src='../Walk.png'
                                                alt='Pawsibilities' />
                                            {/* </Checkbox> */}
                                            {/* <Checkbox value='park'> */}
                                            <Image
                                                boxShadow={'lg'}
                                                onClick={''}
                                                // isActive={'true'}
                                                alignSelf={'left'}
                                                borderRadius={'75'}
                                                boxSize='115'
                                                objectFit='fill'
                                                src='../Park.png'
                                                alt='Pawsibilities' />
                                            {/* </Checkbox> */}
                                            {/* <Checkbox value='run'> */}
                                            <Image
                                                boxShadow={'lg'}
                                                onClick={''}
                                                // isActive={'true'}
                                                alignSelf={'left'}
                                                borderRadius={'75'}
                                                boxSize='115'
                                                objectFit='fill'
                                                src='../Run.png'
                                                alt='Pawsibilities' />
                                            {/* </Checkbox> */}
                                            {/* <Checkbox value='swim'> */}
                                            <Image
                                                boxShadow={'lg'}
                                                onClick={''}
                                                // isActive={'true'}
                                                alignSelf={'left'}
                                                borderRadius={'75'}
                                                boxSize='115'
                                                objectFit='fill'
                                                src='../Swim.png'
                                                alt='Pawsibilities' />
                                            {/* </Checkbox> */}
                                            {/* <Checkbox value='fetch'> */}
                                            <Image
                                                boxShadow={'lg'}
                                                onClick={''}
                                                // isActive={'true'}
                                                alignSelf={'left'}
                                                borderRadius={'75'}
                                                boxSize='115'
                                                objectFit='fill'
                                                src='../Played_Fetch.png'
                                                alt='Pawsibilities' />
                                            {/* </Checkbox> */}
                                        </Stack>
                                    </CheckboxGroup>
                                </FormControl>



                                {/* TODO:
ADD PICTURES FOR THAT DAY */}



                                <FormControl id="other">
                                    <FormLabel fontSize={'2xl'} color={'black'} mb={'5'}>Other Observations</FormLabel>
                                    <Textarea placeholder='Enter observations here' />
                                </FormControl>

                                <Box alignSelf={'flex-end'} spacing={10}>
                                    <Button isLoading={loading} loadingText='Submitting' type={'submit'}
                                        marginTop={'5'}
                                        colorScheme={'teal'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'teal.200',
                                        }}>
                                        Submit
                                    </Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Stack>
            </form>
            {/* </Flex> */}
        </div>
    )
}

export default HealthLog
