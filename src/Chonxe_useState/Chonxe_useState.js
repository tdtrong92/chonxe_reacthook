import React, { useState } from 'react'

export default function Chonxe_useState() {


    let [carColor, setcarColor] = useState({ src: "./img/car/products/black-car.jpg" })
    const chonMauXe = (mauXe) => {
        let srcUpdate = `./img/car/products/${mauXe}-car.jpg`;
        setcarColor(
            { ...carColor, src: srcUpdate }
        )
        console.log(mauXe)
    }

    return (
        <div className="container">
            <h1>Bài Tập Chọn Màu Xe Sử Dụng Hook</h1>
            <div className="row">
                <div className="col-6">

                    <img width="100%" src={carColor.src}></img>

                </div>

                <div className="col-6">
                    <button className="btn btn-light mx-4" onClick={() => {
                        chonMauXe("silver")
                    }}>Silver</button>

                    <button className="btn btn-dark mx-4" onClick={() => {
                        chonMauXe("black")
                    }}>Black</button>

                    <button className="btn btn-danger mx-4"
                        onClick={() => {
                            chonMauXe("red")
                        }}>Red</button>

                    <button className="btn btn-secondary mx-4"
                        onClick={() => {
                            chonMauXe("steel")
                        }}>Steel</button>

                </div>
            </div>
        </div>
    )
}
