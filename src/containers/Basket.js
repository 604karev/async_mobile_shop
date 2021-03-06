import React from 'react'
import {connect} from 'react-redux'
import {getTotalPrice, getBasketPhones,} from "../selectors";
import * as R from 'ramda'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {removePhoneFromCart, checkoutCart, clearCart} from '../actions'
import {Link} from 'react-router-dom'

const Basket = ({
                    phones,
                    totalPrice,
                    removePhoneFromCart,
                    clearCart,
                    checkoutCart
                }) => {
    const isBasketEmpty = R.isEmpty(phones);

    const renderContent = () => {
        return (
            <div>
                {isBasketEmpty && <div>You basket cart is empty</div>}
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <tbody>
                        {phones.map((phone, index) => (
                            <tr key={index}>
                                <td width='20%'>
                                    <img className="img-thumbnail" src={phone.image} alt=""/>
                                </td>
                                <td width='50%' className="align-middle">
                                    <h5>{phone.name}</h5>
                                    <p>{phone.description}</p>
                                </td>
                                <td width='10%' className="text-center align-middle">
                                    ${phone.price}

                                </td>
                                <td width='10%' className="text-center align-middle">
                                    {phone.count}
                                </td>
                                <td width='10%' className="text-center align-middle">
                                    <button className="btn" onClick={() => removePhoneFromCart(phone.id)}>
                                        <FontAwesomeIcon icon="trash-alt"/></button>
                                </td>

                            </tr>
                        ))}

                        </tbody>
                    </table>
                </div>
                {R.not(isBasketEmpty) && <div className="row">
                    <div className="col">
                        <div className="float-right">
                            <b>Total:</b>
                            ${totalPrice}
                        </div>
                    </div>
                </div>}
            </div>
        )
    };
    const renderSidebar = () => {
        return (
            <div>
                <Link
                    className="btn btn-info btn-block"
                    to="/">
                    <FontAwesomeIcon icon="info"/> Continue shopping
                </Link>
                {R.not(isBasketEmpty) &&
                <div className="mt-2">
                    <button onClick={clearCart}
                            className="btn btn-danger btn-block">
                        <FontAwesomeIcon icon="ban"/> Clear Cart
                    </button>
                    <button
                        onClick={() => checkoutCart(phones)}
                        className="btn btn-success btn-block">
                        <FontAwesomeIcon icon="envelope"/> Checkout
                    </button>
                </div>}
            </div>
        )
    }
    return (
        <div className="view-container py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        {renderContent()}
                    </div>
                    <div className="col-md-3">
                        {renderSidebar()}
                    </div>

                </div>
            </div>
        </div>
    )

};
const mapStateToProps = state => ({
    phones: getBasketPhones(state),
    totalPrice: getTotalPrice(state)
});

const mapDispatchToProps = {
    removePhoneFromCart,
    clearCart,
    checkoutCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket)