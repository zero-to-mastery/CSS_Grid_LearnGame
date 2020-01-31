import React from 'react';
import './Level0.css';
import Form from "../Form/Form.component";

import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux';
import {selectIsFormSubmitted} from "../../redux/user/user.selectors";

const ControlComplete = ({isFormSubmitted}) => {
	return (
		<section style={{width:"99%"}}>

			<div className = "control_question0">
				<div className = "control_mission0">
				  	<h1>You've completed this mission! Hero! You saved a lot of people in this town!!!</h1>
				  	{/*<h2>Here's ZTM CSS Grid Master Certificate!</h2>*/}
				  	{isFormSubmitted ?
						<h2>Here's Your ZTM CSS Grid Master Certificate!</h2>
						:
						<span><h2>Please fill the form to get your ZTM CSS Grid Master Certificate!</h2>
						<Form/></span>
				  	}
				</div>
			</div>
		</section>
		);
};

const mapStateToProps = createStructuredSelector({
	isFormSubmitted: selectIsFormSubmitted
});

export default connect(mapStateToProps)(ControlComplete);
