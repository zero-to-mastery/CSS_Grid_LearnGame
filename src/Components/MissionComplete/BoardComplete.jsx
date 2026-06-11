import React from 'react';
import './Level0.css';
import { connect, useSelector } from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectUserCredentials} from "../../redux/user/user.selectors";

const mm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const showCertificate = (name, email, score) => (
	<section style={{width:"99%"}}>
		<div className = "certificate">

			<div style={{border: "10px solid black", padding:8}}>

				<div style={{border: "5px solid black", padding:5}}>

					<p style={{fontSize:20}}>Certificate of Completion</p>
					<br/><br/>
					<span style={{fontSize:15}}><i>This is to certify that</i></span>
					<br/><br/>
					<span style={{fontSize:10}}><b>{name}</b></span><br/><br/>
					<span style={{fontSize:10}}><b>{email}</b></span><br/><br/>
					<span style={{fontSize:15}}><i>has completed the course</i></span> <br/><br/>
					<span style={{fontSize:10}}>ZTM CSS Grid Master</span> <br/><br/>
					<span style={{fontSize:10}}>with a score of <b>{score} points</b></span> <br/><br/><br/><br/>
					<span style={{fontSize:15}}><i>dated {mm[(new Date()).getMonth()] + ' ' + (new Date()).getDate() + ' ' + (new Date()).getFullYear()}</i></span><br/> {/* .getDay() doesn't return correct day */}
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

const BoardComplete = ({userCredentials}) => {
	const {name, email} = userCredentials;
	const score = useSelector((state) => state["control"].score);
	return (
		(name) ? showCertificate(name, email, score) : ( //cleaned up the code
			<section style={{width:"99%"}}>
				&nbsp;{/*empty space character*/}
			</section>
		)
	);
};

const mapStateToProps = createStructuredSelector({
	userCredentials: selectUserCredentials
});

export default connect(mapStateToProps)(BoardComplete);

