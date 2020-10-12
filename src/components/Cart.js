import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';

import greyTShirt from '../images/greytshirt.jpg';
import blackTShirt from '../images/blacktshirt.jpg';
import greyHoddie from '../images/greyhooddie.jpg';
import blackHoddie from '../images/blackhooddie.jpg';

function Cart({basketProps, productQuantity, clearProduct}) {
	console.log(basketProps);

	let productsInCart = [];

	Object.keys(basketProps.products).forEach( function(item, key){
		console.log(key);
		console.log(item);
		console.log(basketProps.products[item].inCart);

		if ( basketProps.products[item].inCart ) {
			productsInCart.push(basketProps.products[item])
		}

		console.log(productsInCart);

	});

	// const productImages = [greyTShirt, blackTShirt, greyTShirt, greyHoddie];

	const productImages = (product) => {

		if ( product.tagName === 'greyTShirt' ) {
			return greyTShirt;
		} else if  ( product.tagName === 'greyHoddie' ) {
			return greyHoddie;
		} else if  ( product.tagName === 'blackTShirt' ) {
			return blackTShirt;
		} else if  ( product.tagName === 'blackHoddie' ) {
			return blackHoddie;
		}

	}

	productsInCart = productsInCart.map( (product, index) => {
		console.log("My product is ");
		console.log(product);
		return (
			<Fragment key={index}>
				<div className="product"><ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle-outline"></ion-icon><img src={productImages(product)} />
					<span className="sm-hide">{product.name}</span>
				</div>
				<div className="price sm-hide">R{product.price}.00</div>
				<div className="quantity">
					<ion-icon onClick={() => productQuantity('decrease', product.tagName) } className="decrease" name="arrow-back-circle-outline"></ion-icon>
					<span>{product.numbers}</span>
					<ion-icon onClick={() => productQuantity('increase', product.tagName) } className="increase" name="arrow-forward-circle-outline"></ion-icon>
				</div>
				<div className="total">R{product.numbers * product.price}.00</div>
			</Fragment>
		)
	} );

	return (
		<div className="container-products">
			<div className="product-header">
				<h5 className="product-title">PRODUCT</h5>
				<h5 className="price sm-hide">PRICE</h5>
				<h5 className="quantity">QUANTITY</h5>
				<h5 className="total">TOTAL</h5>
			</div>
			<div className="products">
				{ productsInCart }
			</div>
			<div className="basketTotalContainer">
				<h4 className="basketTotalTitle">Basket Total</h4>
				<h4 className="basketTotal">R{basketProps.cartCost}.00</h4>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	basketProps: state.basketState
});

// export default Cart;
export default connect(mapStateToProps, {productQuantity, clearProduct})(Cart);
