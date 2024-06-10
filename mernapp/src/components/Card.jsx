import React from 'react'

export default function Card(props) {

    let priceOptions = Object.keys(props.foodOptions[0]);
    

    const handleAddCart = ()=>{

    }

    return (
        <>
            <div className="card" style={{ width: "300px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">
                        {props.foodItem.desc}
                    </p>
                    <div className="container">
                        <select name="" id="">
                            {
                                [...Array(6)].map((e, i) => {
                                    return (
                                        <option value="i+1" key={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>
                        <select name="" id="">
                            {
                                priceOptions.map(opt => {
                                    return <option key={opt} value={opt}>{opt}</option>
                                })
                            }
                        </select>
                        <span>Total price</span>
                    <hr />
                    <button className='btn btn-success justify-center ms-2' onClick={handleAddCart}>Add to Cart</button>
                    </div>
                </div>
            </div>

        </>
    )
}
