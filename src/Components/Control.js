import React from 'react';
import ControlComplete from './MissionComplete/ControlComplete';
import ControlTemplate from "./Control-Template/Control-Template.component";
import { level1Hints, level2Hints, level3Hints, level4Hints} from "./Control-Template/Hints";

const level1HeaderText = 'Our small ZTM town is now being attacked by the Dragons!!! We need your help. Hero! There are three types of dragons; red, blue and yellow. To slay that dragons, we need to spell fire that matches their color. Please help us now!';
const level2HeaderText = 'Watch out! Another drogons are coming!!!';
const level3HeaderText = '&nbsp;';
const level4HeaderText = '&nbsp;';

const Route = ( level) => {
	switch(level) {
		case 1:
			return <ControlTemplate headerText={level1HeaderText} hints={level1Hints}/>;
		case 2:
			return <ControlTemplate headerText={level2HeaderText} hints={level2Hints}/>;
		case 3:
			return <ControlTemplate headerText={level3HeaderText} hints={level3Hints}/>;
		case 4:
			return <ControlTemplate headerText={level4HeaderText} hints={level4Hints}/>;
		default:
			return <ControlComplete />;
	}
};

const Control = ({ level}) => {
	return (
		<section className = "control_section">
			<div className = "control_container">

			<h1 className="title"><span style={{color:"red"}}>C</span>SS <span style={{color:"green"}}>G</span>rid <span style={{color:"blue"}}>G</span>ame</h1>
				<div className = "control_card">

				{
					Route(level)
				}

				</div>
			</div>
		</section>
		);
};

export default Control;
