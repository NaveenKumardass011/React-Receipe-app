import React,{props}from 'react'
import './ReceipeDiv.css'
const ReceipeDiv = (props) => {
  return (
    <div className='Receipe-component' data-item={props.name} id='receipe-item'>
      <div className="img-div">
        <img src={props.img} />
      </div>
      <div className="profile">
         <div className='profile-img'> <img src={props.profileimg}/></div>
       <div className='profile-details'>
       <h4>{props.name}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Minima, reiciendis voluptatum. Expedita, in.
            Corporis possimus quam aliquid pariatur, harum  </p>
            <a href="">VIEW RECEIPE</a>
         </div> 
      </div>

    </div>
  )
}

export default ReceipeDiv