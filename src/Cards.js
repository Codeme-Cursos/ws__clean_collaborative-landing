import React from 'react'
import Image1 from './images/Banner1.png'
import Image2 from './images/Banner2.png'
import Image3 from './images/Banner3.png'
import Image4 from './images/Banner4.png'

const Cards = () => {
    return (
        <div className="card-secction">
            <div className="card m-2" style={{width: "18rem"}}>
                <img src={Image1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title 1</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                    </div>
            </div>

            <div className="card m-2" style={{width: "18rem"}}>
                <img src={Image2} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title 2</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                    </div>
            </div>

            <div className="card m-2" style={{width: "18rem"}}>
                <img src={Image3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title 3</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                    </div>
            </div>

            <div className="card m-2" style={{width: "18rem"}}>
                <img src={Image4} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title 4</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                    </div>
            </div>
        </div>
    )
}

export default Cards
