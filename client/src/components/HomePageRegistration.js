import { Alert, AlertIcon, Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { Link, Link as RouterLink } from 'react-router-dom'
import { Center, Divider } from '@chakra-ui/react'
// import Register from 'src/pages/Register'
import HomePageHero from './HomePageHero'
import SmoothList from 'react-smooth-list';

function HomePageRegistration() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [loading, setLoading] = useState(false)
    const [complete, setComplete] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.post('/api/v1/users/register', {
            email,
            password,
            zipcode
        })
            .then(data => {
                setEmail('')
                setPassword('')
                setZipcode('')
                setLoading(false)
                setError('')
                setComplete(true)

            })
            .catch(error => {
                setLoading(false)
                setError(error.response)
            })

    }


    return (
        //ternary statement?? 
        <div>
            <form onSubmit={handleSubmit} >
                {complete && (
                    <SmoothList transitionDuration={600}>
                        <Alert maxW={'60%'} borderRadius={'8'} mx={'auto'} status='success'>
                            <AlertIcon />
                            {/* Registration successful!&nbsp;<Link style={{ textDecoration: 'underline' }} to="/login">Click Here to log in.</Link> */}
                            Registration successful!&nbsp; <Link style={{ textDecoration: 'underline' }} as={RouterLink} to="/login"> Click here to log in. </Link>
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
                <SmoothList transitionDuration={1400}>
                    {/* <Flex justifyContent={'center'} alignItems={'center'} alignContent={'center'} m={'0 auto'}> */}
                        {/* <Center p={'10'} height='60vh'> */}
                            <Box display={'flex'} flexDirection={'column'} justifyContent={'space-around'}>
                            <Stack direction={{ base: 'column', lg: 'row' }} m={'5%'} justifyContent={'space-around'} alignItems={'center'}>
                            <HomePageHero />

                            <Divider borderColor={'transparent'} orientation='vertical' mx={'10%'} />

                            <Flex
                                boxShadow={'lg'}
                                bgColor={'rgba(255 255 255 /70%)'}
                                backdropFilter={'blur(2px)'}

                                direction={'column'} 
                                align={'flex-end'} 
                                // mx={'auto'} my={'5'} 
                                p={{base:'4', md: '8', lg: '8', xl: '8'}} 
                                borderRadius={'10'} 
                                w={'600px'} maxW={'100%'}>
                                <FormControl color={'black'} mb={'5'}>
                                    <FormLabel>Email</FormLabel>
                                    <Input bg={'white'} required value={email} onChange={(e) => setEmail(e.target.value)} type={'email'} />
                                    <FormErrorMessage>Error message</FormErrorMessage>
                                </FormControl>
                                <FormControl color={'black'} mb={'5'}>
                                    <FormLabel>Password</FormLabel>
                                    <Input bg={'white'} required type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <FormErrorMessage>Error message</FormErrorMessage>
                                </FormControl>
                                <FormControl color={'black'} mb={'5'}>
                                    <FormLabel>Zipcode</FormLabel>
                                    <Input bg={'white'} required value={zipcode} onChange={(e) => setZipcode(e.target.value)} type={'zipcode'} />
                                    <FormErrorMessage>Error message</FormErrorMessage>
                                </FormControl>
                                <Button isLoading={loading} color={'teal'} loadingText='Submitting' type={'submit'}>Sign Up</Button>
                            </Flex>
                            </Stack>
                            </Box>
                        {/* </Center> */}
                    {/* </Flex> */}
                </SmoothList>
            </form>
        </div>

    )
}

//         {/* <Flex justifyContent={'center'} alignItems={'center'} alignContent={'center'} m={'0 auto'}>
//     <Center p={'10'} height='60vh'>
//       <HomePageHero />

//       <Divider borderColor={'transparent'} orientation='vertical' mx={'15%'} />

//       <Register />
//     </Center>
//   </Flex> */}


export default HomePageRegistration