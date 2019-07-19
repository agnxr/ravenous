import React from 'react';
import styled, {css} from 'styled-components';

const StyledLoader = styled.div`
    border-radius: 50%;
    border: 2px dotted #818fdd;
    border-top: 2px dotted #020102;
    width: 70px;
    height: 70px;
    display: flex;
    animation: spin 1s linear infinite;
    
    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const StyledParent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loader = () => (
    <StyledParent>
        <StyledLoader />
    </StyledParent>
)

export default Loader;