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
import FileUpload from './FileUpload';

function HealthLog(props) {

    //HOW TO ADD MULTIPLE THINGS TO STATE? SPREAD? SELECTING MULTIPLE THINGS
    //VALUE? ONCHANGE?


    const { isOpen, onOpen, onClose } = useDisclosure()

    const [mood, setMood] = useState([])
    const [physical, setPhysical] = useState([])
    const [activity, setActivity] = useState([])
    const [notes, setNotes] = useState('')
    const [image, setImage] = useState([])

    const [complete, setComplete] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // onclose()
        setLoading(true)

        const formData = new FormData()

        formData.append('mood', mood)
        formData.append('physical', physical)
        formData.append('activity', activity)
        formData.append('notes', notes)
        formData.append('image', image[0])

        axios.post(`/api/v1/health/log/${props.dog.id}`, formData)
            // {
            //     mood,
            //     physical,
            //     activity,
            //     notes
            // }
            // )
            .then(data => {
                setMood([])
                //check this??????
                setPhysical('')
                setActivity('')
                setNotes('')
                setLoading(false)
                setError('')
                setComplete(true)
                props.onSuccess()
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
                <Stack pb={8} >
                    <Stack align={'center'}>
                        <Box
                        p={5}
                        w={'1000px'}
                        maxW={'95%'}
                        className='box'
                            boxShadow={'lg'}
                            bgColor={'rgba(255 255 255 /90%)'}
                            backdropFilter={'blur(2px)'}
                            borderRadius={'10'} border={'2px'} color={'black'}
                            rounded={'lg'}
                            // p={12}
                            // p={{base: 2, lg: 12}}
                            fontSize={'2xl'}
                            // flexWrap={'wrap'}
                            flexDirection={{base: 'row', lg: 'row'}}
                            >

                            <Stack className='stack-smoothlist' >
                                <SmoothList transitionDuration={1200} delay={200}>

                                    {/* <DogDropDown /> */}

                                    <FormControl id="physicalObservations">
                                        <FormLabel fontSize={'2xl'} color={'black'} p={2} textAlign={'center'}>Physical Observations</FormLabel>
                                        <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                            <Stack mb={'10'} spacing={0} gap={'10px'} direction={{base: 'row'}} flexWrap={'wrap'} alignItems={{base: 'center'}} justify={{base: 'center'}} className='icon-stack'>

                                                <ImageButton onClick={() => { togglePhysical('limping') }} src={'../Limping.png'} isActive={physical.includes('limping')} />

                                                <ImageButton onClick={() => { togglePhysical('nausea') }} src={'../Nausea.png'} isActive={physical.includes('nausea')} />

                                                <ImageButton onClick={() => { togglePhysical('constipation') }} src={'../Constipation.png'} isActive={physical.includes('constipation')} />

                                                <ImageButton onClick={() => { togglePhysical('noAppetite') }} src={'../No_Appetite.png'} isActive={physical.includes('noAppetite')} />

                                                <ImageButton onClick={() => { togglePhysical('none') }} src={'../None_Bone.png'} isActive={physical.includes('none')} />

                                                {/* <Checkbox value='abnormalAppetite'>Abnormal Appetite</Checkbox> */}
                                                {/* <Checkbox value='irregular bowel movement'>Irregular Bowel Movement</Checkbox> */}
                                            </Stack>
                                        </CheckboxGroup>
                                    </FormControl>


                                    <FormControl id="activity">
                                        <FormLabel fontSize={'2xl'} color={'black'} p={2} textAlign={'center'}>Activity</FormLabel>
                                        <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                            <Stack mb={'10'} spacing={0} gap={'10px'} direction={{base: 'row'}} flexWrap={'wrap'} alignItems={{base: 'center'}} justify={{base: 'center'}} className='icon-stack'>
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


                                    <FormControl id="mood" >
                                        <FormLabel fontSize={'2xl'} color={'black'} p={2} textAlign={'center'}>Mood</FormLabel>
                                        <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                            <Stack mb={'10'} spacing={0} gap={'10px'} direction={{base: 'row'}} flexWrap={'wrap'} alignItems={{base: 'center'}} justify={{base: 'center'}} className='icon-stack'>

                                                <ImageButton onClick={() => { toggleMood('happy') }} src={'../Happy_3.png'} isActive={mood.includes('happy')} className='image-button-happy'/>

                                                <ImageButton onClick={() => { toggleMood('calm') }} src={'../Calm.png'} isActive={mood.includes('calm')} className='image-button-calm'/>

                                                <ImageButton onClick={() => { toggleMood('energetic') }} src={'../Energetic.png'} isActive={mood.includes('energetic')} />


                                                <ImageButton onClick={() => { toggleMood('sad') }} src={'../Sad.png'} isActive={mood.includes('sad')} />

                                                <ImageButton onClick={() => { toggleMood('anxious') }} src={'../Anxious.png'} isActive={mood.includes('anxious')} />


                                                <ImageButton onClick={() => { toggleMood('apathetic') }} src={'../Apathetic.png'} isActive={mood.includes('apathetic')} />

                                                <ImageButton onClick={() => { toggleMood('none') }} src={'../None_Paw.png'} isActive={mood.includes('none')} />

                                            </Stack>
                                        </CheckboxGroup>
                                    </FormControl>



                                    {/* TODO:

ADD PICTURES FOR THAT DAY */}




                                    <FormControl id="other">
                                        <FormLabel fontSize={'2xl'} color={'black'} mb={'5'} p={2} textAlign={'center'}>Other Observations</FormLabel>
                                        <Textarea mb={'10'} color={'black'} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder='Enter observations here' />
                                    </FormControl>
                                    <FormControl isRequired={false}>
                                        {/* HOW TO ALTER STYLE OF THIS COMPONENT */}
                                        <FileUpload value={image} onChange={((e) => { setImage(e.target.files) })}>Optional Image</FileUpload>
                                    </FormControl>
                                    <Stack>
                                        <Box alignSelf={'flex-end'} spacing={10}>
                                            <Button isLoading={loading} loadingText='Submitting' type={'submit'}
                                                fontSize={'sm'}
                                                rounded={'full'}
                                                alignSelf={'flex-end'}
                                                marginTop={'5'}
                                                colorScheme={'teal'}
                                                color={'white'}
                                                bgColor={'teal.500'}
                                                _hover={{
                                                    bg: 'teal.300',
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

