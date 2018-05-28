import React, {Component} from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component
{

    constructor(props) {
        super(props);
        this.lastCategory = null;
    }

    renderRows(product, i) {
            if (product.category !== this.lastCategory) {
                this.lastCategory = product.category;
                    return(
                    <React.Fragment key = {i}>
                    <ProductCategoryRow
                    category= {product.category}
                    key = {`cat-${i}`}/>
                    <ProductRow
                    product = {product}
                    key = {i}
                />

                </React.Fragment>)

            }
            return(<ProductRow
                    product = {product}
                    key = {i}
                />)
    }
    stockOnly(current, index) {
        if (current.stocked) {
            return current;
        }
    }
    render() {
        let {products} = this.props;
        if (this.props.isStockOnly) {
            products = products.filter(this.stockOnly);
        }
        let results = [];
        if (this.props.filtertext !== '') {
            products.filter(product => {
                let regex = RegExp('^'+this.props.filtertext+'.*', 'i');
                if (regex.test(product.name)) {
                    results.push(product);
                }
            });
        } else {
            results = products;
        }

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
                    {results.map(this.renderRows.bind(this))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;