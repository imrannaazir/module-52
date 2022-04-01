import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams()
    const [friend, setFriend] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
        console.log(friend);
    }, [])
    return (
        <div>
            <h1>this is detail of bondhu.{friendId}</h1>
            <h1>Friend Name: {friend.name}</h1>
            <h3>His Email: {friend.email}</h3>
            <h3>Lives in: {friend.address?.city}</h3>
        </div>
    );
};

export default FriendDetail;