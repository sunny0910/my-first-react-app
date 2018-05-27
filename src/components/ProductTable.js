import React, {Component} from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component
{
    render() {
        let products = this.props.products;
        let lastCategory = null;
        let rows = [];

        products.forEach(product => {
            if (product.category != lastCategory) {
                rows.push(
                    <ProductCategoryRow 
                    category= {product.category}
                    key = {product.category}/>
                );
            }
            rows.push(
                <ProductRow
                    product = {product}
                    key = {product.name}
                />
            );
            lastCategory = product.category;
        });

        return (
            <div className = 'producttable'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;