import React from 'react'
import GetUser from '../components/GetUser/GetUser'
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

function GetUserDetails() {
  return (
    <div>
        <Navbar />
        <GetUser />
        <Footer />
    </div>
)
}

export default GetUserDetails