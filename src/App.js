import React from 'react';

import BusinessList from '../src/components/BusinessList/BusinessList';
import SearchBar from '../src/components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

import background from './assets/background.jpg';
import title from './assets/logo.png';
import logo from './assets/fd.svg';

import styled, {css} from 'styled-components';

const StyledHero = styled.main`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background});
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 200px;
  margin-right: 15px;
`;

const StyledLogoImg = styled.img`
  width: 60px;
  stroke: 1px #fff;
`;

/*
const business = {

  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
}

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business,
];
*/

class App extends React.Component {
 state = {
      businesses: []
    }

  searchYelp = (term, location,sortBy) => {

    //console.log(`Searching ${term} in location: ${location}, sorted by: ${sortBy}`);
    Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses });
    });
  }

  render(){
    return (
      <div className="App">
        <StyledHero>
          <div>
            <StyledLogo src={title} alt="ravenous"/>
            <StyledLogoImg src={logo} alt="ravenous"/>
          </div>
          <SearchBar searchYelp={this.searchYelp}/>
        </StyledHero>
        <div>
          <BusinessList businesses={this.state.businesses}/>
        </div>
      </div>
    );
  }
}

export default App;
