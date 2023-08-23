import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Register = ()=>{

    const [user,setuser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    });

    const handleChange = (e)=>{
        const {name , value} = e.target
        setuser({
            ...user,
            [name]:value
        })
    }

    const handleRegister = ()=>{ 
        const {name,email,password,reEnterPassword} =user
        if(name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register",user)
            // alert("posted");
            .then(res => alert(res.data.message))
        }
        else{
            alert("not posted");
        }
    }

    return(
        <div>
             <h1>Register</h1>
             {console.log("user,",user)}
             <input type='text' name='name' value={user.name} placeholder='Enter Your name' onChange={handleChange} />
            <input type='text' name='email' value={user.email} placeholder='Enter your email' onChange={handleChange}/>
            <input type='password' name='password' value={user.password} placeholder='Enter your password' onChange={handleChange}/>
            <input type='password' name='reEnterPassword' value={user.reEnterPassword} placeholder='Re-Enter Your password' onChange={handleChange}/>
            <div className='cursor-pointer' onClick={handleRegister} >Register</div>
            <div className='cursor-pointer'><Link to="/login">Login</Link></div>
        </div>
    );
}
export default Register;