import React from 'react';
import './Level2.css';

import DragonB from '../../img/dragon_blue.png';
import DragonY from '../../img/dragon_yellow.png';

import FireB from '../../img/fire_blue.png';
import FireY from '../../img/fire_yellow.png';

const Board2 = ({fire_spell, level}) => {

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
}

export default Board2;
