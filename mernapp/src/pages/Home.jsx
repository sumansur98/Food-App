import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {

  const [foodCategory, setfoodCategory] = useState([])
  const [foodItem, setfoodItem] = useState([])
  const fetchData = async () => {
    const res = await fetch('http://localhost:3030/api/foodData', {
      method: "POST",
    })

    const result = await res.json();
    console.log(result);
    setfoodItem(result[0]);
    setfoodCategory(result[1]);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const [search, setsearch] = useState('')



  return (
    <>
      <div><Navbar /></div>
      <div>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-caption" style={{ 'zIndex': 10 }}>
            <form className="d-flex" role="search">
              <input className="form-control me-2" value={search} onChange={(e)=>{setsearch(e.target.value)}} type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img style={{ 'width': '900px', 'height': '700px' }} src="https://source.unsplash.com/random/300x300/?burger" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img style={{ 'width': '900px', 'height': '700px' }} src="https://source.unsplash.com/random/300x300/?pasta" className="d-block w-100" alt="..." />

            </div>
            <div className="carousel-item">
              <img style={{ 'width': '900px', 'height': '700px' }} src="https://source.unsplash.com/random/300x300/?momos" className="d-block w-100" alt="..." />
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
      </div>
      <div className='container'>
        {
          (foodCategory.length != 0) ? (
            foodCategory.map((cat) => {
              return (
                <>
                  <div className="row mb-3">
                    <div className='fs-3 m-3'>{cat.CategoryName}</div>
                    <hr />

                    {
                      foodItem.filter(food => food.CategoryName === cat.CategoryName && food.name.toLowerCase().includes(search.toLowerCase())).map(food => {
                        return (
                          <div key={food._id} className='col-12 col-md-6 col-lg-3'>
                            <Card foodName={food.name}
                              foodImg={food.img}
                              foodOptions={food.options}
                              foodDesc={food.description} />
                          </div>
                        )
                      })
                    }
                  </div>
                </>
              );
            })
          ) : (<div>No Category</div>)
        }
      </div>
      <div><Footer /></div>

    </>
  )
}
