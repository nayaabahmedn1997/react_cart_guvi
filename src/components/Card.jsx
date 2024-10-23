import React, { useEffect, useState } from 'react'

export const Card = ({ keyValue, cardInfo, cartInfo, setCartInfo}) => {
    const [cardCartStatus, setCardCartStatus] = useState("Add to Cart");
    const processCart=(e)=>{
        e.preventDefault();
        const currentProductInfo = {
            index: keyValue,
            productURL: cardInfo.imageURL,
            productName: cardInfo.productName,
        }
        //Checking if the current product is not in cart
        if(
           !(cartInfo.filter((cartItem)=>cartItem.index === keyValue).length)
        )
        {
            //Add the current item to the cart
            setCartInfo([...cartInfo,currentProductInfo]);
            //Change the status of the card to remove from cart
            setCardCartStatus("Remove from Cart");
        }
        else
        {
            //Change the status of the card to rAdd to Cart
            setCartInfo([...cartInfo.filter((cartItem)=>cartItem.index !==keyValue)]);
            setCardCartStatus("Add to Cart");
        }
    }

    //Check before card mounting if the current product is in the cart
    useEffect(()=>{
        //Checking if the current product is not in cart
        if(!(cartInfo.filter((cartItem)=>cartItem.index !== keyValue).length))
        {
            //Change the status of the card to Add to Cart
            setCardCartStatus("Add to Cart");
        }
        else
        {
            //Change the status of the card to remove from cart
            setCardCartStatus("Remove from Cart");
        }
    }, [])
    return (
        <>

            <div key={keyValue} className="col mb-5">
                <div className="card h-100">
                    {cardInfo.isOnSale?<div className="badge bg-dark text-white position-absolute sale" >Sale</div>:""}
                    

                    <img className="card-img-top" src={cardInfo.imageURL} alt={cardInfo.productName} />

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

                            <span className="text-muted text-decoration-line-through">{cardInfo.actualPrice?`$${cardInfo.actualPrice} `:""}</span>
                            ${cardInfo.salePrice}
                        </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                        <a 
                        className={`btn btn-outline-dark mt-auto 
                        ${(cardCartStatus==="Remove from Cart")?"btn-danger":""} `}
                        onClick={(e)=>processCart(e)}
                        >{cardCartStatus}</a></div>
                    </div>
                </div>
            </div>

        </>

    )
}
