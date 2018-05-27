import React, {Component} from 'react';

class ProductCategoryRow extends Component
{
    render() {
        let category = <h3> {this.props.category} </h3>
        return (
            <tr className = 'productCategory'>
            <th colSpan = '2'>{category}</th>
            </tr>
        );
    }
}

export default ProductCategoryRow;