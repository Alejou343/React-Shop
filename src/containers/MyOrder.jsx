import React, { useContext, useState } from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import AppContext from '../context/AppContext';

import flechita from '@icons/flechita.svg';

const MyOrder = ({toggleOrders, setToggleOrders}) => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0)
		return sum;
	}
	
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src= {flechita} alt="arrow" onClick = {() => {setToggleOrders(!toggleOrders)}} />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (<OrderItem product = {product} key = {`orderItem-${product.id}`} />))}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<a href = '/checkout' >
				<button className="primary-button"  > Checkout
				</button>
				</a>
			</div>

		</aside>
	);
}

export default MyOrder;