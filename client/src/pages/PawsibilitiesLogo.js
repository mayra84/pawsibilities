import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

function PawsibilitiesLogo() {
  return (
    <div>
        <Flex justify={'center'} alignItems={'center'} my={'500'}  p={300} bgColor={'rgba(255 255 255 /60%)'}
                backdropFilter={'blur(2px)'}>
        <Image
                   cursor={'pointer'}
                        boxShadow={'lg'}
                        // onClick={e => { navigate('/') }}
                        // isActive={'true'}

                        alignSelf={'left'}
                        borderRadius={'75'}
                        boxSize='125'
                        objectFit='fill'
                        src='../Possible_Pawsibilities_Logo_2.png'
                        alt='Pawsibilities' />
                        </Flex>
    </div>
  )
}

export default PawsibilitiesLogo