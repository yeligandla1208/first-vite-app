import React from "react"

import './card.css'



const Card =({index}) =>(
    <div className = "card">
        <h3>Card{index + 1}</h3>
        <p>This is cardd number {index  + 1}</p>
    </div>
)



export const CardList = ()=> {
    const cards = Array.from({length:30}, (_,index)=>index)
    return(
        <div className="card-List">
            {cards.map((index)=> (
                <card key={index} index={index}/>
            ))}

        </div>
    )
}