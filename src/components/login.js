import React, { useState } from 'react'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

const Login = ()=>{

    const [user,setuser] = useState({
        email:"",
        password:""
    });

    const handleChange =(e)=>{
        const {name,value} = e.target;
        setuser({
            ...user,
            [name]:value


        })
    }

    const handleLogin = ()=>{
        axios.post("http://localhost:9002/login",user)
        .then(res => {
            alert(res.data.message)
            // setloginuser(res.data.message)
            // Navigate("/")
        })
            
    }

    return(
        <div>
            <h1>login</h1>
            {console.log("user",user)}
            <input type='text' name='email' value={user.email} placeholder='Enter your email' onChange={handleChange}/>
            <input type='password' name='password' value={user.password} placeholder='Enter your password' onChange={handleChange}/>
            <div className='cursor-pointer' onClick={handleLogin}>Login</div>
            <div className='cursor-pointer'><Link to='/register'>Register</Link></div>
        </div>
    );
}
export default Login;