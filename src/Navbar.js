import React ,  {useState} from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-scroll';

const Navbar = () =>{

 const [click , onclick] = useState(false);

	const navclick = (e) =>{
		e.preventDefault();
		onclick(!click);
	};
	return(
		<>
			<nav className='navbar navbar-expand-md text-white sticky-top'>
				<Link className="navbar-brand text-white" to="hom" smooth={true} duration={1000} >YK</Link>
				<button onClick={(e)=>navclick(e)} className='navbar-toggler' data-toggle='collapse' data-target='#navbtn'>
					<span className='navbar-toggler-icon'>
						{click ? <CloseIcon/>:<DehazeIcon />}	
					</span>
				</button>
				<div  className='collapse navbar-collapse' id='navbtn'>
					<ul className="navbar-nav ml-auto navabarcolor">
				      <li className="nav-item">
				        <Link className="nav-link" to="hom" smooth={true} duration={1000}>Home</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="abt" smooth={true} duration={1000}>About</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="ser" smooth={true} duration={1000}>Service</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="tim" smooth={true} duration={1000}>Team</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="con" smooth={true} duration={1000} >Contact</Link>
				      </li>
				    </ul>
				</div>

			</nav>
		</>
		);
}

export default Navbar;