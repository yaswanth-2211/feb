import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postSlice';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'
import readMore from './images/readmore.png'
import './HomePage.css'
import Navbar from './Navbar';
import home from './images/home.png'

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.post);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <div id='home'>
      <Navbar image={home}/>
      <h1>Social Media For Travellers</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error fetching data</p>}
      {status === 'succeeded' && (
        <div id='posts-container'>
          {posts.map((post) => (
              <div key={post.id} id='post'>
                <img src={logo} alt='logo' id='image'/>
                <section id='description'>
                  <section id='title-body'>
                    <p id='title'>{post.title}</p>
                    <p id='body'>{post.body}</p>
                  </section>
                  <Link to={`/item/${post.id}`}>
                    <img src={readMore} alt='read-more' id='read-more'/>
                  </Link>
                </section>
              </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
