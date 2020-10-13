import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import {Link} from 'react-scroll';

const Footer = () =>{
	return(
		<>
			<div className="footer-bg">
				<div className="p-5">
					<div className="row">
						<div className="col-sm-4 footerlogo">
							<h1>YK</h1>
							<h5>SOLUTION</h5>
							<div className="fottericon">
								<FacebookIcon/>
								<InstagramIcon/>
								<TwitterIcon/>
								<LinkedInIcon/>
								<WhatsAppIcon/>
							</div>
						</div>
						<div className="col-sm-2">
							<h5 className="text-white mb-4">Useful Links</h5>
							<ul className=" footerlist">
								<li><Link to="hom" smooth={true} duration={1000} className="text-white"><ArrowForwardIosIcon/>  Home</Link></li>
								<li><Link to="abt" smooth={true} duration={1000} className="text-white"><ArrowForwardIosIcon/>  About</Link></li>
								<li><Link to="ser" smooth={true} duration={1000} className="text-white"><ArrowForwardIosIcon/>  Service</Link></li>
								<li><Link to="con" smooth={true} duration={1000} className="text-white"><ArrowForwardIosIcon/>  Contact</Link></li>
							</ul>
						</div>
						<div className="col-sm-2">
							<h5 className="text-white mb-4">Our Service</h5>
							<ul className=" footerlist">
								<li><Link to="card" smooth={true} duration={1000} className="text-white"><ArrowForwardIosIcon/>  Web Devlopmemt</Link></li>
								<li><Link to="card" smooth={true} duration={1000} className="text-white"><ArrowForwardIosIcon/>  Web Desining	</Link></li>
								<li><Link to="card" smooth={true} duration={1000} className="text-white"><ArrowForwardIosIcon/>  Web Domain	</Link></li>
								<li><Link to="card" smooth={true} duration={1000} className="text-white"><ArrowForwardIosIcon/>  Web Hosting	</Link></li>
								<li><Link to="card" smooth={true} duration={1000} className="text-white"><ArrowForwardIosIcon/>  SEO			</Link></li>
							</ul>
						</div>
						<div className="col-sm-4">
							<h5 className="text-white mb-4">Join Our NewsLetter</h5>
							<p className="footerpara">And don’t worry, we hate spam too! You can unsubscribe at any time.</p>
						<div className="input-group mb-3">
  								<input type="text" className="form-control"/>
  							<div className="input-group-append">
    							<button className="input-group-button btn btn-primary footerbtn">SubScribe</button>
  							</div>
						</div>
						</div>
					</div>
				</div>
					<div className="text-center">
						<p className="text-white copyright">© Copyright <strong>YK-SOLUTION</strong> . All Rights Reserved 2020</p>
					</div>
			</div>
		</>
		);
}


export default Footer;