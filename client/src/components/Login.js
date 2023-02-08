import { useMutation } from '@apollo/client';
import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { SIGN_IN_USER} from "../gqloperations/mutations"

export default function Login() {
    const [formData,setFormData] = useState({})
    const navigate = useNavigate()
    const [signinUser, {error, data, loading}] = useMutation(SIGN_IN_USER)
    
    const handleChange = (e)=>{
        setFormData({
         ...formData,
         [e.target.name]:e.target.value
        })
    
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        signinUser({
            variables:{
                userSignin: formData
            }
        })
    }

    if (loading) return 'Login...';
    if (error) return `Login error! ${error.message}`;

    if(data){
        localStorage.setItem("token", data?.user?.token)
        navigate("/")
    }
    return (
        <div className="container my-container">
            <h5>Login!!</h5>
            <form onSubmit={handleSubmit}>
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
                  <Link to="/signup"><p>Dont have an account ?</p></Link> 
                 <button className="btn #673ab7 deep-purple" type="submit">Login</button>
            </form>
        </div>
    )
}
