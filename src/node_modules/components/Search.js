import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {searchPhone} from 'actions'
import {connect} from 'react-redux'

class Search extends Component {
    state = {
        value: ''
    };

    handleChange = (e) => {
        this.setState({value: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchPhone(this.state.value);
        console.log(this.state.value)
    };


    render() {
        return (
            <div className="search my-4">
                <h5>Quick shop</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input
                            aria-label="Text input with dropdown button"
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary">
                                <FontAwesomeIcon icon="search"/>
                            </button>
                        </div>
                    </div>
                </form>


            </div>
        )
    }
}

const mapDispatchToProps = {
    searchPhone
};


export default connect(null, mapDispatchToProps)(Search)