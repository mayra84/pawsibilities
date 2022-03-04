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
import SmoothList from 'react-smooth-list';

function HealthLog(props) {

    //HOW TO ADD MULTIPLE THINGS TO STATE? SPREAD? SELECTING MULTIPLE THINGS
    //VALUE? ONCHANGE?

    const [mood, setMood] = useState([])
    const [physical, setPhysical] = useState([])
    const [activity, setActivity] = useState([])
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
                //check this??????
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
            }))
        } else {
            setMood([...mood, value])
        }
    }

    const togglePhysical = (value) => {
        setPhysical([...physical, value])

        if (physical.includes(value)) {
            setPhysical(physical.filter((p) => {
                return p !== value
            }))
        } else {
            setPhysical([...physical, value])
        }
    }

    const toggleActivity = (value) => {
        setActivity([...activity, value])

        if (activity.includes(value)) {
            setActivity(activity.filter((a) => {
                return a !== value
            }))
        } else {
            setActivity([...activity, value])
        }
    }

    return (
        <div>

            {complete && (
                <SmoothList transitionDuration={600}>
                    <Alert maxW={'60%'} borderRadius={'8'} mx={'auto'} status='success'>
                        <AlertIcon />
                        Successfully logged!
                    </Alert>
                </SmoothList>
            )}

            {error && (
                <SmoothList transitionDuration={600}>
                    <Alert maxW={'60%'} borderRadius={'8'} mx={'auto'} status='error'>
                        <AlertIcon />
                        Error!&nbsp; {error.data.error}
                    </Alert>
                </SmoothList>
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
                            p={12}>

                            <Stack spacing={2}>
                                <SmoothList transitionDuration={1200} delay={200}>

                                    {/* <DogDropDown /> */}


                                    <FormControl id="mood">
                                        <FormLabel fontSize={'2xl'} color={'black'}>Mood</FormLabel>
                                        <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                            <Stack mx={'8'} mt={'6'} mb={'10'} spacing={[1, 5]} direction={['column', 'row']}>

                                                <ImageButton onClick={() => { toggleMood('happy') }} src={'../Happy_3.png'} isActive={mood.includes('happy')} />

                                                <ImageButton onClick={() => { toggleMood('calm') }} src={'../Calm.png'} isActive={mood.includes('calm')} />

                                                <ImageButton onClick={() => { toggleMood('energetic') }} src={'../Energetic.png'} isActive={mood.includes('energetic')} />


                                                <ImageButton onClick={() => { toggleMood('sad') }} src={'../Sad.png'} isActive={mood.includes('sad')} />

                                                <ImageButton onClick={() => { toggleMood('anxious') }} src={'../Anxious.png'} isActive={mood.includes('anxious')} />


                                                <ImageButton onClick={() => { toggleMood('apathetic') }} src={'../Apathetic.png'} isActive={mood.includes('apathetic')} />

                                                <ImageButton onClick={() => { toggleMood('none') }} src={'../None_Paw.png'} isActive={mood.includes('none')} />

                                            </Stack>
                                        </CheckboxGroup>
                                    </FormControl>

                                    <FormControl id="activity">
                                        <FormLabel fontSize={'2xl'} color={'black'}>Activity</FormLabel>
                                        <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                            <Stack mx={'8'} mt={'6'} mb={'10'} spacing={[1, 5]} direction={['column', 'row']}>
                                                {/* when option clicked, ask to input distance/time */}

                                                <ImageButton onClick={() => { toggleActivity('walk') }} src={'../Walk.png'} isActive={activity.includes('walk')} />

                                                <ImageButton onClick={() => { toggleActivity('park') }} src={'../Park.png'} isActive={activity.includes('park')} />

                                                <ImageButton onClick={() => { toggleActivity('run') }} src={'../Run.png'} isActive={activity.includes('run')} />

                                                <ImageButton onClick={() => { toggleActivity('swim') }} src={'../Swim.png'} isActive={activity.includes('swim')} />

                                                <ImageButton onClick={() => { toggleActivity('playedFetch') }} src={'../Played_Fetch.png'} isActive={activity.includes('playedFetch')} />

                                                <ImageButton onClick={() => { toggleActivity('none') }} src={'../None_Ball.png'} isActive={activity.includes('none')} />

                                            </Stack>
                                        </CheckboxGroup>
                                    </FormControl>

                                    <FormControl id="physicalObservations">
                                        <FormLabel fontSize={'2xl'} color={'black'}>Physical Observations</FormLabel>
                                        <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                            <Stack mx={'8'} mt={'6'} mb={'10'} spacing={[1, 5]} direction={['column', 'row']}>

                                                <ImageButton onClick={() => { togglePhysical('limping') }} src={'../Limping.png'} isActive={physical.includes('limping')} />

                                                <ImageButton onClick={() => { togglePhysical('nausea') }} src={'../Nausea.png'} isActive={physical.includes('nausea')} />

                                                <ImageButton onClick={() => { togglePhysical('constipation') }} src={'../Constipation.png'} isActive={physical.includes('constipation')} />

                                                <ImageButton onClick={() => { togglePhysical('none') }} src={'../None_Bone.png'} isActive={physical.includes('none')} />

                                                {/* <Checkbox value='abnormalAppetite'>Abnormal Appetite</Checkbox> */}
                                                {/* <Checkbox value='irregular bowel movement'>Irregular Bowel Movement</Checkbox> */}
                                            </Stack>
                                        </CheckboxGroup>
                                    </FormControl>




                                    {/* TODO:

ADD PICTURES FOR THAT DAY */}




                                    <FormControl id="other">
                                        <FormLabel fontSize={'2xl'} color={'black'} mb={'5'}>Other Observations</FormLabel>
                                        <Textarea color={'black'} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder='Enter observations here' />
                                    </FormControl>
                                    <Stack>
                                        <Box alignSelf={'flex-end'} spacing={10}>
                                            <Button isLoading={loading} loadingText='Submitting' type={'submit'}
                                                alignSelf={'flex-end'}
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
                                </SmoothList>
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

