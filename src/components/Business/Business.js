import React from 'react';
import './Business.css';
import PropTypes from 'prop-types';

import star from '../../assets/star.svg';
import flag from '../../assets/flag.svg';
import rate from '../../assets/rating.svg';

import styled, {css} from 'styled-components';

const StyledAddress = styled.div`
    font-family: 'Quicksand', sans-serif;

    line-height:22px;
    a {
        text-decoration: none;
    }
    img {
        width: 22px;
        height: auto;
    }
`;

const StyledReviews = styled.div`
font-family: 'Quicksand', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
    h3 {
    color: #223E4A;
    font-weight: 600;
  }
  img {
        width: 18px;
        height: auto;
        margin-top: -2px;
        margin-left: 7px;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
    }
`;

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
                <StyledAddress>
               
                <a href={`https://maps.google.com/?q=${business.name},${business.address}&sll=${business.lat},${business.long}`} target = "_blank">
                   
   {business.address}
   <br/>
                    {business.city}
                    <br/>
                    {business.state} {business.zipCode}  <a href={`https://maps.google.com/?q=${business.name},${business.address}&sll=${business.lat},${business.long}`} target = "_blank"><img src={flag} alt='Show on map' /></a>                
                    </a>
                </StyledAddress>
                <StyledReviews>
                    <h3>{business.category}</h3>
                    <div>
                    <h3 className="rating">{business.rating}</h3><img src={rate} alt=''/>
                    </div>
                    <p>{business.reviewCount} reviews</p>
                </StyledReviews>
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
