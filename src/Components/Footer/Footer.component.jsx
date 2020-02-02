import React from 'react';
import './Footer.styles.css';
import ZTM_Logo from '../../assets/img/ZTM.jpg'

const FooterComponent = () => {
	return (
		<section className = "footer_section">
 		  <div className = "footer_section_left">	
			<img style = {{borderRadius:10}} src={ZTM_Logo} alt="Zero To Mastery Community" height={100} />
 		  </div>
 		  <div>
 		  	<p style={{fontSize : "1.2rem", margin: 0, color: "goldenrod"}}>Zero To Mastery Community </p>

		 		  	<div style={{margin: "1.2rem 0"}}>
		 		  		<a className = "footer_links" href="https://zerotomastery.io/">Community Website</a>
		 		  	</div>
		 		  	<div style={{margin: "1.2rem 0"}}>
		 		  		<a className = "footer_links" href="https://github.com/zero-to-mastery">Community Github</a>
		 		  	</div>
		 		  	<div style={{margin: "1.2rem 0"}}>
		 		  		<a className = "footer_links" href="https://zero-to-mastery.github.io/ZtM-Job-Board/">Community Job Board</a>
		 		  	</div>

 		  </div>
		</section>
		);
}

export default FooterComponent;
