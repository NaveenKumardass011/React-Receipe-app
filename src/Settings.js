import React from 'react'
import './cssfile/Settings.css'

const Settings = ({themeChanger,bgColorChanger,changeFontSize,animationspeed,primaryColor}) => {
    
  return (
    <div className='settings-div'>
        <div className='Preferred-Theme'>
            <h3>Preferred Theme</h3>
            <div className='theme'>
                <div onClick={()=>themeChanger(0)}className='color theme-white'></div>
                <div onClick={()=>themeChanger(1)} className='color theme-black'></div>
            </div>
        </div>
        <div className='Primary-Color'>
            <h3>Primary Color</h3> 
            <div className='theme'>
             {primaryColor.map((color,index)=>{

                 return <div key={index} className="color" onClick={()=>bgColorChanger(index)} style={{backgroundColor:color}}></div>
             })}
            </div>
        </div>
        <div className='Font-Size'>
        <h3>Font Size</h3>
            <div className='theme'>
                <button onClick={()=>changeFontSize('14px')}>Small</button>
                <button onClick={()=>changeFontSize('16px')}>Medium</button>
                <button onClick={()=>changeFontSize('18px')}>Large</button>
            </div>
        </div>
        <div className='Animation-Speed'>
        <h3>Animation Speed</h3>
           <div className='theme'>
             <button  onClick={()=>animationspeed(1.5)}>Slow</button>
             <button onClick={()=>animationspeed(1)}>Medium</button>
             <button onClick={()=>animationspeed(0.5)}>Fast</button>
           </div>
             
        </div>

    </div>
  )
}

export default Settings