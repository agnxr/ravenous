import React from 'react';
import styled, {css} from 'styled-components';
import Business from '../Business/Business';

const StyledItemsList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 7% 10%;
  }
`;

const BusinessList = ({businesses}) => (
    <StyledItemsList>
        {
            businesses.map((business) => {
                return <Business business={business} key={business.id}/>;
            })
        }
    </StyledItemsList>
);


export default BusinessList;