import React from 'react';
import glass from '../../assets/magnifying-glass.svg';
import styled, {css} from 'styled-components';


const StyledSubmit = styled.input`
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  background-color: #d22828;
  cursor: pointer;
  background-image: url(${glass});
  background-repeat: no-repeat;
  background-size: 35%;
  background-position: 20px 10px;
  width: 65px;
  height: 45px;
  font-size: 20px;
  transition: 1s;
    &:hover {
        background-color: #bd2525;
    }
`;

const StyledInput = styled.input`
    font-family: 'Quicksand', sans-serif;
  background-color: #fff;
  border: 10px solid red;
  border: none;

  min-width: 200px;
  width: 30vw;
  color: #666;
  font-size: 20px;
  
  padding: 10px 20px;
  margin-top: 60px;
  margin-bottom: 60px;
    ::placeholder {
        color: #ccc; 
    }
    &:last-child {
        border-right: 1px solid #ccc;
    }
`;

const StyledInputWrapper = styled.div`
  display: inline-block;
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

`;

const StyledOptions = styled.div`
  display: flex;
  justify-content: center;

`;

const StyledLabel = styled.label`


    color: #666;
    background-color: #fff;

    padding: 10px 20px;
    font-weight: bold;
    font-family: 'Quicksand', sans-serif;
    font-size: 20px;
    &:first-child {
        border-radius: 4px 0 0 4px;
    }

`;
const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
        };

    this.handleTermChange  = this.handleTermChange.bind(this);
    this.handleLocationChange  = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    }

    //returns the current CSS class for a sorting option -> visual feedback
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } 
        
        return '';
    };


    hadnleSortByChange(sortByOption){
        this.setState({sortBy: sortByOption});
    }

    handleTermChange(event){
        this.setState({term: event.target.value});
    }

    handleLocationChange(event){
        this.setState({ location: event.target.value});
    }

    handleSearch(event){
        if (event.key === 'Enter' || event.type === 'click') {
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
            event.preventDefault(); //prevent the default action of clicking a link from triggering at the end of the method.
        } 
    }
    

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
 <li 
 key={sortByOptionValue} 
 className={this.getSortByClass(sortByOptionValue)} 
 onClick={this.hadnleSortByChange.bind(this,sortByOptionValue)}>
 <img 
 src={this.state.img} 
 alt="Smiley face" height="42" width="42"></img>
 {sortByOption}
 </li>
            )
           
        });
      }

    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-fields">
                    <StyledInputWrapper>
                   
                        <StyledLabel for="name">Find</StyledLabel>
                        <StyledInput name="name" id="name" onKeyPress={this.handleSearch} onChange={this.handleTermChange} placeholder="burgers, pizza, bars..." /> 
                    </StyledInputWrapper>
                    <StyledLabel for="location">Near</StyledLabel>
                    <StyledInput name="location" id="location" onKeyPress={this.handleSearch} onChange={this.handleLocationChange} placeholder="Warsaw, PL" />
                    <StyledSubmit onClick={this.handleSearch} type="submit" value=" " />
                </div>
                <StyledSortOptions>
                <p>sort by:</p>
                    <StyledOptions>
                        {this.renderSortByOptions()}
                    </StyledOptions>
                </StyledSortOptions>
            </div>
        );
    }

}

export default SearchBar;