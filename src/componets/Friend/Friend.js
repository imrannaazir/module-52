import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = ({ friend: { id, name, username, email, address } }) => {
    console.log(name, username, email, address);
    const navigate = useNavigate()
    const showDetails = () => {
        const path = `/friend/${id}`
        navigate(path)

    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <h4>username: {username}</h4>
            <h5>Email: {email}</h5>
            <button onClick={showDetails}>Details:{id}</button>



        </div>
    );
};

export default Friend;