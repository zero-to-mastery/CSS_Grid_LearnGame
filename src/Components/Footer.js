import React from 'react';
import ZTM_Logo from './img/ZTM.jpg'

const Footer = () => {
	return (
		<section className = "footer_section">
 		  <div className = "footer_section_left">	
 		  	  <p>Zero To Mastery Community </p>
			  <img style = {{borderRadius:10}} src={ZTM_Logo} alt="Zero To Mastery Community" height={80} />
 		  </div>
		</section>
		);
}

export default Footer;
