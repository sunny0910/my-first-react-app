import React, {Component} from 'react';
import SearchBar from './SearchBar';
import './ProductTable';
import './ProductCategoryRow';
import './ProductRow';
import ProductTable from './ProductTable';
// import * as jsondata from './../data.js';

class FilterableProductTable extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            filtertext: '',
            isStockOnly : false
        };
    }
    render()
    {
        // let data = jsondata.getData();
        // console.log(data);
        let data = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
            ];
        let ret = (
            <div id = 'maintable'>
            <SearchBar 
                filtertext = {this.state.filtertext}
                isStockOnly = {this.state.isStockOnly}
            />
            <ProductTable 
            products = {data}
            filtertext = {this.state.filtertext}
            isStockOnly = {this.state.isStockOnly}
            />
            </div>
        );
        return ret;
    }
}

export default FilterableProductTable;