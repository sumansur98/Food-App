import React from 'react'

export default function Card(props) {

    let priceOptions = Object.keys(props.foodOptions[0]);

    return (
        <>
            <div className="card" style={{ width: "300px", 'maxHeight': '360px' }}>
                <img src={props.foodImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.foodName}</h5>
                    <p className="card-text">
                        {props.foodDesc}
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

                    </div>
                </div>
            </div>

        </>
    )
}
