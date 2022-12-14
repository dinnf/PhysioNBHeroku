import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import CreateNote from "../components/CreateNote/CreateNote";
import Footer from "../components/Footer/Footer";
//import MarkableImage from "../components/BodyChart/BodyChart"

function CreateNotePage() {
  return (
    <div><Navbar />
    <CreateNote />
    <Footer /></div>
  )
}

export default CreateNotePage