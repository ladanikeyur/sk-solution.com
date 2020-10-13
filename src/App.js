import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


import Navbar 	from './Navbar';
import Home 	from './home';
import About 	from './About';
import Client	from './Client';
import Service 	from './Service';
import Cdata 	from './Cdata';
import Team 	from './team';
import Contact 	from './Contact';
import Maps		from './Map';
import Footer	from './Footer';

	

const App = (props) =>{
	return(
		<>
			<Navbar />
			<Home />
			<About />
			<Client />
			<Service />
			<Team />
			<Contact />
			<Maps />
			<Footer />
		</>
		);
}

export default App;