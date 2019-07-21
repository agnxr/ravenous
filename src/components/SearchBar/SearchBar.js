import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled, {css} from 'styled-components';
import glass from '../../assets/magnifying-glass.svg';
import goal from '../../assets/goal.svg';
import star from '../../assets/star.svg';
import review from '../../assets/testimonial.svg';

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLabel = styled.label`
    color: #666;
    background-color: #fff;
    padding: 0 20px;
    display: flex;
    align-items: center;
    height: 45px;
    font-weight: bold;
    font-size: 20px;
    &:nth-child(2) {
        border-radius: 4px 0 0 4px;
    }
    @media (max-width: 648px) {
        display: none;
    }
`;

const StyledInput = styled.input`
    font-family: 'Quicksand', sans-serif;
    background-color: #fff;
    border: none;

    max-width: 25vw;
    color: #666;
    font-size: 20px;
    padding: 10px 20px;
    margin-bottom: 10px;
    ::placeholder {
        color: #ccc; 
    }
    &:nth-child(2) {
        border-right: 1px solid #ccc;
    }
    &:nth-child(3) {
        border-left: 1px solid #ccc;
    }
`;

const StyledSubmit = styled(AnchorLink)`
    display: flex;
    justify-content:center;
    align-items: center;

  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  background-color: #d22828;
  cursor: pointer;

  width: 65px;
  height: 45px;
  font-size: 20px;
  transition: 1s;
    &:hover {
        background-color: #bd2525;
    }
`;

const StyledImg = styled.img`
  width: 25px;
`;

const StyledSortOptions = styled.div`
    font-family: 'Quicksand', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: center;
    font-weight: bold;
    line-height: 50px;
    @media (max-width: 768px) {
        line-height: 10px;
    }

`;

const StyledOptions = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
        flex-direction: column;
    }
`;


const StyledBtn = styled.button`
    padding: 20px;
    border: 1px solid #03175b;
    background-color: #fff;
    margin: 20px;
    margin-top: -10px;
    border-radius: 25px;
    letter-spacing: 3px;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
    ${({active}) => (
        active && css `
        border: 3px solid #030221;
        `
    )}
`;

const StyledOption = styled.li`
    list-style: none;
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    &:hover {
        text-decoration: underline;
    }

    cursor: pointer;
    ${({active}) => (
        active && css `
        font-weight: bold;
        text-decoration: underline;
        `
    )}
`;



const StyledAlert = styled.p`
text-align: center;
color: #fff;
margin-bottom: 10px;
font-style: italic;
opacity: 0.8;
`;

const OptionImg = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    &:first-child {
        border-radius: 4px 0 0 4px;
    }
`;

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
    
};


class SearchBar extends React.Component {
    state = {
        term: '',
        location: '',
        sortBy: 'best_match',
        alertText: '',
    }

    getSortByClass = (sortByOption) => {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } 
        return '';
    };

    handleTermChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    handleLocationChange = (event) => {
        this.setState({ 
            location: event.target.value
        });
    }

    handleSearch = (event) => {
        this.setState({
            alertText: ''
        })
        if (this.state.term.length < 1 || this.state.location.length < 1 ) {
            this.setState({alertText: "Please fill out both fields."})  
        } else if (event.key === 'Enter' || event.type === 'click') {
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
            event.preventDefault(); 
        } 
    }


    hadnleSortByChange = (sortByOption) => {
        
        this.setState({sortBy: sortByOption});
        
        if (this.state.term && this.state.location) {
            this.setState({
                alertText: ''
            })
            this.props.searchYelp(
                this.state.term, 
                this.state.location, 
                sortByOption
            );     
        } else {
            this.setState({
                alertText: "Please fill out both fields."
            })
        }
    }





    renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
 <StyledOption 
 key={sortByOptionValue} 
 
 onClick={this.hadnleSortByChange.bind(this,sortByOptionValue)}


 active={this.state.sortBy === sortByOptionValue ? true : false }
 >
 <OptionImg 
 src={
     sortByOptionValue === 'best_match' ? goal : 
     sortByOptionValue === 'rating' ? star: review
     } 
 alt={sortByOptionValue}/>
 {sortByOption}
 </StyledOption>
            )
           
        });
      }


    render(){
        return (
            <div className="SearchBar">
                <StyledAlert>{this.state.alertText}</StyledAlert>
                <StyledForm>
                    <StyledLabel for="name">Find</StyledLabel>
                    <StyledInput 
                        name="name" 
                        id="name" 
                        onKeyPress={this.handleSearch} 
                        onChange={this.handleTermChange} 
                        placeholder="burgers, pizza, bars..." 
                    /> 

                    <StyledLabel for="location">Near</StyledLabel>
                    <StyledInput 
                        name="location" 
                        id="location" 
                        onKeyPress={this.handleSearch} 
                        onChange={this.handleLocationChange} 
                        placeholder="Warsaw, PL" 
                    />
                
                    <StyledSubmit href='#items' onClick={this.handleSearch} type="submit" value=" "><StyledImg src={glass} alt="ravenous"/></StyledSubmit>
                </StyledForm>
                <StyledSortOptions>
                    <StyledOptions>
                        {this.renderSortByOptions()}
                    </StyledOptions>
                </StyledSortOptions>

            </div>
        );
    }

}

export default SearchBar;