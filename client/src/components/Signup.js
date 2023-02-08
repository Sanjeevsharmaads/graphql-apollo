import { useMutation } from '@apollo/client'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { CREATE_USER } from "../gqloperations/mutations"
export default function Signup() {
    const [formData,setFormData] = useState({})
    const [signupUser, {loading, error,data: signUpData}] = useMutation(CREATE_USER)
    
    const handleChange = (e)=>{
        setFormData({
         ...formData,
         [e.target.name]:e.target.value
        })
    
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        signupUser({
            variables:{
                userNew: formData
            }
        })
    }

    if (loading) return 'Signing Up...';
    if (error) return `SignUp error! ${error.message}`;

    if(signUpData){
        console.log("signUpData is", signUpData)
        window.alert("Successfully signed up!")
    }
    return (
        <div className="container my-container">
            <h5>Signup!!</h5>
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 placeholder="First Name"
                 name="firstName"
                 onChange={handleChange}
                 required
                 />
                <input
                 type="text"
                 placeholder="Last Name"
                 name="lastName"
                 onChange={handleChange}
                 required
                 />
                <input
                 type="email"
                 placeholder="email"
                 name="email"
                 onChange={handleChange}
                 required
                 />
                <input
                 type="password"
                 placeholder="password"
                 name="password"
                 onChange={handleChange}
                 required
                 />
                  <Link to="/login"><p>Already have an account ?</p></Link> 
                 <button className="btn #673ab7 deep-purple" type="submit">Submit</button>
            </form>
        </div>
    )
}
