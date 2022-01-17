import React from 'react'
import { Link } from 'react-router-dom'
import './MainPage.css'

const CheckoutSteps = ({ shipping, service, payment ,cards, review}) => {
    return (
        <div className="checkout-progress d-flex justify-content-center mt-5">

            {service ? <Link to='/service' className="float-right">
                <div className="triangle2-active"></div>
                <div className="step active-step"
                >Service</div>
                <div className="triangle-active"></div>
            </Link> : <Link to="#!" disabled>
                    <div className="triangle2-incomplete"></div>
                    <div className="step incomplete">Service</div>
                    <div className="triangle-incomplete"></div>
            </Link>}

            {cards ? <Link to='/cards' className="float-right">
                <div className="triangle2-active"></div>
                <div className="step active-step">Cards</div>
                <div className="triangle-active"></div>
            </Link> : <Link to="#!" disabled>
                    <div className="triangle2-incomplete"></div>
                    <div className="step incomplete">Cards</div>
                    <div className="triangle-incomplete"></div>
            </Link>}
            {shipping ? <Link to='/shipping' className="float-right">
                <div className="triangle2-active"></div>
                <div className="step active-step">Shipping</div>
                <div className="triangle-active"></div>
            </Link> : <Link to="#!" disabled>
                    <div className="triangle2-incomplete"></div>
                    <div className="step incomplete">Shipping</div>
                    <div className="triangle-incomplete"></div>
            </Link>}
            {payment? <Link to='/payment' className="float-right">
                <div className="triangle2-active"></div>
                <div className="step active-step"> Payment</div>
                <div className="triangle-active"></div>
            </Link> : <Link to="#!" disabled>
                    <div className="triangle2-incomplete"></div>
                    <div className="step incomplete"> Payment</div>
                    <div className="triangle-incomplete"></div>
            </Link>}
 
            {review ? <Link to='/review' className="float-right">
                <div className="triangle2-active"></div>
                <div className="step active-step">Review</div>
                <div className="triangle-active"></div>
            </Link> : <Link to="#!" disabled>
                    <div className="triangle2-incomplete"></div>
                    <div className="step incomplete">Review</div>
                    <div className="triangle-incomplete"></div>
            </Link>}
                

        </div>
    )
}

export default CheckoutSteps;