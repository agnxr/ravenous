import React from 'react';
import PropTypes from 'prop-types';

import star from '../../assets/star.svg';
import flag from '../../assets/flag.svg';
import rate from '../../assets/rating.svg';
import bkp from '../../assets/backup-img.png'

import styled, {css} from 'styled-components';

const StyledAddress = styled.div`
    color: #666;


    a {
        text-decoration: none;
        color: #666;
        line-height: 28px;
        &:hover {
        text-decoration: underline;

    
    }
    }
    
    img {
        width: 22px;
        height: auto;
    }

`;

const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background: #d22828;
  height: 16.66rem;
    margin-bottom: 1rem;
    a {
        display: block;
        height: 16.66rem;
    }
   a img {
    width: 100%;
  height: 100%;
  object-fit: cover;

   }
`;



const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 16.66rem;
    margin: 0 .5rem 2.3rem .5rem;
    h2 {
    margin-bottom: .5rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const StyledItemDesc = styled.div`
    display: flex;
    justify-content: space-between;
    
    p {
    font-size: .88rem;
    font-weight: 300;
    line-height: 1rem;
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
        <StyledItem>
            <StyledImgContainer>
                <a href={business.url} target = "_blank"><img src={business.imageSrc ? business.imageSrc : bkp } alt='' /></a>
            </StyledImgContainer>

            <h2>{business.name}</h2>
            <StyledItemDesc>
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
                    <h3>{business.rating}</h3>
                    <img src={rate} alt=''/>
                    </div>
                    <p>{business.reviewCount} reviews</p>
                </StyledReviews>
            </StyledItemDesc>
        </StyledItem>
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
