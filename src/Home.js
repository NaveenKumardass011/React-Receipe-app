import React from 'react'
import Cake1 from './Ice cream images/Cake 1.jpeg'
import Cake2 from './Ice cream images/Cake 2.jpeg'
import Cake3 from './Ice cream images/Cake 3.jpeg'
import Cake4 from './Ice cream images/Cake 4.jpeg'
import Pizza1 from './Ice cream images/Pizza 1.jpeg'
import Pizza2 from './Ice cream images/Pizza 2.jpeg'
import Pizza3 from './Ice cream images/Pizza 3.jpeg'
import Pizza4 from './Ice cream images/Pizza 4.jpeg'
import Pizza5 from './Ice cream images/Pizza 5.jpeg'
import Icecream from './Ice cream images/Ice cream 1.jpeg'

const Home = () => {
  return (
    <>
        <div className='intro'>
            <div className='intro-contant'>
              <h1>What Are We About</h1> 

                <p> Foodies Hub is a place where you can please your soul
                  and tummy with delicious food recepies of all cuisine.
                    And our service is absolutely free So start exploring 
                    now.</p>
              <button>EXPLORE NOW</button>
            </div>
            <div className='img-container'>
              <div className='img-item'><img src={Cake1} alt='img1'/></div>
              <div className='img-item'><img src={Cake2} alt='img2' /></div>
              <div className='img-item'><img src={Cake3} alt='img3'/></div>
              <div className='img-item'><img src={Cake4} alt='img4'/></div>
              <div className='img-item'><img src={Pizza1} alt='img5' /></div>
              <div className='img-item'><img src={Pizza2} alt='img6'/></div>
              <div className='img-item'><img src={Pizza3}alt='img7' /></div>
              <div className='img-item'><img src={Pizza5} alt='img8'/></div>
              <div className='img-item'><img src={Pizza4} alt='img9'/></div>
            </div>
        </div>
        <div className="improve-skill">
             <div className='img-contain'>
               <img src={Icecream} />
             </div>
              <div className='improve'>
                 <h1>Improve Your Culinary Skills</h1>
                  <ul>
                      <li>Learn new recepies</li>
                      <li>Experiment with food</li>
                      <li>Write your own recepies</li>
                      <li>Know nutrition facts</li>
                      <li>Get cooking tips</li>
                  </ul>
                  <button>Sign In</button>
              </div>
        </div>
        
    </>
  )
}

export default Home


