import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPhones, loadMorePhones, addPhoneToCart} from 'actions/index'
import {getPhones} from 'selectors'
import {Link} from 'react-router-dom'
import * as R from 'ramda'


class Phones extends Component {

    componentDidMount = () => {
        this.props.fetchPhones();
    };


    renderPhones = (phone) => {
        const shortDescription = `${R.take(60, phone.description)}...`;
        const {addPhoneToCart} = this.props;
        return (
            <div className="col-md-4" key={phone.id}>
                <div className="thumbnail">
                    <img
                        className="img-thumbnail d-block m-auto"
                        src={phone.image}
                        alt={phone.name}/>
                    <div className="caption p-2">
                        <h5 className="float-right">${phone.price}</h5>
                        <h5>
                            <Link to={`/phones/${phone.id}`}>
                                {phone.name}
                            </Link>
                        </h5>
                        <p className="">
                            {shortDescription}
                        </p>
                        <div className="itemButton text-center">
                            <button
                                className="btn btn-primary"
                                onClick={() => addPhoneToCart(phone.id)}
                            >Buy now
                            </button>
                            <Link to={`/phones/${phone.id}`} className="btn btn-link">
                                More info
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
    render() {
        const {phones, loadMorePhones} = this.props;
        return (
            <div className="phone-row">
                <div className="row">
                    {phones.map((phone) => (this.renderPhones(phone)))}
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button
                            onClick={loadMorePhones}
                            className="btn btn-info float-right mt-5">
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    phones: getPhones(state)
});

const mapDispatchToProps = {
    fetchPhones,
    loadMorePhones,
    addPhoneToCart
};


export default connect(mapStateToProps, mapDispatchToProps)(Phones)