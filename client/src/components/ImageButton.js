import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Image } from '@chakra-ui/react'
import React from 'react'

function ImageButton(props) {

  return (

    <Box position={'relative'}>
    <Image
    cursor={'pointer'}
    onClick={props.onClick}
    boxShadow={'lg'}
    // isActive={'true'}
    alignSelf={'left'}
    borderRadius={'75'}
    boxSize='115'
    objectFit='fill'
    src={props.src}
    alt='happy'
    />
    { props.isActive && (

    <CheckCircleIcon
    boxSize={'8'}
    borderRadius={'50%'}
    bgColor={'white'}

    pos={'absolute'}
        bottom={0}
        right={0}
    ></CheckCircleIcon>
    )}    
    </Box>
  )
}

export default ImageButton
