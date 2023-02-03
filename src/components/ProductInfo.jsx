import React, { useContext }  from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProductInfo.scss';

import addToCartIcon from '@icons/bt_add_to_cart.svg';

const ProductInfo = ( {product} ) => {

	const { addToCart } = useContext(AppContext);

	const handleClicks = item => {addToCart(item)}

	return (
		<>
			<img src={product.images[0]} alt={product.title} />
			<div className="ProductInfo">
				<p>${product.price}</p>
				<p>{product.price}</p>
				<p>{product.description}</p>
				<button className="primary-button add-to-cart-button" onClick = {() => handleClicks(product)}>
					<img src= {addToCartIcon} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;
