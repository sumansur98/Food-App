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
                        <img style={{'width':'900px','height':'700px'}} src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300x300/?momos" className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/05/red-sauce-pasta-recipe.jpg" className="d-block w-100" alt="..." />
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
