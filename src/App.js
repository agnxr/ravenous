import React from 'react';

import BusinessList from '../src/components/BusinessList/BusinessList';
import SearchBar from '../src/components/SearchBar/SearchBar';
import Loader from '../src/components/Loader/Loader';

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

const StyledAlert = styled.div`
  background-color: red;
`;

const StyledLogoImg = styled.img`
  width: 60px;
  stroke: 1px #fff;
`;


class App extends React.Component {
 state = {
      businesses: [],
      error: '',
      showAlert: false,
      alert: "ttttttttttttttttt",
      info: 'to info'
    }


   

  searchYelp = (term, location,sortBy) => {
    this.setState({ info: '', error: '' })

    Yelp.searchYelp(term, location, sortBy)
    .then((json) => {
      if (json.length < 1) {
        this.setState({ info: 'BRAK WYNIKOW' })
      } else {
        this.setState({ businesses: json })
      }
    })
    .catch(error => this.setState({ error: `An error occured. Please try again.` }))
}



  render(){
    return (
      <div className="App">
        <StyledHero>
          <div>
            <StyledLogo src={title} alt="ravenous"/>
            <StyledLogoImg src={logo} alt="ravenous"/>
          </div>
          <Loader />
  
<StyledAlert>{this.state.error}</StyledAlert>

<StyledAlert>{this.state.info}</StyledAlert>
         
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
