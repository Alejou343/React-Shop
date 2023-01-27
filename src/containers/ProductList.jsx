import React from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../Hooks/useGetProducts';
import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(producto => (<ProductItem product= {producto} key = {producto.id}/>))} {/*La petición a la API retorna products, y estos se renderizan*/}
				
			</div>
		</section>
	);
}

export default ProductList;
