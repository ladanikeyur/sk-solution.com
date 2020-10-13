import React from 'react';
import Cdata from './Cdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


const Card = () =>{
	return(
<>
	<div className="row">
		{

			Cdata.map((Cdata) =>{
				return <div className="col-sm-4" id="card">
							<div className="card pt-5 pb-3 mt-5">
								<div className="img-circle d-block m-auto pt-3">
									<div className="circle">
										<FontAwesomeIcon icon={"cdcs"} />

									</div>
								</div>
								<div className="card-body">
									<h3 className="card-title text-center abt-text mb-3 mt-3">{Cdata.heding}</h3>
									<p>{Cdata.para}</p>
								</div>
							</div>
						</div> 
			})
		}
	</div>
</>
		);
}

export default Card;