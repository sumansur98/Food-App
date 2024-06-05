import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const nav = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('authToken');

        nav('/')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-success navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">
                        FOOD
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            {
                                localStorage.getItem('authToken') &&
                                <li className="nav-item">
                                    <Link className="nav-link active fs-5" aria-current="page" to="/">
                                        My Orders
                                    </Link>
                                </li>
                            }
                        </ul>

                        {
                            (!localStorage.getItem("authToken")) ? (
                                <div className='d-flex'>
                                    <Link className="btn bg-white text-success mx-1" to="/login">
                                        Login
                                    </Link>
                                    <Link className="btn bg-white text-success mx-1" to="/createuser">
                                        Sign Up
                                    </Link>
                                </div>

                            ) : (
                                <div className='d-flex'>
                                    <div className="btn bg-white text-success mx-1" >
                                        My Cart
                                    </div>
                                    <div className="btn bg-white text-success mx-1" onClick={handleLogout}>
                                        Logout
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </nav>

        </>
    )
}
