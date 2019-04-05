import React from 'react'
import {connect} from 'react-redux'
import {getCategories, getActiveCategory} from '../selectors'
import {Link, withRouter} from 'react-router-dom'
import classNames from 'classnames/bind'
import {compose} from 'redux'
import * as R from 'ramda'

const Categories = ({categories, activeCategory}) => {

    const renderCategory = (category) => {
        const getActiveState = R.propEq('id', activeCategory);
        const linkActive = classNames({
            'list-group-item': true,
            'list-group-item-action': true,
            'active': getActiveState(category)
        });
        return (
            <Link
                className={linkActive}
                to={`/categories/${category.id}`}
                key={category.id}>
                {category.name}
            </Link>
        )
    };
    const renderAllCategory = () => {
        const linkActive = classNames({
            'list-group-item': true,
            'list-group-item-action': true,
            'active': R.isNil(activeCategory)
        });
        return (
            <Link
                className={linkActive}
                to='/'>
                All
            </Link>
        )
    }
    return (
        <div className="bg-light py-4 px-2 rounded">
            <h4 className="text-center">Brand</h4>
            <div className="categories list-group">
                {renderAllCategory()}
                {categories.map((category) => renderCategory(category))}
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    categories: getCategories(state),
    activeCategory: getActiveCategory(ownProps)
});
export default compose(
    withRouter,
    connect(mapStateToProps, null))(Categories)