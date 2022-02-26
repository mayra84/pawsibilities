import { Alert, AlertIcon, Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom'
import { loggedIn } from '../redux/reducers/userReducer'
import Carousel from '../components/Carousel'


function Login() {
  //controlled inputs
  //handle form submissions
  //handle errors
  //do something on success

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post('/api/v1/users/login', {
      email,
      password
    })
      .then(response => {
        //???
        const user = response.data

        setEmail('')
        setPassword('')
        setError('')
        setLoading(false)
        //???
        dispatch(loggedIn(user))
        navigate('/')
        //redirect

      })
      .catch(error => {
        setLoading(false)
        setError(error.response)
      })

  }

  return (
    <>
    <Carousel />

    {/* //ternary statement??  */}
    
    <form onSubmit={handleSubmit}>

      {error && (

        <Alert status='error'>
          <AlertIcon />
          Error!&nbsp; {error.data.error}
        </Alert>
      )}

      <Flex
      boxShadow={'lg'}
      bgColor={'rgba(255 255 255 /70%)'}
      backdropFilter={'blur(2px)'}  

      direction={'column'} align={'flex-end'} mx={'auto'} my={'5'} width={400} p={'5'} borderRadius={'10'} border={'2px'} color={'brand.201'}>
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
        <Button isLoading={loading} loadingText='Submitting' type={'submit'}>Login</Button>
      </Flex>
    </form>
    </>


  )
}

export default Login