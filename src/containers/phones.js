import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPhones} from 'actions/index'
import {getPhones} from 'selectors'
import {Link} from 'react-router-dom'
import * as R from 'ramda'


class Phones extends Component {
    componentDidMount = () => {
        this.props.fetchPhones();
    };
    renderPhones = (phone) => {
        const shortDescription = `${R.take(60, phone.description) }...`;
        return (
            <div className="col-md-4" key={phone.id}>
                <div className="thumbnail">
                    <img src={phone.image} alt={phone.name} className="img-thumbnail"/>
                </div>
                <div className="caption">
                    <h4 className="pull-right">${phone.price}</h4>
                    <h4>
                        <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
                    </h4>
                    <p>{shortDescription}</p>
                    <div className="itemButton">
                        <button className="btn btn-primary">Buy Now!</button>
                        <Link className="btn btn-default" to={`/phones/${phone.id}`}>More info...</Link>

                    </div>
                </div>
            </div>
        )
    };

    render() {
        const {phones} = this.props;
        return (
            <div className="phone-row row">
                {phones.map((phone) => this.renderPhones(phone))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    phones: getPhones(state)
});

const mapDispatchToProps = {
    fetchPhones
};


export default connect(mapStateToProps, mapDispatchToProps)(Phones)