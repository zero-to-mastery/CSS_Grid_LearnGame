import React from 'react';
import './Level1.css';

const Control1 = ({spell_input, spell_submit}) => {
	return (
		<section style={{width:"99%"}}>

			<div className = "control_question1">
				<div className = "control_mission1">
				  	<p>Our small ZTM town is now being attacked by the Dragons!!! We need your help. Hero! There are three types of dragons; red, blue and yellow. To slay that dragons, we need to spell fire that matches their color. Please help us now!</p>
				</div>
				<div className = "control_form1">
					<p className = "hint1">To fire at the end of the field, do this. justify-content : flex-end</p>
					<p className = "hint1">Don't forget to finish your spell with semicolon &#59; </p>
						<p>#fire_spell &#123;</p>
						<p>display: flex;</p>
						<section>
							<textarea className = "control_input" type = "input" onChange={spell_input} autoFocus={true} required={true}/>
							<p>&#125;</p>
							<div className = "control_submit">
								<button onClick={()=>spell_submit("solution1")}>Next</button>
							</div>
						</section>
				</div>

			</div>
		</section>
		);
}

export default Control1;
