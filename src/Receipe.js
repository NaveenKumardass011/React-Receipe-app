import React from 'react'
import './cssfile/Receipe.css';
import ReceipeDiv from './ReceipeDiv'
import Muttonbriyani from './images/Mutton briyani.jpg'
import Juice1 from './images/Juice 1.jpg'
import Juice2 from './images/juice 2.jpg'
import Briyani1 from './images/Briyani 1.jpeg'
import Burger1 from './images/Burger 1.webp'
import Chefs1 from './images/chefs 1.jpg'
import Chefs2 from './images/chefs 2.jpg'
import Chefs3 from './images/chefs 3.jpg'
import Pizza4 from './Ice cream images/Pizza 4.jpeg'

const Receipe = ({Search,setSearch,itemSearch,foodItem}) => {
  return (
    <div className='Receipe-div'>
        <div className="Receipe-List">
            <li className='list-item' onClick={foodItem}>All</li>
            <li className='list-item' onClick={foodItem}>Pizza</li>
            <li className='list-item' onClick={foodItem}>Burger</li>
            <li className='list-item' onClick={foodItem}>Cookies</li>
            <li className='list-item' onClick={foodItem}>Juice</li>
            <li className='list-item' onClick={foodItem}>Biriyani</li>
            <li className='list-item' onClick={foodItem}>Salad</li>
            <li className='list-item' onClick={foodItem}>Ice Cream</li>
            <li className='list-item' onClick={foodItem}>Soup</li>
        </div>
        <div className="Receipe-Search">
            <input type="text" placeholder='Search' value={Search} onChange={itemSearch}/>
        </div>
        <div className="Receipe-Items">
            <ReceipeDiv
              name="Mutton Biriyani"
              img={Muttonbriyani}
              profileimg={Chefs1}
      
            />
            <ReceipeDiv
              name="Pizza"
              img={Pizza4}
              profileimg={Chefs3}
      
            />
            <ReceipeDiv
              name="Mix Juice"
              img={Juice1}
              profileimg={Chefs2}
      
            />
            <ReceipeDiv
              name="Orange Juice"
              img={Juice2}
              profileimg={Chefs1}
      
            />
            <ReceipeDiv
              name="Burger"
              img={Burger1}
              profileimg={Chefs2}
      
            />
            <ReceipeDiv
              name="Chicken Biriyani"
              img={Briyani1}
              profileimg={Chefs3}
      
            />
        </div>
    </div>
  )
}

export default Receipe