import './login.css';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const history = useNavigate();
  const [login, setLogin] = useState(false);

  const handleLogin = (e, type) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if(type === "SignUp") {
    createUserWithEmailAndPassword(auth, email, password).then(()=>{
      console.log("Account created successfully");
    history("/home");
    }).catch((err)=>{
      alert(err.code);
      setLogin(true);
    })
  }
    else{
      signInWithEmailAndPassword(auth, email, password).then(()=>{
        console.log("Account created successfully");
    history("/home");
      }).catch(err=>{
        alert(err.code);
      })
    
    }
  };

  return (
    <div>
      <div className="row">
        <div className={login===false?'activeColor':'pointer'} onClick={()=>setLogin(false)}>SignUp</div>
        <div className={login===true?'activeColor':'pointer'} onClick={()=>setLogin(true)}>login</div>
      </div>
      <form onSubmit={(e) => handleLogin(e , login?"login":"SignUp")}>
        <label>Email:</label>
        <input type="email" name="email" placeholder="Email" /> <br />
        <label>Password:</label>
        <input type="password" name="password" placeholder="Password" /> <br /> <br />
        <button type="submit">{login?"login":"SignUp"}</button>
      </form>
    </div>
  );
};

export default Login;
