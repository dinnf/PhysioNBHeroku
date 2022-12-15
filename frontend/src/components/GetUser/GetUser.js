import React, {useState, useEffect} from 'react'
import './GetUser.css'
import axios from "axios";

function GetUser() {
    const [user, setUser] = useState([])
    const token = localStorage.getItem("token");
    const findUser = () => {
        const token = localStorage.getItem("token");

        axios
            .get(`${process.env.REACT_APP_PHYSIOAPP_BACKEND}/users/me`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        findUser();
    }, []);

    useEffect(() => {
        findUser();
    }, [setUser]);
  

  return (
    <div className="userPage">
        <h1 className="userDetails">Physiotherapist Details</h1>
        <table className="userTable1">
            <tbody>
            <tr>
                <td>Username</td>
                <td>{user.username}</td>
            </tr>
            <tr>
                <td>First Name</td>
                <td>{user.firstname}</td>
            </tr>
            <tr>
                <td>Last Name</td>
                <td>{user.lastname}</td>
            </tr>
            <tr>    
                <td>Email</td>
                <td>{user.email}</td>
            </tr>
            <tr>
                <td>Designation</td>
                <td>{user.designation}</td>
                </tr>
            </tbody>
        </table></div>
  )
}

export default GetUser