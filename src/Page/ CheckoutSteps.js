import React from 'react'
import { Link } from 'react-router-dom'
import './MainPage.css'

const CheckoutSteps = ({ shipping, service, payment ,cards, review}) => {
    return (
        <div className="checkout-progress d-flex justify-content-center mt-5">

            {service ? <Link to='/service' className="float-right">
                 <div className='d-grid gridItem'>
                     <div className="triangle2-active">
                      <i class="fas fa-chart-line"></i>
                     </div>
                     <div className="step active-step"
                    >Service</div>
                    <div className="triangle-active"></div>
                 </div>
             </Link> : <Link to="#!" disabled>
                 <div className='d-grid gridItem'>
                    <div className="triangle2-incomplete">
                    <i class="fas fa-chart-line"></i>
                    </div>
                    <div className="step incomplete">Service</div>
                    <div className="triangle-incomplete"></div>
                 </div>
             </Link>}

            {cards ? <Link to='/cards' className="float-right">
             <div className='d-grid gridItem'>
                <div className="triangle2-active triangle2-active-Cards "><i class="fas fa-shopping-cart"></i></div>
                <div className="step active-step">Cards</div>
                <div className="triangle-active"></div>
             </div>
             </Link> : <Link to="#!" disabled>
               <div className='d-grid gridItem'>
                    <div className="triangle2-incomplete"><i class="fas fa-shopping-cart"></i></div>
                    <div className="step incomplete">Cards</div>
                    <div className="triangle-incomplete"></div>
                </div>
             </Link>}
            {shipping ? <Link to='/shipping' className="float-right">
             <div className='d-grid gridItem'>
                <div className="triangle2-active"><i class="fas fa-shipping-fast"></i></div>
                <div className="step active-step">Shipping</div>
                <div className="triangle-active"></div>
            </div>
             </Link> : <Link to="#!" disabled>
                 <div className='d-grid gridItem '>
                    <div className="triangle2-incomplete WidthShPy"><i class="fas fa-shipping-fast"></i></div>
                    <div className="step incomplete">Shipping</div>
                    <div className="triangle-incomplete"></div>
                 </div>
             </Link>}
            {payment? <Link to='/payment' className="float-right">
             <div className='d-grid gridItem'>
                <div className="triangle2-active"><i class="fas fa-money-check-alt"></i></div>
                <div className="step active-step"> Payment</div>
                <div className="triangle-active"></div>
             </div>
             </Link> : <Link to="#!" disabled>
                 <div className='d-grid gridItem'>
                    <div className="triangle2-incomplete WidthShPy"><i class="fas fa-money-check-alt"></i></div>
                    <div className="step incomplete"> Payment</div>
                    <div className="triangle-incomplete"></div>
                 </div>
             </Link>}
 
            {review ? <Link to='/review' className="float-right">
                <div className='d-grid gridItem'>
                      <div className="triangle2-active"><i class="far fa-edit"></i></div>
                     <div className="step active-step">Review</div>
                     <div className="triangle-active"></div>
                </div>
             </Link> : <Link to="#!" disabled>
                <div className='d-grid gridItem'>
                     <div className="triangle2-incomplete widthReview"><i class="far fa-edit"></i></div>
                     <div className="step incomplete">Review</div>
                     <div className="triangle-incomplete"></div>
                </div>
             </Link>}
                

        </div>
    )
}

export default CheckoutSteps;