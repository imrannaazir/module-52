import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({ friend: { id, name, username, email, address } }) => {

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
            <Link to={'/friend/' + id}>Show Details</Link>
            <button onClick={showDetails}>Details:{id}</button>



        </div>
    );
};

export default Friend;