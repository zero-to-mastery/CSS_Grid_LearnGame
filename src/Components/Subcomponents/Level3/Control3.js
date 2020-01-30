import React from 'react';
import './Level3.css';

const Control3 = ({spell_input, spell_submit, level}) => {

	//to make classnames dynamic to the level value.
	const levelValue = String(level);
	const solutionNum = "solution" + levelValue;

	return (
		<section>

			<div className = "control_question">
				<div className = "control_mission">
				  	<p>&nbsp;</p>
				</div>
				<div className = "control_form">
					<p className = "hint">It seems you need to spell mutiple times(2 lines)</p>
					<p className = "hint">Here's another list of spells</p>
					<ol style={{fontSize: "0.9rem"}}>
						<li>align-items : flex-start</li>
						<li>align-items : flex-end</li>
						<li>align-items : center</li>
						<li>align-items : baseline</li>
						<li>align-items : stretch</li>
					</ol>
					<p className = "hint">Don't forget to finish with semicolon &#59; </p>
						<p>#fire_spell &#123;</p>
						<p>display: flex;</p>
						<section>
							<textarea column={3} className = "control_input" type = "input" onChange={spell_input} autoFocus={true} required={true}/>
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

export default Control3;
