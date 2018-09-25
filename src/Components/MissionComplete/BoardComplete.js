import React from 'react';
import './Level0.css';

const BoardComplete = () => {
	return (
		<section style={{width:"99%"}}>
			<div className = "certificate">

				<div style={{border: "10px soild black", padding:8}}>

					<div style={{border: "5px soild black", padding:5}}>

					   <p style={{fontSize:20}}>Certificate of Completion</p>
					   <br/><br/>
				       <span style={{fontSize:15}}><i>This is to certify that</i></span>
				       <br/><br/>
				       <span style={{fontSize:10}}><b>Your Name</b></span><br/><br/>
				       <span style={{fontSize:15}}><i>has completed the course</i></span> <br/><br/>
				       <span style={{fontSize:10}}>ZTM CSS Grid Master</span> <br/><br/>
				       <span style={{fontSize:10}}>with score of <b>1000 points</b></span> <br/><br/><br/><br/>
				       <span style={{fontSize:15}}><i>dated Sep 24 2018</i></span><br/> 
					</div>
				</div>
			</div>
			<div>
			<button>Post to Discord</button>
			</div>
			<div>
			<button>Send via email</button>
			</div>
		</section>
		);
}

export default BoardComplete;

