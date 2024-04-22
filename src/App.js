import React, { useState,useEffect} from 'react';
import './cssfile/App.css';
import{Routes,Route} from 'react-router-dom'
import Home from './Home.js'
import Receipe from './Receipe.js';
import Settings from './Settings.js';
import { FaFacebookSquare, FaWhatsappSquare} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Muttonbriyani from './images/Mutton briyani.jpg'
import Juice1 from './images/Juice 1.jpg'
import Juice2 from './images/juice 2.jpg'
import Briyani1 from './images/Briyani 1.jpeg'
import Burger1 from './images/Burger 1.webp'
import Chefs1 from './images/chefs 1.jpg'
import Chefs2 from './images/chefs 2.jpg'
import Chefs3 from './images/chefs 3.jpg'
import Pizza4 from './Ice cream images/Pizza 4.jpeg'
import Navbar from './Navbar.js';



function App() {
  const [Search,setSearch]=useState("")
  const [menu,setmenu]=useState(false)
  const [menuActive,setMenuActive]=useState("mini-menu")
  const [menuBar,setBar]=useState("bar")
  const[animationChange,setAnimationchange]=useState(" ")
  const[receipeFilter,setReceipeFilter]=useState([])
  const[result,setresult]=useState(false)
  const[title,setTitle]=useState()
  


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


const receipes=
  [
   {
    'id':1,
    'img':Juice1,
    'name':"Mix Juice",
    'chef':Chefs1
   },
   {
    'id':2,
    'img':Juice2,
    'name':"Juice",
    'chef':Chefs2
   },
   {
    'id':3,
    'img':Briyani1,
    'name':"Biriyani",
    'chef':Chefs3
   },
   {
    'id':4,
    'img': Burger1,
    'name':"Burger",
    'chef':Chefs1
   },
   {
    'id':5,
    'img':Muttonbriyani,
    'name':"Mutton Biriyani",
    'chef':Chefs2
   },
   {
    'id':6,
    'img':Pizza4,
    'name':"Pizza",
    'chef':Chefs3
   }
  ]
  useEffect(() => {
    setReceipeFilter(receipes)
    console.log('hi')
   
 }, [])
 




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
       const val= receipes.filter((item)=>{
          return   item.name.toLowerCase().includes(searchvalue)
        })
        setReceipeFilter(val)
        if(val.length===0){
          setresult(true)
        }
        else{
          setresult(false)
        }
}


const foodItem=(e)=>{
     setSearch("")
      if(e.target.innerText.toLowerCase()=='all'){
          setReceipeFilter(receipes)
          setresult(false)
          setTitle(e.target.innerText)
      }
      else{
        const val=receipes.filter((item)=>{
          return   item.name.toLowerCase().includes(e.target.innerText.toLowerCase())
         })
         setReceipeFilter(val)
         if(val.length===0){
          setresult(true)
          setTitle(e.target.innerText)
        }
        else{
          setresult(false)
        }
      }
      }
  const menuBarClose=(value)=>{
    menu=== value?setTimeout(setmenu(false),1000) :setmenu(true)
    menu=== value?setMenuActive("mini-menu"):setMenuActive("mini-menu active")
    menu=== value?setBar("bar"):setBar("bar active-menu")
    menu=== value?setAnimationchange("menuclose"):setAnimationchange("menuopen")
  }
  

  
  return (
    <>

    <div className="container" >
         <Navbar
         menuBarClose={menuBarClose}
         menuActive={menuActive} 
         menuBar={menuBar}
         menu={menu}
         animationChange={animationChange}
         />
      <div className='container-inside'> 
        <Routes>
            <Route path='/' element={<Home
                       Muttonbriyani={Muttonbriyani}
                       Juice1={Juice1}
                       Juice2={Juice2}
                       Burger1={Burger1}
                       Briyani1={Briyani1}
                       />}></Route>
            <Route path='/Receipe'element={
                    <Receipe 
                       foodItem={foodItem}
                       Search={Search}
                       receipeFilter={receipeFilter}
                       itemSearch={itemSearch}
                       result={result}
                       title={title}
                       />}>
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
        <li><FaFacebookSquare className='social-icons'/><span className='social-name'>Facebook</span></li>
        <li><FaSquareInstagram className='social-icons'/><span className='social-name'>Instragram</span></li>
        <li>< FaWhatsappSquare className='social-icons'/><span className='social-name'>Whatsapp</span></li>
      </div>
      </div>
    </footer>
    
    </>
  );
}

export default App;
