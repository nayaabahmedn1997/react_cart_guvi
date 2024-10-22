import React from 'react'
import { Card } from './Card'

export const Content = ({data}) => {
    return (
        <div>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        
                        {
                            data.map((cardData, index)=>{
                                return (
                                    <Card  cardInfo={cardData}/>
                                )
                            })
}
                    </div>
                </div>
            </section>
        </div>
    )
}
