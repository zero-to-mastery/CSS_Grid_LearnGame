import React from 'react';
import ZTM_Logo from './img/ZTM.jpg'

const Header = ({level, score}) => {
	return (
		<section className = "header_section">

			<div style={{margin: 0, display:"flex", alignItems:"center"}}>
			<img style = {{borderRadius:10, marginRight:"1rem"}} src={ZTM_Logo} alt="Zero To Mastery Community" height={30} />
			Zero To Mastery Community
			</div>
			<div className = "header_section_right">
				<p style={{margin: 0}}>
				<span>LEVEL : <span style={{color:"gold"}}>{level}</span></span>
				<span style={{marginLeft : "2rem"}}>SCORE : <span style={{color:"gold"}}>{score}</span></span>
				</p>
				<button className = "record_btn" style={{marginLeft:"2rem"}}>Record</button>

			</div>

		</section>
		);
}

export default Header;

