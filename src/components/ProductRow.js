import React, {Component} from 'react';

class ProductRow extends Component
{
    render() {
        let product = this.props.product;
        let name = product.stocked?product.name:<span style={{color: 'red'}}>{product.name}</span>;
        let price = product.price;
        return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        );
    }
}
export default ProductRow;