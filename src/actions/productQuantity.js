import { INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from './types';

export const productQuantity = (action, name) => {
	return (dispatch) => {
		console.log('Inside Product Quantity');
		console.log('The Action: ', action);
		console.log('The Name: ', name);

		dispatch({
			type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
			payload: name
		})

	}
}

export const clearProduct = (name) => {
	return (dispatch) => {
		console.log('Inside Clear Product');
		// console.log('The Action: ', action);
		console.log('The Product Name: ', name);

		dispatch({
			type: CLEAR_PRODUCT,
			payload: name
		})

	}

}