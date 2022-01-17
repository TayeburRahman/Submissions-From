import React from 'react'
import { Link } from 'react-router-dom'
import CheckoutSteps from './ CheckoutSteps'
import img from "../Image/download.svg"
import user from "../Image/download (1).svg"
import MetaData from '../MetaData'

function  cart() {
    return (
        <div className='mainsection'>
         <MetaData title={'Cart'} />
        <div className='row fastRow'>
            <div className='col-md-4 logo'>
              <img src={user} dataReactid=".0.0"  />
             </div>
             <div className=' text'>
               <h2>Submit Cards For Grading</h2>
             </div>
             <div className='col-md-4 userImage'>
               <img src={img} dataReactid=".0.0"/>
             </div>
        </div>
        <div className=' container lastSection '>
          <div className='row text-left d-flex'>
            <div className='CheckoutStepsMainPage'>
               <CheckoutSteps cards service ></CheckoutSteps>
            </div>
            <div>
              <h2 className='h2-style '>
               Add cards to your submission [cards]
              </h2>
              <p>
                Search for a card below and click the "+" icon, then enter the quantity and value for each card.
              </p>
            </div>
            <Link to="/shipping">
               <button id="checkout_btn" className="btn btn-primary btn-block"
               style={{    padding: '10px 50px 10px 50px'}}
               >
                Next
               </button>
            </Link>
          </div>
        </div>
         
    </div>
    )
}

export default  cart;
