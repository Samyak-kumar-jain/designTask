import React from 'react'

import './Launch.css'
import Card from '../Card/Card'


const cardData = [
  {src:"https://th.bing.com/th/id/OIP.CIac5BAbYhrvBddLTcoNxAHaEW?rs=1&pid=ImgDetMain", title:"Use a ready-made CMS", description:"all the lorem lpsum generators on the internet tend to repeat predefine chunks as necessary",id:"1"
  },
  {src:"https://th.bing.com/th/id/OIP.CIac5BAbYhrvBddLTcoNxAHaEW?rs=1&pid=ImgDetMain", title:"Use a ready-made CMS", description:"all the lorem lpsum generators on the internet tend to repeat predefine chunks as necessary",id:"2"
  },
  {src:"https://th.bing.com/th/id/OIP.CIac5BAbYhrvBddLTcoNxAHaEW?rs=1&pid=ImgDetMain", title:"Use a ready-made CMS", description:"all the lorem lpsum generators on the internet tend to repeat predefine chunks as necessary",id:"3"
  }
]

const Launch = () => {
  return (
    <>
    <div className='mid-div'>
        <p className='sm-heading'>Launh & run</p>

        <h1>Get started fast with no code to write, develop with ease.</h1>

        <p className="description">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident dolorum nihil accusamus, fuga voluptatibus placeat rerum? A, nihil quod quia modi quas voluptates? Pariatur, fuga dolorem. At, deleniti, nostrum numquam laborum quidem tenetur tempore ipsum exercitationem, unde atque consequatur.
      </p>
      




    </div>
    <div className='cardDiv'>
      <Card cardData={cardData}></Card>
      

    </div>

    
    </>
  )
}

export default Launch