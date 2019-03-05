import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPhoneById} from "actions/index"
import {getPhoneById} from "../selectors";
import * as R from 'ramda'

class Phone extends Component {

    componentDidMount = () => (
        this.props.fetchPhoneById(this.props.match.params.id)

    );

    renderFields = () => {
        const {phone} = this.props;
        const columnField = R.compose(
            R.toPairs,
            R.pick([
                'cpu',
                'camera',
                'size',
                'weight',
                'display',
                'battery',
                'memory'
            ])
        )(phone);

        return columnField.map(
            ([key, value]) => (
                <div className="column-wrapper border-bottom ">
                    <div className="row" key={key}>
                        <div className="col-4">
                            <p>{key}</p>
                        </div>
                        <div className="col-8">
                            <p>{value}</p>
                        </div>

                    </div>
                </div>
            )
        )

    };


    renderContent = () => {
        const {phone} = this.props;
        return (
            <div className="thumbnail border rounded p-3">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img
                            className="img-thumbnail"
                            src={phone.image}
                            alt={phone.name}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        {this.renderFields()}
                    </div>
                </div>
                <div className="figure-caption pt-5">
                    <h4 className="float-right">
                        ${phone.price}
                    </h4>
                    <h4>{phone.name}</h4>
                    <p>{phone.description}</p>
                </div>
            </div>
        )
    };
    renderSidebar = () => (
        <div>
            Sidebar
        </div>
    );


    render() {
        console.log(this.props.phone);
        const {phone} = this.props;
        return (
            <div>
                <div className="view-container py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-9">{phone && this.renderContent()}</div>
                            <div className="col-12 col-md-3">{phone && this.renderSidebar()}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    phone: getPhoneById(state, state.phonePage.id)
});

const mapDispatchToProps = {
    fetchPhoneById
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);