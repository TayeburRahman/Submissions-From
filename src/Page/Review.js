import React from 'react'
import img from "../Image/download.svg"
import user from "../Image/download (1).svg"
import'./MainPage.css'
import CheckoutSteps from './ CheckoutSteps'
import { Link } from 'react-router-dom'
import MetaData from '../MetaData'

function  Review() {
    return (
        <div className='mainsection'>
          <MetaData title={'Oder Review'} />
        <div className='row fastRow'>
        <div className='d-flex container logoContainer'
             style={{justifyContent: 'space-between'}}
             >
             <div className='text-left logo'>
              <img src={user} dataReactid=".0.0"  />
             </div>
             <div className=' text-right userImage'>
               <img src={img} dataReactid=".0.0"/>
             </div>
             </div>
             <div className='   text'>
               <h2>Submit Cards For Grading</h2>
             </div>
             
             <div className='CheckoutStepsMainPage'>
                 <CheckoutSteps service cards shipping payment review className=" "></CheckoutSteps>
             </div>
        </div>
        <div className=' container lastSection '>
          <div className='row text-left d-flex'>
            <div>
            <h2 className='h2-style '>
                Enter Payment Details [review]
                </h2>
                <p>
                Select your payment method and enter details.
                </p>
            </div>
            <Link to="/payment">
               <button id="checkout_btn" className="btn btn-primary btn-block"
               style={{padding: '10px 50px 10px 50px'}}
               >
                Next
               </button>
            </Link>
          </div>
        </div>
         
    </div>
    )
}

export default  Review
