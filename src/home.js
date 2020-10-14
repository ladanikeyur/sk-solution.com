import React from 'react';
import homeimg from './img/home1.gif';
import ScrollAnimation from 'react-animate-on-scroll'

const Home = () =>{

	return(
		<>
			<ScrollAnimation animateIn="jello" duration={2} animateOnce={true}>
			<div className='row homediv mb-5' id="hom">
				<div className=" col-sm-5 homefont">
					<h1 className="hometext">Better experince<br/> with us .</h1>
					<p className="p-text">We are team of talented in Digital <br/> Marketing,Website Design, Web development</p>
				</div>
				<div className="col-sm-7">
					<img src={homeimg} alt='not ' className='img-fluid aboutimg'/>
				</div>
			</div>
			</ScrollAnimation>
		</>
		);
}

export default Home;
