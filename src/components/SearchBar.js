import React, {Component} from 'react';

class SearchBar extends Component
{
    constructor(props) {
        super(props);
        console.log(this.props.filtertext);
        this.searchText = this.searchText.bind(this);
    }
    searchText(e) {
        this.setState({
            filtertext: this.search
        });
        console.log(e.target);
    }
    render() {
        let seachbar = (
        <div id= 'searchbardiv'>
            <input type = 'text' name= 'search' placeholder= 'Search...' id='searchbar' onKeyDown={this.searchText} value={this.props.filtertext} />
            <div id='checkboxdiv'>
                <input type = 'checkbox' id='checkbox' checked={this.props.inStockOnly}/>
                <p>Only show products that are in stocks</p>
            </div>
        </div>
    );
        return seachbar;
    }
}

export default SearchBar;