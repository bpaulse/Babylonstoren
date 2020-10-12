import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from "../actions/types";

const initialState = {
	basketNumbers: 0,
	cartCost: 0,
	products: {
		greyTshirt: {
			name: 'Grey Tshirt',
			tagName: 'greyTshirt',
			price: 12.00,
			numbers: 0,
			inCart: false
		},
		greyHoddie: {
			name: 'Grey Hoddie',
			tagName: 'greyHoddie',
			price: 50.00,
			numbers: 0,
			inCart: false
		},
		blackTshirt: {
			name: 'Black Tshirt',
			tagName: 'blackTshirt',
			price: 11.00,
			numbers: 0,
			inCart: false
		},
		blackHoddie: {
			name: 'Black Hoddie',
			tagName: 'blackHoddie',
			price: 40.00,
			numbers: 0,
			inCart: false
		}
	}
}

export default (state = initialState, action) => {
	let productsSelected = "";
	switch (action.type) {
		case ADD_PRODUCT_BASKET:
			productsSelected = { ...state.products[action.payload]};
			
			productsSelected.numbers += 1;
			productsSelected.inCart = true;
			console.log(productsSelected);

			return {
				...state,
				basketNumbers: state.basketNumbers + 1,
				cartCost: state.cartCost + state.products[action.payload].price,
				products: {
					...state.products,
					[action.payload]: productsSelected
				}
			}
		case GET_NUMBERS_BASKET:
			return {
				...state
			}
		case INCREASE_QUANTITY:
			productsSelected = { ...state.products[action.payload]}

			productsSelected.numbers += 1;
			return {
				...state,
				basketNumbers: state.basketNumbers + 1,
				cartCost: state.cartCost + state.products[action.payload].price,
				products: {
					...state.products,
					[action.payload]: productsSelected
				}
			}
		case DECREASE_QUANTITY:
			productsSelected = { ...state.products[action.payload]}

			let newCartCost = 0;
			let newBasketNumbers = 0;
	
			if ( productsSelected.numbers === 0 ){
				productsSelected.numbers = 0;
				newCartCost = state.cartCost;
				newBasketNumbers = state.basketNumbers;
			} else {
				productsSelected.numbers -= 1;
				newCartCost = state.cartCost - state.products[action.payload].price;
				newBasketNumbers = state.basketNumbers - 1;
			}
	
			// productsSelected.numbers -= 1;
			return {
				...state,
				// basketNumbers: state.basketNumbers - 1,
				basketNumbers: newBasketNumbers,
				cartCost: newCartCost,
				products: {
					...state.products,
					[action.payload]: productsSelected
				}
			}
		case CLEAR_PRODUCT:
			productsSelected = { ...state.products[action.payload]};
			let numbersBackup = productsSelected.numbers;
			productsSelected.numbers = 0;
			productsSelected.inCart = false;
			return {
				...state,
				basketNumbers: state.basketNumbers - numbersBackup,
				cartCost: state.cartCost - (numbersBackup * productsSelected.price),
				products: {
					...state.products,
					[action.payload]: productsSelected
				}
			}
		default: 
			return state;
	}
}