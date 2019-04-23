import React from 'react'
import {connect} from 'react-redux'
import {getTotalPrice, getBasketPhones} from "../selectors";

const Basket = () => {
    return (
        <div>Basket</div>
    )

};
const mapStateToProps = state => ({
    phones: getBasketPhones(state),
    totalPrice: getTotalPrice(state)
});

export default connect(mapStateToProps, null)(Basket)