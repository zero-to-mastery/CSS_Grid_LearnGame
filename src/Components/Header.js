import React from 'react';

const Header = ({level, score}) => {
	return (
		<section className = "header_section">
			<div style={{margin: 0}}>
			ZTM
			</div>
			<div className = "header_section_right">
				<p style={{margin: 0}}>
				<span>LEVEL : <span style={{color:"gold"}}>{level}</span></span>
				<span style={{marginLeft : "2rem"}}>SCORE : <span style={{color:"gold"}}>{score}</span></span>
				</p>
				<button style={{marginLeft:"2rem"}}>Record</button>

			</div>

		</section>
		);
}

export default Header;

