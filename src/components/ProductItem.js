import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Product from './Product'
import './ProductItem.css'

const ProductItem = ({ product, onAddToCartClicked }) => {
  return (
    <div className="prodBox">
      <Product
        img={product.img}
        title={product.title}
        price={product.price}
        inventory={product.inventory} />
      <FloatingActionButton
        mini
        className="addToCart"
        backgroundColor="white"
        iconStyle={{color: "#333"}}
        // icon={<i className="material-icons md-light">add_shopping_cart</i>}
        // label={product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        // labelStyle={{color: 'white', fontSize: '12px'}}
        // buttonStyle={{borderRadius: '50%'}}
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? false : true}>
        <i className="material-icons md-light">add_shopping_cart</i>
    </FloatingActionButton>
  </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem