import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/util/fetchData";
import { db } from "../../services/firebaseConfig";
import Loader from 'react-loader-spinner';

export const TestComponent = () => {

    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [rotation, setRotation] = useState("Frontend");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData(setUsers, setLoading)}, [users]);

    return (
        <div className="grid">
            <div className="card">
                <h3>Add User</h3>
                <div>
                    name:<br />
                    <input type='text' value={name} data-key='name' className='user-input'
                        onChange={(e) => { setName(e.target.value) }} /><br />
                city:<br />
                    <input type='text' data-key='age' className='user-input'
                        onChange={(e) => { setCity(e.target.value) }} /><br />
                email:<br />
                    <input type='text' data-key='email' className='user-input'
                        onChange={(e) => { setEmail(e.target.value) }} /><br />
                rotation:<br />
                    <select name="rotations" defaultValue="Frontend" onChange={(e) => {
                        setRotation(e.target.value);
                    }}>
                        <option value="Frontend">Frontend Development</option>
                        <option value="Mobile">Mobile Development</option>
                        <option value="Backend">Backend Development</option>
                    </select><br />
                    <button type='button' onClick={() => {
                        db.collection('users').get()
                            .then(snapshot => {
                                snapshot.forEach(doc => {
                                    if (doc.data().email === email) {
                                        throw new Error("Already registered");
                                    };
                                });
                                db.collection('users')
                                    .add({
                                        name: name,
                                        rotation: rotation,
                                        city: city,
                                        email: email,
                                        date: new Date().toLocaleString()
                                    });
                            })
                            .catch(error =>
                                alert(error.message)
                            );
                    }}>Add User</button>
                </div>
            </div>

            <div className="card">
                <h3>Already Registered</h3>
                <ul style={{ listStyle: "none" }}>
                    {loading ? <Loader type="ThreeDots" color="blue" /> :
                        users.length > 0 ? users.map(user => {
                            return (
                                <li>
                                    <label style={{ marginRight: "10px" }}>{user.name}</label>
                                    <button type="button" onClick={() => {
                                        db.collection("users")
                                            .get()
                                            .then(snapshot => {
                                                snapshot.forEach(doc => {
                                                    if (doc.data().email === user.email) {
                                                        doc.ref.delete();
                                                    }
                                                })
                                            })
                                    }}>x</button>
                                </li>
                            )
                        }) : "empty"
                    }
                </ul>
            </div>
        </div>
    )
}