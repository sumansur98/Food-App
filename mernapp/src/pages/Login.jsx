import React, {useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();

  const [credentials, setcredentials] = useState({
    email: '',
    password: '',
  })

  const handleOnChange = (e) => {
    setcredentials({ ...credentials, [e.target.id]: e.target.value })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log('submit clicke with data', credentials);
    const response = await fetch('http://localhost:3030/api/loginuser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials),
    })

    const res = await response.json();

    console.log(res);
    if(res.success){
      console.log('redirect');
      localStorage.setItem("authToken", res.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }else{
      alert('wrong');
    }
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleOnSubmit}>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to='/createuser'>
            <button className="btn btn-success">
              I am new
            </button>
          </Link>
        </form>

      </div>
    </>
  )
}
