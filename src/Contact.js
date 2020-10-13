import React from 'react';
import PinDropIcon from '@material-ui/icons/PinDrop';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const Contact = () =>{
	return(
		<>
			<div className="bg-service" id="con">
				<h1 className="text-center pb-5 abt-text">Contact</h1>
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<div className="adressdiv  mb-4">
								<div className="card text-center pt-3">
								<i className="contactlogo mb-3"><PinDropIcon /></i>								
								<h4 className="abt-text">Our Address</h4>
								<p> University Road ,Rajkot </p>
								</div>
							</div>
							<div className="row emaildiv">
								<div className="col-sm-6 mb-3 text-center">
									<div className="card pb-2 pt-3"> 
									<i className="contactlogo mb-3"><EmailIcon/></i>
									<h4 className="abt-text"> Email </h4>
									<a href="https://mail.google.com/mail/u/0/#inbox" target="blank" className="card-link">yksolution@gmail.com</a>
									</div>
								</div>
								<div className="col-sm-6 text-center">
									<div className="card pt-1">
									<i className="contactlogo mb-3"><PhoneIcon/></i>
									<h4 className="abt-text"> Phone </h4>
									<a href="tel:+91 6352632409">+91 6352632409</a>
									<a href="tel:+91 9638076084">+91 9638076084</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 bg-white mb-5 border-rounded-lg">
							<form className="form form-group p-4">
								<div className="row">
									<div className="col-sm-6">
										<input className="form-control" type="email" placeholder="Your Email" required/> 
									</div>
									<div className="col-sm-6">
										<input className="form-control" type="text" placeholder="Your Name" required/> 
									</div>
								</div>
								<br/>
								<input className="form-control" type="text" placeholder="Sunject" required/>
								<br/>
								<textarea className="form-control p-3" type="text" placeholder="massage" required/>
								<button className="btn btn-primary btn-block mt-3 transition"> Send Massage</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Contact;