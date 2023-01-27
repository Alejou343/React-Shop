import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);

	useEffect(async () => {								//Función asíncrona para hacer llamado a la API
		const response = await axios(API);				//response es el resultado de la petición a la API
		setProducts(response.data);						//Asigna al estado el resultado de la petición de la API
	}, []);

	return products;
};

export default useGetProducts;