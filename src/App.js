import React, { useState,useEffect} from 'react';
import './cssfile/App.css';
import{Routes,Route,Link, useLocation} from 'react-router-dom'
import Home from './Home.js'
import Receipe from './Receipe.js';
import Settings from './Settings.js';



function App() {
  const [Search,setSearch]=useState("")
  const [menu,setmenu]=useState(false)

const location=useLocation()

const [settings, setSettings] = useState({
  "--background-color": "#fff",
  "--background-light": "#fff",
  "--primary-color": "rgb(255, 0, 86)",
  "--shadow-color": "rgba(0,0,0,0.2)",
  "--text-color": "#0A0A0A",
  "--text-light": "#575757",
  "--font-size": "16px",
  "--animation-speed": 1
})

  useEffect(() => {
    const root = document.documentElement
    for(let key in settings){
      root.style.setProperty(key, settings[key])
    }
}, [settings])





const [theme,setTheme]=useState([{
  "--background-color": "#fff",
  "--background-light": "#fff",
  "--shadow-color": "rgba(0,0,0,0.2)",
  "--text-color": "#0A0A0A",
  "--text-light": "#575757"
},{
  "--background-color": "rgb(29,29,29)",
  "--background-light": "rgb(77,77,77)",
  "--shadow-color": "rgba(0,0,0,0.2)",
  "--text-color": "#ffffff",
  "--text-light": "#eceaea"
}])

const primaryColor=[
  'rgb(255, 0, 86)',
  'rgb(33, 150, 243)',
  'rgb(255, 193, 7)',
  ' rgb(0, 200, 83)',
  ' rgb(156, 39, 176)'
]


const themeChanger=(id)=>{
 const _theme={...theme[id]}


  for(let _key in _theme ){
    document.documentElement.style.setProperty(_key,_theme[_key])
  }}

  const bgColorChanger=(id)=>{

    document.documentElement.style.setProperty('--primary-color',primaryColor[id]) 
}  


  const animationspeed=(speed)=>{
    document.documentElement.style.setProperty('--animation-speed',speed) 
  }
  
  const changeFontSize=(size)=>{
    document.documentElement.style.setProperty('--font-size',size) 
  }

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
  const menuBarClose=(value)=>{
    menu=== value?setmenu(false):setmenu(true)
  }
  
  
  return (
    <>
    <div className="container" >
        <div className='navbar-container'>
            <div className="navbar">
                  <div className="heading">F<span>oo</span>diesHub</div>
              <div className='navbar-right'> 
                      <Link className={location.pathname==="/"?"link selected":"link"} to="/" >Home</Link>
                      <Link className={location.pathname==="/Receipe"?"link selected":"link"} to="/Receipe" >Receipe</Link>
                      <Link className={location.pathname==="/Settings"?"link selected":"link"} to="/Settings">Settings</Link>
    
                  </div>
                  {menu ===true && <div className='navbar-right1'> 
                      <Link className={location.pathname==="/"?"link1 selected":"link1"} to="/" >Home</Link>
                      <Link className={location.pathname==="/Receipe"?"link1 selected":"link1"} to="/Receipe" >Receipe</Link>
                      <Link className={location.pathname==="/Settings"?"link1 selected":"link1"} to="/Settings">Settings</Link>
    
                  </div>}
                  <div className='mini-menu' onClick={()=>menuBarClose(true)}>
                        <div className="top"></div>
                        <div className="middle"></div>
                        <div className="bottom"></div>
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
            changeFontSize={changeFontSize}
            animationspeed={animationspeed}
            primaryColor={primaryColor}
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
