import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./Home.css";
import axios from "axios";

import DeleteIcon from "@material-ui/icons/Delete";

const Home = () => {
    const [noteList, setNotes] = useState([]);
    const [patientList, setPatientList] = useState([])

    const callFn = () => {
        const token = localStorage.getItem("token");

        axios
            .get(`${process.env.REACT_APP_PHYSIOAPP_BACKEND}/notes`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                console.log(res);
                setNotes(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        callFn();
    }, []);

    useEffect(() => {
        callFn();
    }, [setNotes]);

    const getPatients = () => {
        const token = localStorage.getItem("token");

        axios
            .get(`${process.env.REACT_APP_PHYSIOAPP_BACKEND}/patients`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                console.log(res);
                setPatientList(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    useEffect(() => {
        getPatients();
    }, []);

    useEffect(() => {
        getPatients();
    }, [setPatientList]);


    return (
        <div className="Home">
            <div className="patientColumn">
             <h1 className="HomePatients">Patients List</h1>
            {!patientList ||
                (patientList.length === 0 && (
                    <h2 className="NoPatientsFound">No Patients Found</h2>
                ))}
            <div className="PatientList">
                {patientList && (
                    <div>
                        {" "}
                        <table className="patientsTable">
                            <thead>
                        <tr>
                                    <th>NHI</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Delete Patient</th>
                                    <th>Create Note</th>
                                    <th>View Notes</th>
                                </tr>
                                </thead>
                                <tbody>
                        {patientList.map((patient) => (
                            <tr className="Patient">
                               <td>
                                {patient.patientId}
                                </td>
                                <td>
                                {patient.firstname} 
                                </td>
                                <td>
                                {patient.lastname}
                                </td>
                                <td><Link to={`/deletepatient/${patient._id}`}>
                                    <span className="DelIcon">
                                        <DeleteIcon />
                                    </span>
                                
                                </Link>
                                </td>
                                <td>
                                    <Link to={`/createassessment/${patient._id}`}>
                                        <div>
                                        <button className="AddBtn">+</button>
                                        </div>
                                </Link>
                                </td>
                                <td><Link to={`/getnote/${patient._id}/${patient.firstname}/${patient.lastname}`}>
                                
                                        <button className="GetNoteButton">View Notes</button>    
                                </Link>
                                </td>
                                </tr>
                    
                        ))}</tbody></table>{" "}
                    </div>
                )}
            </div>
            </div>
           
            
        </div>
    );
};

export default Home;
