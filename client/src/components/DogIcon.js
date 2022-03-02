import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Image } from '@chakra-ui/react'
import React from 'react'

function DogIcon(props) {
    return (
       
            <Box>
                <Image
                
                border={'2px'} color={'brand.201'}
                m={'0 auto'}
                mb={'6'}
                    cursor={'pointer'}
                    onClick={props.onClick}
                    boxShadow={'lg'}
                    // isActive={'true'}
                    alignSelf={'center'}
                    borderRadius={'75'}
                    boxSize='115'
                    objectFit='fill'
                    src={props.src}
                    alt='happy'
                />
                {props.isActive && (

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

export default DogIcon