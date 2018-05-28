import React, {Component} from 'react';

class SearchBar extends Component
{
    render() {
        let seachbar = (
        <div id= 'searchbardiv'>
            <input type = 'text' name= 'search' placeholder= 'Search...' id='searchbar' onChange={this.props.searchText} value={this.props.filtertext} />
            <div id='checkboxdiv'>
                <input type = 'checkbox' id='checkbox' checked={this.props.isStockOnly} onChange={this.props.checkbox}/>
                <p>Only show products that are in stocks</p>
            </div>
        </div>
    );
        return seachbar;
    }
}

export default SearchBar;