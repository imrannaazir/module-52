import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink';

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
        console.log(posts);
    }, [])
    return (
        <div className='posts'>
            <h1>Ever posts are here.{posts.length}</h1>
            {
                posts.map(post => <li> <Link to={`/posts/${post.id}`}>{post.id}</Link></li>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;