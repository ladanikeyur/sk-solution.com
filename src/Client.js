import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import ScrollAnimation from 'react-animate-on-scroll'; 

const Client = () =>{

	return(
		<>
		<ScrollAnimation animateIn="bounceIn" initiallyVisible={false} duration={3} animateOnce={true}>
			<div className='client-div client-bg mt-5'>
				<div className="container">
					<div className='row text-center text-light'>
						<div className='col-sm-3'>
						<h2 className="fontsiz"> <CountUp end={100} redraw={true}>
      					  {({ countUpRef, start }) => (
            				<VisibilitySensor onChange={start} delayedCall>
                				<span ref={countUpRef} />
            				</VisibilitySensor>
        					)}
    						</CountUp>+</h2>
						<h5>client</h5>
						</div>
						<div className='col-sm-3'>
						<h2 className="fontsiz"><CountUp end={75} redraw={true}>
      					  {({ countUpRef, start }) => (
            				<VisibilitySensor onChange={start} delayedCall>
                				<span ref={countUpRef} />
            				</VisibilitySensor>
        					)}
    						</CountUp>+</h2>
						<h5>project</h5>
						</div>
						<div className='col-sm-3'>
						<h2 className="fontsiz"><CountUp end={2000} redraw={true}>
      					  {({ countUpRef, start }) => (
            				<VisibilitySensor onChange={start} delayedCall>
                				<span ref={countUpRef} />
            				</VisibilitySensor>
        					)}
    						</CountUp>+</h2>
						<h5>hour</h5>
						</div>
						<div className='col-sm-3'>
						<h2 className="fontsiz"><CountUp end={89} redraw={true}>
      					  {({ countUpRef, start }) => (
            				<VisibilitySensor onChange={start} delayedCall>
                				<span ref={countUpRef} />
            				</VisibilitySensor>
        					)}
    						</CountUp>+</h2>
						<h5>hard work</h5>
						</div>
					</div>
				</div>
			</div>
			</ScrollAnimation>
		</>

		);
	}


export default Client;