import React, {useState, useEffect} from 'react'
import './GetPatient.css'
import { useParams } from "react-router";
import axios from "axios";

function GetPatient() {
    const [patient, setPatient] = useState([])
    const { id } = useParams();
    const token = localStorage.getItem("token");
    const findPatient = () => {
        const token = localStorage.getItem("token");

        axios
            .get(`${process.env.REACT_APP_PHYSIOAPP_BACKEND}/patients/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setPatient(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        findPatient();
    }, []);

    useEffect(() => {
        findPatient();
    }, [setPatient]);
  return (
    <div className="patientPage">
        <h1 className="patientDetails">Patient Details</h1>
        <table className="patientTable1">
            <tbody>
            <tr>
                <td>NHI</td>
                <td>{patient.patientId}</td>
            </tr>
            <tr>
                <td>First Name</td>
                <td>{patient.firstname}</td>
            </tr>
            <tr>
                <td>Last Name</td>
                <td>{patient.lastname}</td>
            </tr>
            <tr>
                <td>Date of Birth</td>
                <td>{patient.dateofbirth}</td>
            </tr>
            <tr>    
                <td>Email</td>
                <td>{patient.email}</td>
            </tr>
            <tr>
                <td>Telephone</td>
                <td>{patient.tel}</td>
                </tr>
            <tr>
                <td>Address</td>
                <td>{patient.address}</td>
            </tr>
            </tbody>
        </table></div>
  )
}

export default GetPatient