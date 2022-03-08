
import React from 'react';


export default function Marker(props) {
    const { park, coor } = props
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    return (
        <AnyReactComponent
        lat={coor.lat}
        lng={coor.lng}
        text={park.name}
      /> 

    )
}