import React from 'react'

export default function Profile(props) {
  return (
    <div className='picture'>
      <img src="https://get.wallhere.com/photo/flowers-grass-snow-green-snowdrops-leaf-flower-plant-flora-snowdrop-primrose-shine-botany-land-plant-flowering-plant-close-up-macro-photography-plant-stem-galanthus-waking-725829.jpg"></img>
      <br/>
      <b>{props.name}</b>
      <p>{props.email}</p>
    </div>
    
  )
}
