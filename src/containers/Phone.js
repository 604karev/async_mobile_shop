import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPhoneById} from "actions/index"

class Phone extends Component {
    componentDidMount = () => (
        this.props.fetchPhoneById(this.props.match.params.id)

    );


    render() {
        return (
            <div>
                Phone
            </div>
        )
    }

}

const mapDispatchToProps = {
    fetchPhoneById
};

export default connect(null, mapDispatchToProps)(Phone);