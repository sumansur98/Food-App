import React from 'react'

export default function Card() {
    return (
        <>
            <div className="card" style={{ width: "300px", 'maxHeight': '360px' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card&apos;s content.
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
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <span>Total price</span>

                    </div>
                </div>
            </div>

        </>
    )
}
