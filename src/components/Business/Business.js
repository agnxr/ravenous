import React from 'react';
import './Business.css';
import PropTypes from 'prop-types';

import star from '../../assets/star.svg';

class Business extends React.Component {
    render(){

        const {business} = this.props;
        return (
        <div className="Business">
            <div className="image-container">
                <a href={business.url} target = "_blank"><img src={business.imageSrc ? business.imageSrc : star} alt='' /></a>
            </div>

            <h2>{business.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                <a target=" _blank" href={`https://maps.google.com/?q=${business.name},${business.address}&sll=${business.lat},${business.long}`}>aaadreeeess</a>
 
                
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                </div>
                <div className="Business-reviews">
                    <h3>{business.category}</h3>
                    <h3 className="rating">{business.rating} stars</h3>
                    <p>{business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
        )
    }
}

Business.propTypes = {
    imageSrc: PropTypes.string,
    reviewCount: PropTypes.number.isRequired,
}
Business.defaultProps = {
    imageSrc: star
}

export default Business;
