import { useMutation } from '@apollo/client'
import React from 'react'
import { ADD_WEBSITE } from "../gqloperations/mutations"

export default function Profile() {
    const [addWebsite, {error, data, loading}] = useMutation(ADD_WEBSITE)


    const updateWebsite = (e) => {
        e.preventDefault()
        console.log("e", e?.target.value )
        addWebsite({
            variables:{
                website:
                {website:
                    e.target?.value
                }
            }
        })
    }
    return (
        <div className="container my-container">
            <div className="center-align">
                <img className="circle" style={{border:"2px solid",marginTop:"10px"}} src="https://robohash.org/ram.png?size=200x200" alt="pic" />
                <h5>Ramesh verma</h5>
                <h6>Email - abc@abc.com</h6>
            </div>
             <h3>Your quotes</h3>
            <blockquote>
                <h6>if it works dont touch it</h6>
            </blockquote>
            <blockquote>
                <h6>if it works dont touch it</h6>
            </blockquote>
            <input
                 type="text"
                 placeholder="Update Website"
                 name="website"
                 onBlur={updateWebsite}
            />
        </div>
    )
}
