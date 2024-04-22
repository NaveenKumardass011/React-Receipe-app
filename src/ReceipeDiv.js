import React from 'react'
import './cssfile/ReceipeDiv.css'

const ReceipeDiv = (props) => {
  return (
    <div className='Receipe-component' data-item={props.name} id='receipe-item'>
      <div className="img-div">
        <img className='img-items' src={props.img} />
      </div>
      <div className="profile">
         <div className='profile-img'> <img className='img-chef' src={props.profileimg}/></div>
       <div className='profile-details'>
       <h4>{props.name}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Minima. </p>
            <a>VIEW RECEIPE</a>
         </div> 
      </div>

    </div>
  )
}

export default ReceipeDiv