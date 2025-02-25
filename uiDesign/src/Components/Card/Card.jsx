import React from 'react'
import "./Card.css"


const Card = ({cardData}) => {
  return (
    cardData.map((item,index)=>{
        return(<>
        <div className='card' key={item?.id}>
            <div className='card-img'>
                <img src={item?.src}></img>
            </div>
            <div className='card-content'>
                <h3>{item?.title}</h3>
                <p>{item?.description}</p>
            </div>
        </div>
        
        </>)
    })
  )
}

export default Card