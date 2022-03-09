
import { Box, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';
import SmoothList from 'react-smooth-list';
import store from 'src/redux/store';
import MarkerCard from './MarkerCard';


export default function Marker(props) {
    const { park } = props
    const [show, setShow] = useState(false);
    const _onClick = () => setShow(!show)
    const AnyReactComponent = ({ image }) =><img height = {'30px'} width = {'30px'} src={image} alt="crime doesn't pay" />;
    return (
     <> 
     <div onClick={_onClick}>
        <AnyReactComponent
        image={park.icon}
      />
   
      </div> 
      {show &&
   
   <Box w={'200px'} h={'200px'} zIndex = {10} position ={'relative'}>
        <MarkerCard  key={park.reference} park={park} />
   </Box>
  
  }
      </>
    )
}