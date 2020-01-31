import React from 'react';
import './Level2_marked-to-delete.css';

import DragonB from '../../../assets/img/dragon_blue.png';
import DragonY from '../../../assets/img/dragon_yellow.png';

import FireB from '../../../assets/img/fire_blue.png';
import FireY from '../../../assets/img/fire_yellow.png';

const Board2_markedToDelete = ({fire_spell, level}) => {

	//to make classnames dynamic to the level value. 
	const levelValue = String(level);

	return (
		<section style={{width:"99%"}}>

			<div className = {"board_fire_basic board_fires" + levelValue} style={fire_spell}>
				<img src={FireB} className="fires vibrate-1" alt="fire"/>
				<img src={FireY} className="fires vibrate-1" alt="fire"/>
			</div>

			<div className = {"board_monster_basic board_monsters" + levelValue}>
				<img src={DragonB} className="monsters puff-in-center" alt="dragon"/>
				<img src={DragonY} className="monsters puff-in-center" alt="dragon"/>
			</div>

		</section>
		);
};

export default Board2_markedToDelete;
