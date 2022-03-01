// import { Select } from '@chakra-ui/react'
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// function DogDrop(props) {

//     const { dog } = props
//     const dogs = useSelector((state) => state.dogs)
//     const dispatch = useDispatch()

//     const handleAddDog = async () => {
//         const res = await fetch('/api/v1/dogs', {
//             method: 'POST',
//             body: JSON.stringify(dog),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })


//         return (
//             <div>DogDrop
//                 <Select placeholder='Select option'>
//                     {dogs.map(dog => {
//                         return <option key={dog.id} dog={dog} value={dog}>{dog}</option>
//                     })}

//                 </Select>
//             </div>
//         )
//     }
// }

//     export default DogDrop

