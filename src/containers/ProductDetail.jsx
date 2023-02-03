import React, { useContext, useState } from 'react';
import ProductInfo from '../components/ProductInfo';


import '../styles/ProductDetail.scss';

import closeIcon from '@icons/icon_close.png';

const ProductDetail = ({product, toggleDetail, setToggleDetail}) => {

	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close" onClick = {() => setToggleDetail(!toggleDetail)}>
				<img src= {closeIcon} alt="close" />
			</div>
			<ProductInfo product = {product}/>
		</aside>
	);
}

export default ProductDetail;
