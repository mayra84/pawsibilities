import React from 'react'
import { useSelector } from 'react-redux'
import Carousel from '../components/Carousel'
import Login from './Login'
import Register from './Register'
// import Features from '../Features'

function Home() {
    const currentUser = useSelector(state => state.user.currentUser)

    //display login false, click on link -> true

  return (
    <div>
    {/* <div>Register to discover the Pawsibilities.</div> */}
    {/* <Features /> */}
    <Carousel />
Sign up to discover the Pawsibilities
    <Register />
    {/* <Login /> */}
    
    </div>
  )
}

export default Home
