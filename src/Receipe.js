import React from 'react'
import './cssfile/Receipe.css';
import ReceipeDiv from './ReceipeDiv'

import { FaSearch } from "react-icons/fa";


const Receipe = ({Search,receipeFilter,itemSearch,foodItem,result,title}) => {

const ReceipeList=['All','Pizza','Burger','Cookies','Juice','Biriyani','Salad','Ice Cream','Soup']

  return (
    <div className='Receipe-div'>
        <div className="Receipe-List">
          {ReceipeList.map((list,index)=>{
          return  <li className='list-item' id={index} key={index} onClick={foodItem}>{list}</li>
          })}
        </div>
        <div className="Receipe-Search">
           <div className='Search-bar'>
             <input id='search-focus'  type="text" placeholder='Search' value={Search} onChange={itemSearch}/>
             <FaSearch className='Search-icon' name='search-focus' /> 
           </div>
        </div>
        <div className="Receipe-Items">
            {receipeFilter.map((item,index)=>{
  
              return <ReceipeDiv key={index} id={index} name={item.name} img={item.img}  profileimg={item.chef} />})}
           
        </div>
        {result!==false &&<div className='result-div'> 
          <p className='result'>{`Not available "${Search||title}"`}</p>
          <p>Try Searching for somthing else</p>
        </div>}
        
        
    </div>
  )
}

export default Receipe