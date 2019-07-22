import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
    margin: 40px;
    border-radius: 50%;
    border: 6px solid #febdbd;
    border-top: 6px solid #d22828;
    width: 50px;
    height: 50px;
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