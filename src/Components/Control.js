import React from 'react';
import Control1 from './Subcomponents/Level1/Control1';
import Control2 from './Subcomponents/Level2/Control2';
import Control3 from './Subcomponents/Level3/Control3';
import ControlComplete from './MissionComplete/ControlComplete';

const Route = (spell_input, spell_submit, level) => {
	switch(level) {
		case 1:
			return <Control1 spell_input={spell_input} spell_submit={spell_submit} level={level}/>
		case 2:
			return <Control2 spell_input={spell_input} spell_submit={spell_submit} level={level}/>
		case 3:
			return <Control3 spell_input={spell_input} spell_submit={spell_submit} level={level}/>
		default:
			return <ControlComplete />;
	}
} 

const Control = ({spell_input, spell_submit, level}) => {
	return (
		<section className = "control_section">
			<div className = "control_container">

			<h1 className="title"><span style={{color:"red"}}>C</span>SS <span style={{color:"green"}}>G</span>rid <span style={{color:"blue"}}>G</span>ame</h1>
				<div className = "control_card">

				{
					Route(spell_input, spell_submit, level) 
				}

				</div>
			</div>
		</section>
		);
}

export default Control;

