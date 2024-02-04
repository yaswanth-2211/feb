import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPosts } from './postSlice';
import logo from './images/logo.png'
import './DetailPage.css'
import Navbar from './Navbar';
import detail from './images/detail.png'

const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { posts, status } = useSelector((state) => state.post);
  const post = posts.find((post) => post.id === parseInt(id));
  const [isDetail,setDetail] = useState(true)
  const [isUserInfo, setUserInfo] = useState(false)

  const handleDetail = () => {
    setDetail(prev=> !prev)
    setUserInfo(prev=> !prev)
  }

  const handleUser = () => {
    setDetail(prev=> !prev)
    setUserInfo(prev=> !prev)
  }

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <div id='detail'>
      <Navbar image={detail}/>
      <h1>Post Number {post.id}</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error fetching data</p>}
      {status === 'succeeded' && post && (
        <div id='container'>
          <img src={logo} alt='logo'/>
          <section id='matter'>
            <section id='chip-holder'>
              <span className={isDetail?'selected-chip':'chip'} onClick={handleDetail}>Detail</span>
              <span className={isUserInfo?'selected-chip':'chip'} onClick={handleUser}>User Info</span>
            </section>
            <p id='message'>
              {isDetail ? (post.body) : (`Post Was Posted By ${post.userId}.`)}
            </p>
          </section>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
