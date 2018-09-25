import React from 'react';
import './Level2.css';

const Control2 = ({spell_input, spell_submit}) => {
	return (
		<section style={{width:"99%"}}>

			<div className = "control_question2">
				<div className = "control_mission2">
				  	<p>Watch out! Another drogons are coming!!!</p>
				</div>
				<div className = "control_form2">
					<p className = "hint2">Here's a list of spells</p>
					<ol>
						<li>justify-content : flex-start</li>
						<li>justify-content : flex-end</li>
						<li>justify-content : center</li>
						<li>justify-content : space-between</li>
						<li>justify-content : space-around</li>
					</ol>
					<p className = "hint2">Don't forget to finish with semicolon &#59; </p>
						<p>#fire_spell &#123;</p>
						<p>display: flex;</p>
						<section>
							<textarea className = "control_input" type = "input" onChange={spell_input} autoFocus={true} required={true}/>
							<p>&#125;</p>
							<div className = "control_submit">
							<button onClick={()=>spell_submit("solution2")}>Next</button>
							</div>
						</section>
				</div>

			</div>
		</section>
		);
}

export default Control2;
