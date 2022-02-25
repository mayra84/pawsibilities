import { Alert, AlertIcon, Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom'

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

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post('/api/v1/users/login', {
      email,
      password
    })
      .then(data => {
        setEmail('')
        setPassword('')
        setError('')
        setLoading(false)
        navigate('/')
        //redirect

      })
      .catch(error => {
        setLoading(false)
        setError(error.response)
      })

  }

  return (
    //ternary statement?? 
    <form onSubmit={handleSubmit}>
     
      {error && (

        <Alert status='error'>
          <AlertIcon />
          Error!&nbsp; {error.data.error}
        </Alert>
      )}

      <Flex boxShadow={'lg'} direction={'column'} align={'flex-end'} mx={'auto'} my={'5'} bg={'white'} width={400} p={'5'} borderRadius={'14'} border={'1px'} color={'brand.201'}>
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


  )
}

export default Login