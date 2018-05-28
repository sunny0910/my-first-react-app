import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            filtertext: '',
            isStockOnly : false,
            data: []
        };
        this.searchText = this.searchText.bind(this);
        this.checkbox = this.checkbox.bind(this);
    }

    async componentWillMount() {
        const res = await fetch('/data.json');
        const data = await res.json()
            this.setState({
                data
        });

    }

    searchText(e) {
        this.setState({
            filtertext: e.target.value
        });
    }

    checkbox(e) {
        this.setState((prevState) => ({
            isStockOnly: !prevState.isStockOnly
        }));
    }

    render() {
        let ret = (
            <div id = 'maintable'>
            <SearchBar
                filtertext = {this.state.filtertext}
                isStockOnly = {this.state.isStockOnly}
                searchText = {this.searchText}
                checkbox = {this.checkbox}
            />
            <ProductTable
            products = {this.state.data}
            filtertext = {this.state.filtertext}
            isStockOnly = {this.state.isStockOnly}
            />
            </div>
        );
        return ret;
    }
}

export default FilterableProductTable;