import React from 'react'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import './Home.css';

const Home = (props) => {

  const history = useNavigate();

  const handleClick = ()=>{
    signOut(auth).then(val=>{
      console.log(val,"val");
      history('/');
    })
  }
  return (
    <div>
      <h1 className='twin'>Welcome to Twin-Learn</h1>
      <img src="./twinlearn.png" alt="" />
      <button onClick={handleClick}>Sign-Out</button>
    </div>
  )
}

export default Home;
