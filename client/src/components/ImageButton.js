import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Image } from '@chakra-ui/react'
import React from 'react'

function ImageButton(props) {
// console.log(props)
  return (

    <Box position={'relative'} >
    <Image
    // border={'2px'} color={'brand.201'}
    cursor={'pointer'}
    onClick={props.onClick}
    boxShadow={'lg'}
    // isActive={'true'}
    alignSelf={'left'}
    borderRadius={'75'}
    boxSize='115'
    objectFit='fill'
    src={props.src}
    //props.alt 
    alt='happy'
    />
    { props.isActive && (

    <CheckCircleIcon
    color={'teal.500'}
    boxSize={'8'}
    borderRadius={'50%'}
    bgColor={'white'}
    borderStyle={'solid'}
    borderColor={'turquoise'}

    pos={'absolute'}
        bottom={0}
        right={0}
    ></CheckCircleIcon>
    )}    
    </Box>
  )
}

export default ImageButton
