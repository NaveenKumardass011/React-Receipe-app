import React,{props} from 'react'
import './Settings.css'

const Settings = (props) => {
    
  return (
    <div className='settings-div'>
        <div className='Preferred-Theme'>
            <h3>Preferred Theme</h3>
            <div className='theme'>
                <div onClick={()=>props.themeChanger('#eae7e7')}className='color theme-white'></div>
                <div onClick={()=>props.themeChanger('rgb(59, 56, 56)')} className='color theme-black'></div>
            </div>
        </div>
        <div className='Primary-Color'>
            <h3>Primary Color</h3>
            <div className='theme'>
                <div onClick={()=>props.bgColorChanger('rgb(255, 6, 98)')} className='color color-red'></div>
                <div onClick={()=>props.bgColorChanger('rgb(41, 104, 239)')} className='color color-blue'></div>
                <div onClick={()=>props.bgColorChanger('rgb(249, 147, 14)')} className='color color-yellow'></div>
                <div onClick={()=>props.bgColorChanger('rgb(25, 200, 34)')} className='color color-green'></div>
                <div onClick={()=>props.bgColorChanger('rgb(236, 18, 196)')} className='color color-violet'></div>
            </div>
        </div>
        <div className='Font-Size'>
        <h3>Font Size</h3>
            <div className='theme'>
                <button>Small</button>
                <button>Medium</button>
                <button>Large</button>
            </div>
        </div>
        <div className='Animation-Speed'>
        <h3>Animation Speed</h3>
           <div className='theme'>
             <button>Slow</button>
             <button>Medium</button>
             <button>Fast</button>
           </div>
             
        </div>

    </div>
  )
}

export default Settings