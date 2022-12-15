import React from 'react'
import GetPatient from '../components/GetPatient/GetPatient'
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

function GetPatientPage() {
  return (
    <div>
        <Navbar />
        <GetPatient />
        <Footer />
    </div>
  )
}

export default GetPatientPage