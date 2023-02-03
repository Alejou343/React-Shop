import React, { useContext, useState } from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import addedToCartIcon from '@icons/bt_added_to_cart.svg';
import ProductDetail from '../containers/ProductDetail';

const ProductItem = ( {product} ) => {
	const { addToCart } = useContext(AppContext);

	const [added, setAdded] = useState(true);

	const [toggleDetail, setToggleDetail] = useState(false);
	
	const handleClick = item => {addToCart(item), setAdded()};

	return (
		<div className="ProductItem">
			<img src= {product.images[0]} alt={product.title} onClick = {() => setToggleDetail(!toggleDetail)}/>
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					{added ? <img src= {addToCartIcon} alt="" /> : <img src = {addedToCartIcon} alt= "" />  }
							
				</figure>
			</div>
			{toggleDetail ? <ProductDetail product = {product} toggleDetail = {toggleDetail} setToggleDetail = {setToggleDetail}/> : ""}
		</div>
	);
}

export default ProductItem;
