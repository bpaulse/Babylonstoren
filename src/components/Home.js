import React from 'react';
import greyTShirt from '../images/greytshirt.jpg';
import blackTShirt from '../images/blacktshirt.jpg';
import greyHoddie from '../images/greyhooddie.jpg';
import blackHoddie from '../images/blackhooddie.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {

	// console.log(props);

	return  (
		<div className="container">
			<div className="image">
				<img className="homeImage" src={greyTShirt} alt="Grey TShirt" />
				<h4>Grey T-Shirt</h4>
				<h4>R12.00</h4>
				<a onClick={() => props.addBasket('greyTshirt')} className="AddToCart cart1" href="#">Add to Cart</a>
			</div>
			{/* <div className="image">
				<img className="homeImage" src={blackTShirt} alt="black TShirt" />
				<h4>Black T-Shirt</h4>
				<h4>R11.00</h4>
				<a onClick={() => props.addBasket('blackTShirt')} className="AddToCart cart2" href="#">Add to Cart</a>
			</div> */}
			<div className="image">
				<img className="homeImage" src={greyHoddie} alt="grey Hooddie" />
				<h4>Grey Hoddie</h4>
				<h4>R50.00</h4>
				<a onClick={() => props.addBasket('greyHoddie')} className="AddToCart cart3" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img className="homeImage" src={blackHoddie} alt="black Hooddie" />
				<h4>Black Hoddie</h4>
				<h4>R40.00</h4>
				<a onClick={() => props.addBasket('blackHoddie')} className="AddToCart cart4" href="#">Add to Cart</a>
			</div>

		</div>
	 );
}

export default connect(null,{ addBasket })(Home);