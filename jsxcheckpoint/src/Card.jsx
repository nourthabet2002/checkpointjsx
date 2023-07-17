import React from 'react'

const Card = ({el}) => {
  return (
    <div className='card'>
      <h1>{el.name}</h1>
      <h1>{el.age}</h1>
      <h1>{el.countrry}</h1>
      <h1><img src={el.photo} alt={el.name} /></h1>
      <button>show me</button>
    </div>
  )
}

export default Card
