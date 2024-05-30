import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {

    const [credentials, setcredentials] = useState({
        name: "",
        email: '',
        password: '',
        location: ''
    })

    const handleOnChange = (e) => {
        setcredentials({ ...credentials, [e.target.id]: e.target.value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        console.log('submit clicke with data', credentials);
        const response = await fetch('http://localhost:3030/api/createuser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
        })

        const res = await response.json();
        console.log(res);
    }

    return (
        <div className='container'>
            <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id='name'
                        onChange={handleOnChange}
                        value={credentials.name}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        onChange={handleOnChange}
                        value={credentials.email}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={handleOnChange}
                        value={credentials.password}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                        Location
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        onChange={handleOnChange}
                        value={credentials.location}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <Link to='/login'>
                    <button className="btn btn-success">
                        Already a User
                    </button>
                </Link>
            </form>

        </div>
    )
}
