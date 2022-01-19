import React from 'react'
import img from "../Image/download.svg"
import user from "../Image/download (1).svg"
import'./MainPage.css'
import CheckoutSteps from './ CheckoutSteps'
import { Link } from 'react-router-dom'
import MetaData from '../MetaData'
import ServiceDeta from '../Components/ServiceDeta'
 
function  Service() {
    return (
        <div className='mainsection '>
          <MetaData title={'User Service'} />
        <div className='row fastRow '>
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
                 <CheckoutSteps  service  className=" "></CheckoutSteps>
             </div>
        </div>
        <div className=' container lastSection '
         style={{justifyContent: 'space-around'}}
        >
          
          <div className='row col-md-7 text-left d-flex'
          style={{
            margin: '100px 0px 25px 0px'
        }}
          >
            <div>
            <h2 className='h2-style '>
                Enter Payment Details
                </h2>
                <p>
                Select your payment method and enter details.
                </p>
            </div>
          </div>
        </div>
        <div className='d-flex container ThardSection '
          style={{justifyContent: 'space-around'}}
        >
          <ServiceDeta></ServiceDeta>
        </div>
        
        <div className='d-flex mt-5 mb-5'
          style={{justifyContent: 'space-around'}}
        >
           <Link to="/cards">
               <button  variant="contained"  
               style={{ padding: '10px 100px 10px 100px', background:"rgba(32, 191, 184)",color: 'white', border: '0'}}
               >
                Next
               </button>
            </Link>
        </div>
       
        
         
    </div>
        
    )
}

export default  Service
