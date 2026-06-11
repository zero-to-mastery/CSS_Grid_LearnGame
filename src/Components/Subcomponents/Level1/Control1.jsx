import React from 'react';
import './Level1_marked-to-delete.css';

const Control1 = ({spell_input, spell_submit, level}) => {

	//to make classnames dynamic to the level value. 
	const levelValue = String(level);
	const solutionNum = "solution" + levelValue;

	return (
		<section>

			<div className = "control_question">
				<div className = "control_mission">
				  	<p>Our small ZTM town is now being attacked by the Dragons!!! We need your help. Hero! There are three types of dragons; red, blue and yellow. To slay that dragons, we need to spell fire that matches their color. Please help us now!</p>
				</div>
				<div className = "control_form">
					<p className = "hint">To fire at the end of the field, do this. <mark style={{backgroundColor : "blue", color: "white"}}>justify-content : flex-end;</mark></p>
					<p className = "hint">Don't forget to finish your spell with semicolon &#59; </p>
						<p>#fire_spell &#123;</p>
						<p>display: flex;</p>
						<section>
							<textarea className = "control_input" type = "input" onChange={spell_input} autoFocus={true} required={true}/>
							<p>&#125;</p>
							<div className = "control_submit">
								<button className="record_btn" onClick={()=>spell_submit(solutionNum)}>Next</button>
							</div>
						</section>
				</div>
			</div>
			
		</section>
		);
};

export default Control1;
