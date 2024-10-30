// src/App.js
import './App.css';
import { useEffect, useState } from 'react';
import UserService from './services/UserService';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users when the component mounts
        UserService.getUsers()
            .then(response => setUsers(response.data))
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    return (
        <div className="App">
            <h1>User Dashboard</h1>
            <table className="user-table">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.username}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
