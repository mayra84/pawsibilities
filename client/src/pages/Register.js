import { Box, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

function Register() {
  return (
    <div>
      
  <Box boxShadow={'lg'} bg={'white'} width={400} m={'0 auto'} marginTop={'10'} p={'10'} borderRadius={'14'} border={'1px'} color={'brand.201'}>
    <FormControl color={'black'}>
      <FormLabel>Email</FormLabel>
      <Input outline={'none'}/>
      <FormErrorMessage>Error message</FormErrorMessage>
    </FormControl>
    <FormControl color={'black'}>
      <FormLabel>Password</FormLabel>
      <Input />
      <FormErrorMessage>Error message</FormErrorMessage>
    </FormControl>
  </Box>

    </div>
  )
}

export default Register