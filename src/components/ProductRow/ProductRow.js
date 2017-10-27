import React, { Component } from 'react'

class ProductRow extends Component {

    render() {
        const { product } = this.props
        const productNameDisplay = product.stocked ?
            product.name :
            <span style={{color: 'red'}}>
                { product.name }
            </span>

        return (
            <tr>
                <td>
                    { productNameDisplay }
                </td>
                <td>
                    { product.price }
                </td>
            </tr>
        )
    }

}

export default ProductRow