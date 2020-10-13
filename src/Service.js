import React from 'react';
import Card from './Card';


const Service = (props) =>{
	return(
			<>
			<div className="bg-service pt-5 pb-5" id="ser">
				<div className="container">
					<h1 className="text-center abt-text"><u>Service</u></h1>
					<p className="text-center">Our company to Provide Web design and Web Development , all languges Services to the your industry with highest Satisfaction</p>
					<Card />
				</div>
			</div>
			</>
		);
}

export default Service;