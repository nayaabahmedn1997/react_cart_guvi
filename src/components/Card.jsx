import React from 'react'

export const Card = ({ cardInfo }) => {
    return (
        <>

            <div className="col mb-5">
                <div className="card h-100">
                    {cardInfo.isOnSale?<div className="badge bg-dark text-white position-absolute sale" >Sale</div>:""}
                    

                    <img className="card-img-top" src={cardInfo.imageURL} alt="..." />

                    <div className="card-body p-4">
                        <div className="text-center">

                            <h5 className="fw-bolder">{cardInfo.productName}</h5>

                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                            </div>

                            <span className="text-muted text-decoration-line-through">${cardInfo.actualPrice?cardInfo.actualPrice:""}</span>
                            ${cardInfo.salePrice}
                        </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                    </div>
                </div>
            </div>

        </>

    )
}
