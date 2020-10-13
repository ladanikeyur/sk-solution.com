import React from 'react';
import aboutimg from './img/aboutus.png';
import ScrollAnimation from 'react-animate-on-scroll';

const About = () =>{

	return(
		<>	
  
			<ScrollAnimation animateIn="zoomInDown" initiallyVisible={false} duration={1.8}>
			<div className='row container-fluid mt-5' id="abt">
				<div className='col-md-7'>
					<img src={aboutimg} alt='not' className='abtimg img-fluid' />
				</div>
				<div className='col-md-5 aboutus' >
					<h1 className='pb-3 abt-text'> About US </h1>
					<p className="">Our IT company which has skills and 
					expertise to facilitate complex business solutions. We offer services of entire  web development and Creative Design from the very beginning until the end.
					 Our overall proces includes concept, design, development, incorporation, 
					 and implementation. We have a squad of experts, who are working on modern technologies 
					 and tools with vast experience to carry out web based projects, e-commerce 
					 , programming scripting languages like ReactJS, AngularJS, NodeJS, Asp.Net,
					  MySql, JQuery, Ajax, CSS, HTML, Bootstrap, WordPress standards.</p>
				</div>
			</div>
			</ScrollAnimation>
		</>
		);
}

export default About;