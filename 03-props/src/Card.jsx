import React from 'react'

const Card = (props) => {
  return (
    <div className='profile'>
      <h1 className='name'>{props.name}</h1>
      <img className='profile-img' src={props.img}></img>
      <p className='info'>{props.msg}</p>
    </div>
  )
}

export default Card
