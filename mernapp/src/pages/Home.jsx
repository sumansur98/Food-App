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



  return (
    <>
      <div><Navbar /></div>
      <div>
        <Carousel></Carousel>
      </div>
      <div className='container'>
        {
          (foodCategory.length != 0) ? (
            foodCategory.map((cat) => {
              return <div>{cat.CategoryName}</div>
            })
          ) : (<div>No Category</div>)
        }
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div><Footer /></div>

    </>
  )
}
