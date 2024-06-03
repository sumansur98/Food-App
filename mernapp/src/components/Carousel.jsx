import React from 'react'

export default function Carousel() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-caption" style={{'zIndex' : 10}}>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{'width':'900px','height':'700px'}} src="https://source.unsplash.com/random/300x300/?burger" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={{'width':'900px','height':'700px'}} src="https://source.unsplash.com/random/300x300/?pasta" className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img style={{'width':'900px','height':'700px'}} src="https://source.unsplash.com/random/300x300/?momos" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
