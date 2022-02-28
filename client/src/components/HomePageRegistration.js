import { Alert, AlertIcon, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { Link, Link as RouterLink } from 'react-router-dom'
import { Center, Divider } from '@chakra-ui/react'
// import Register from 'src/pages/Register'
import HomePageHero from './HomePageHero'

function HomePageRegistration() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [complete, setComplete] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.post('/api/v1/users/register', {
            email,
            password
        })
            .then(data => {
                setEmail('')
                setPassword('')
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
                    <Alert maxW={'60%'} borderRadius={'8'} mx={'auto'} status='success'>
                        <AlertIcon />
                        Registration successful!&nbsp; <Link as={RouterLink} to="/login"> Click here to log in. </Link>
                    </Alert>
                )}

                {error && (

                    <Alert maxW={'60%'} borderRadius={'8'} mx={'auto'} status='error'>
                        <AlertIcon />
                        Error!&nbsp; {error.data.error}
                    </Alert>
                )}

                <Flex justifyContent={'center'} alignItems={'center'} alignContent={'center'} m={'0 auto'}>
                    <Center p={'10'} height='60vh'>
                        <HomePageHero />

                        <Divider borderColor={'transparent'} orientation='vertical' mx={'10%'} />

                        <Flex
                            boxShadow={'lg'}
                            bgColor={'rgba(255 255 255 /70%)'}
                            backdropFilter={'blur(2px)'}

                            direction={'column'} align={'flex-end'} mx={'auto'} my={'5'} width={'xl'} p={'8'} borderRadius={'10'} border={'2px'} color={'brand.201'}>
                            <FormControl color={'black'} mb={'5'}>
                                <FormLabel>Email</FormLabel>
                                <Input required value={email} onChange={(e) => setEmail(e.target.value)} type={'email'} />
                                <FormErrorMessage>Error message</FormErrorMessage>
                            </FormControl>
                            <FormControl color={'black'} mb={'5'}>
                                <FormLabel>Password</FormLabel>
                                <Input required type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                                <FormErrorMessage>Error message</FormErrorMessage>
                            </FormControl>
                            <Button isLoading={loading} loadingText='Submitting' type={'submit'}>Sign Up</Button>
                        </Flex>
                    </Center>
                </Flex>
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