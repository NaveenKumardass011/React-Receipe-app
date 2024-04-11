import React, { useState} from 'react';
import './App.css';
import{Routes,Route,Link} from 'react-router-dom'
import Home from './Home.js'
import Receipe from './Receipe.js';
import Settings from './Settings.js';



function App() {
  const [homeClik,setHomeClik]=useState("link")
  const [receipeClik,setReceipeClik]=useState("link")
  const [settingsClik,setSettingClik]=useState("link")
  const [Search,setSearch]=useState("")

  const itemSearch=(e)=>{
  const searchvalue=e.target.value.toLowerCase()
        setSearch(searchvalue)
  const receipeList=document.querySelectorAll('#receipe-item')
  const arry=[...receipeList]
     arry.map((item)=>{
    const arry2= item.dataset.item.toLowerCase()
    if(arry2.includes(searchvalue)){
      item.style.display='block'
    }
    else{
      item.style.display='none'
    }})}


    const foodItem=(e)=>{
        console.log( e.target.innerText.toLowerCase() =='all')

        const receipeList=document.querySelectorAll('#receipe-item')
        const arry=[...receipeList]
           arry.map((item)=>{
          const arry2= item.dataset.item.toLowerCase()
          e.target.innerText.toLowerCase() =='all'?item.style.display='block':item.style.display='none';

          if(e.target.innerText.toLowerCase() !=='all'){
            if(arry2.includes(e.target.innerText.toLowerCase())){
              item.style.display='block'
            }
            else{
              item.style.display='none'
            }

          }
          else{
            item.style.display='block'
          }

        })}

 const navBarClik=(e)=>{
  console.log(e.target.innerText)
  if(e.target.innerText ==='RECEIPE'){
     setReceipeClik("link selected")
     setHomeClik('link')
     setSettingClik('link')
  }
  else if(e.target.innerText==='HOME'){
    setHomeClik("link selected")
    setReceipeClik('link')
    setSettingClik('link')
  }
  else if(e.target.innerText==='SETTINGS'){
     setSettingClik("link selected")
     setReceipeClik('link')
     setHomeClik('link')
  }
   
 }
 const themeChanger=(color)=>{
  document.documentElement.style.setProperty('--bgc',color) 
  const boxShadowcolor= getComputedStyle( document.documentElement).getPropertyValue('--bgc')
  if(boxShadowcolor !=='rgb(59, 56, 56)'){
    document.documentElement.style.setProperty('--boxShadow','rgb(193, 182, 182)')
    document.documentElement.style.setProperty('--heading','black')
    document.documentElement.style.setProperty('--para','rgb(107, 107, 104)')

  }
  else{
    document.documentElement.style.setProperty('--boxShadow','rgb(30, 29, 29)')
    document.documentElement.style.setProperty('--heading','white')
    document.documentElement.style.setProperty('--para','rgb(214, 199, 199)')
  }
 }
 const bgColorChanger=(color)=>{
      
      document.documentElement.style.setProperty('--colorid',color) 
 }  
  return (
    <>
    <div className="container" >
        <div className='navbar-container'>
            <div className="navbar">
                  <div className="heading">F<span>oo</span>diesHub</div>
                  <div className='navbar-right'> 
                      <Link className={homeClik} to="/" onClick={navBarClik}>Home</Link>
                      <Link className={receipeClik} to="/Receipe" onClick={navBarClik}>Receipe</Link>
                      <Link className={settingsClik} to="/Settings"onClick={navBarClik}>Settings</Link>
                  </div>
            </div>
        </div>
      <div className='container-inside'> 
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Receipe'element={
                    <Receipe 
                       foodItem={foodItem}
                       Search={Search}
                       setSearch={setSearch}  
                       itemSearch={itemSearch}/>}>
            </Route>
            <Route path='/Settings' element={<Settings
            bgColorChanger={bgColorChanger}
            themeChanger={themeChanger}
            />}></Route>
        </Routes>
      </div>
    </div>
    <footer>
      <div className="footer-div">
      <div className='website-details'>
        <h3>FoodiesHub.com</h3>
        <p>FoodiesHub is a place where you can please your soul and tummy with
          delicious food receipies of all cuisine. and our service is absolutely
          free.
        </p>
        <p><span>&copy;</span>2024|All Rights Reserved</p>
      </div>
      <div className='contact-details'>
        <h3>Contact Us</h3>
        <p>foodieshub@gmail.com</p>
        <p>No:6,River bank street,
          Nonankuppam,
          Puducherry
          -605007.</p>
      </div>
      <div className='socials-details'>
        <h3>Socials</h3>
        <li>Facebook</li>
        <li>Instragram</li>
        <li>Whatsapp</li>
      </div>
      </div>
    </footer>
    
    </>
  );
}

export default App;
