import React from 'react'
import Card from './Card'
const Cards = ({player}) => {
  return (
    <div className='cards'>
        {player.map(el=><Card el={el}  />)}
    </div>
  )
}

export default Cards
