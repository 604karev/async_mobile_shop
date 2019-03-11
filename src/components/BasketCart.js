import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {getTotalCartCount, getTotalPrice} from '../selectors'

const BasketCart = ({totalCartCount, totalPrice}) => (
    <div className="cart">
        <div className="dropdown">
            <Link to="/cart" id="dLabel" className='btn btn-info btn-block btn-lg'>
                <FontAwesomeIcon icon="cart-plus"/>
                <span> {totalCartCount} item(s) - ${totalPrice}</span>
            </Link>
        </div>
    </div>


);

const mapStateToProps = state => ({
    totalCartCount: getTotalCartCount(state),
    totalPrice: getTotalPrice(state)
});


export default connect(mapStateToProps, null)(BasketCart)