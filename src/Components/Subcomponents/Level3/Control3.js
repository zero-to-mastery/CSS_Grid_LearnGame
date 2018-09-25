import React from 'react';
import './Level3.css';

const Control3 = ({spell_input, spell_submit}) => {
	return (
		<section style={{width:"99%"}}>

			<div className = "control_question3">
				<div className = "control_mission3">
				  	<p></p>
				</div>
				<div className = "control_form3">
					<p className = "hint3">It seems you need to spell mutiple times(2 lines)</p>
					<p className = "hint3">Here's another list of spells</p>
					<ol style={{fontSize: "0.9rem"}}>
						<li>align-items : flex-start</li>
						<li>align-items : flex-end</li>
						<li>align-items : center</li>
						<li>align-items : baseline</li>
						<li>align-items : stretch</li>
					</ol>
					<p className = "hint3">Don't forget to finish with semicolon &#59; </p>
						<p>#fire_spell &#123;</p>
						<p>display: flex;</p>
						<section>
							<textarea column={3} className = "control_input" type = "input" onChange={spell_input} autoFocus={true} required={true}/>
							<p>&#125;</p>
							<div className = "control_submit">
							<button onClick={()=>spell_submit("solution3")}>Next</button>
							</div>
						</section>
				</div>

			</div>
		</section>
		);
}

export default Control3;
