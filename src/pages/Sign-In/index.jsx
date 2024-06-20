import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"



export default function SignInForm()
{
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit()
    {
        const requestURL = "http://localhost:8888/api/user/login"
        const response = await axios.post(requestURL, formData)
        const user = response.data
        console.log(user);
    }



    return (
        <>
            <div>
                <label>Email Address</label>
                <input type="text" placeholder="Enter email" onChange={handleChange} name="email"/>
                <label>Password</label>
                <input type="text" placeholder="Password" onChange={handleChange} name="password" />
                <button onClick={handleSubmit}>Submit</button>
            </div>

            <Link to="/signup">Not a member? Join the Setlist Seeker Family </Link>
        </>
    )
}