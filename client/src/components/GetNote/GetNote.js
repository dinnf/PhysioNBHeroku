import React, {useState, useEffect} from "react";
import '../CreateNote/CreateNote.css'
import { useParams } from "react-router";
import axios from "axios";
import bodyChart from "../CreateNote/bodychart.png"
import DeleteIcon from "@material-ui/icons/Delete";
import {Link} from "react-router-dom";

function GetNote() {
    const [PatientsNotes, setPatientsNotes] = useState([])
    const { id, firstname, lastname } = useParams();
    const token = localStorage.getItem("token");
    const getPatientNotes = () => {
        const token = localStorage.getItem("token");

        axios
            .get(`${process.env.REACT_APP_PHYSIOAPP_BACKEND}/notes/patient/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                console.log(res);
                setPatientsNotes(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        getPatientNotes();
    }, []);

    useEffect(() => {
        getPatientNotes();
    }, [setPatientsNotes]);
    
  return (
    <div className="FormContent">
        {PatientsNotes.map((PatientsNotesList) => { 
            console.log(PatientsNotesList.hpc)
            return (
                <>
            <div className="BigContainer">

            <div className="LeftColumn">
                <hr />
                <h1>{firstname} {lastname} {PatientsNotesList.createdAt.slice(8,10)}-{PatientsNotesList.createdAt.slice(5,7)}-{PatientsNotesList.createdAt.slice(0,4)}</h1>
            {PatientsNotesList.hpc && <div className="NoteForm">
        
        <h3 className="TextHead">History of Presenting Complaint</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.hpc}
        />
    </div>}
    {PatientsNotesList.symptoms && <div className="NoteForm">
        <h3 className="TextHead">Symptoms</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.symptoms}
        />
    </div>}
    {PatientsNotesList.pain && <div className="NoteForm">
        <h3 className="TextHead">Pain</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.pain}
            
        />
    </div>}
    {PatientsNotesList.nature && <div className="NoteForm">
        <h3 className="TextHead">Nature</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.nature}
            
        />
    </div>}
    {PatientsNotesList.severity && <div className="NoteForm">
        <h3 className="TextHead">Severity</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.severity}
        />
    </div>}
    {PatientsNotesList.irritability && <div className="NoteForm">
        <h3 className="TextHead">Irritability</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.irritability}    
        />
    </div>}
    {PatientsNotesList.aggravatingfactors && <div className="NoteForm">
        <h3 className="TextHead">Aggravating Factors</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.aggravatingfactors}
        />
    </div>}
    {PatientsNotesList.easingfactors && <div className="NoteForm">
        <h3 className="TextHead">Easing Factors</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.easingfactors}            
        />
    </div>}
    {PatientsNotesList.dailypattern && <div className="NoteForm">
        <h3 className="TextHead">Daily Pattern</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.dailypattern}
        />
    </div>}
    {PatientsNotesList.pmh && <div className="NoteForm">
        <h3 className="TextHead">Past Medical History</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.pmh}
        />
    </div>}
    </div>
    <div className="RightColumn">
    <img src={bodyChart} alt='bodychart' className="bodychart" />
    {PatientsNotesList.sochx &&<div className="NoteForm">
        <h3 className="TextHead">Social History</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.sochx}
        />
    </div>}
    {PatientsNotesList.work && <div className="NoteForm">
        <h3 className="TextHead">Work</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.work}
        />
    </div>}
    {PatientsNotesList.stress && <div className="NoteForm">
        <h3 className="TextHead">Stress</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.stress}
        />
    </div>}
    {PatientsNotesList.hobbies && <div className="NoteForm">
        <h3 className="TextHead">Hobbies</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.hobbies}
        />
    </div>}
    {PatientsNotesList.exercise && <div className="NoteForm">
        <h3 className="TextHead">Exercise</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.exercise}
        />
    </div>}
    {PatientsNotesList.redflags && <div className="NoteForm">
        <h3 className="TextHead">Red Flags</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.redflags}
        />
    </div>}
    {PatientsNotesList.yellowflags && <div className="NoteForm">
        <h3 className="TextHead">Yellow Flags</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.yellowflags}  
        />
    </div>}
    {PatientsNotesList.investigations && <div className="NoteForm">
        <h3 className="TextHead">Investigations</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.investigations}   
        />
    </div>}
    {PatientsNotesList.treatment && <div className="NoteForm">
        <h3 className="TextHead">Treatment</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.treatment}
        />
    </div>}
    {PatientsNotesList.specialquestions && <div className="NoteForm">
        <h3 className="TextHead">Notes</h3>
        <textarea
            className="NoteText"
            value={PatientsNotesList.specialquestions}
        />
    </div>}
    </div>
    
</div>
<Link to={`/deletepatient`}><span className="DelIcon"><DeleteIcon /></span></Link>
</>) 

        })}     
</div>

)

}

export default GetNote