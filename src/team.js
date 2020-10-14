import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';



const Team =() =>{
	return(
			<>
			<div className="bg-service" id="tim">
				<h1 className="text-center abt-text"> Team </h1> 
				<div className=" container pb-5">
				<div className="row">
					<div className="col-sm-4 card-aling m-auto d-block">
						<ScrollAnimation animateIn="bounceInLeft" initiallyVisible={false} duration={1.7} animateOnce={true}>
						<div className="card mt-5 pt-3" style={{width:"300px"}}>
							<div className=" d-block m-auto pt-3">
								<div>
									<img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXp3DxP80ArpRzsB0XWBG9Ow5GeuefbLrUHw&usqp=CAU" />
								</div>
							</div>
							<div className="card-body">
								<h3 className="card-title text-center abt-text mb-3 mt-3">
									Keyur Ladani
								</h3>
								<p className="text-center">(CEO)</p>
							</div>
						</div>
						</ScrollAnimation>
					</div>
					 animateOnce={true}
					<div className="col-sm-4 card-aling mr-auto d-block">
						<ScrollAnimation animateIn="bounceInRight" initiallyVisible={false} duration={1.7} animateOnce={true}>
						<div className="card  mt-5 pt-3 " style={{width:"300px"}}>
							<div className=" d-block m-auto pt-3">
								<div>
									<img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXp3DxP80ArpRzsB0XWBG9Ow5GeuefbLrUHw&usqp=CAU"/>
								</div>
							</div>
							<div className="card-body">
								<h3 className="card-title text-center abt-text mb-3 mt-3">Yash Khanapara</h3>
								<p className="text-center">(Managing-director)</p>
							</div>
						</div>
						</ScrollAnimation>
					</div>
				</div>
				</div>
				</div>
			</>

		);
}
export default Team ;