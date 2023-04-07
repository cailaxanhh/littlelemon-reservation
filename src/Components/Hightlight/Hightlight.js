import React from 'react';
import './Hightlight.css';
import greeksalad from '../../assets/greeksaladP.jpg';
import bruschetta from '../../assets/burschettaP.jpg';
import grilledfish from '../../assets/grilled-fishP.jpg';
import lemondessert from '../../assets/lemondessertP.jpg';

export default function Hightlight() {
  return (
    <div id="Hightlight">
      <div id="heading">
        <h2>SPECIALS</h2>
        <button id='order'>ORDER ONLINE</button>
      </div>
      <div id="specials">
        <div className='dish'>
          <img src={greeksalad} alt="greeksalad"></img>
          <h3 className="dishname">GREEK SALAD</h3>
          <h3 className='dishprice'>$ 9.0</h3>
          <p className='dishdetails'>A traditional Greek salad
            consists of sliced cucumbers, tomatoes, green bell
            pepper, red onion, olives, and feta cheese. This classic
            combination is delicious, so I stick to it, just adding
            a handful of mint leaves for a fresh finishing touch. 
            My olives of choice are Kalamata olives. Commonly used in
            Greek food, their salty, briny flavor is delectable alongside
            the feta and crisp veggies. Instead of slicing large tomatoes,
            I use cherry tomatoes because they release less water into
            the salad than larger tomatoes would. I also seed my cucumber
            to avoid making my salad watery.</p>
          <button className='orderdish'>Order a Delivery</button>
        </div>
        <div className='dish'>
          <img src={bruschetta} alt="bruschetta"></img>
          <h3 className="dishname">BRUSCHETTA</h3>
          <h3 className='dishprice'>$ 8.0</h3>
          <p className='dishdetails'>Bruschetta is an Italian antipasto
           (appetizer) that was originally created to salvage stale bread 
           and showcase the flavors of olive oil. In Italy, 
           the term “bruschetta” refers to the grilled slice of bread, 
           rubbed with garlic and olive oil, not the topping itself. 
           Tomato and basil are a common bruschetta topping, as well 
           as beans and cured meats.</p>
          <button className='orderdish'>Order a Delivery</button>
        </div>
        <div className='dish'>
          <img src={grilledfish} alt="grilledfish"></img>
          <h3 className="dishname">GRILLED FISH</h3>
          <h3 className='dishprice'>$ 20.0</h3>
          <p className='dishdetails'>Grilled Fish Steak is a delicious Mediterranean recipe made by marinating fish fillets in garlic, green chilies and a blend of spices.Tender fish fillets smeared in a simple marinade of lime juice and salt, seared golden. A super simple dish with refreshing summery flavours from the fresh herbs and a dash of chilli to spice it up. Perfect to make your weeknight dinners special! It is one of the delightful seafood recipe that can be a healthy option to prepare for your loved ones.</p>
          <button className='orderdish'>Order a Delivery</button>
        </div>
        <div className='dish'>
          <img src={lemondessert} alt="lemondessert"></img>
          <h3 className="dishname">LEMON DESSERT</h3>
          <h3 className='dishprice'>$ 10.99</h3>
          <p className='dishdetails'>An unique lemon-rosemary layer cake is a treat for the senses with flecks of lemon zest and fresh rosemary. It has three layers of lemon cake filled with lemon curd, coated with rosemary infused buttercream, and topped with candied pecans.</p>
          <button className='orderdish'>Order a Delivery</button>
        </div>
      </div>
    </div>
  )
}


