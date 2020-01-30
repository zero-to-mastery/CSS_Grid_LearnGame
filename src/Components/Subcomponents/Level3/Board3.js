import React from 'react';
import './Level3.css';

import DragonR from '../../img/dragon_red.png';
import DragonY from '../../img/dragon_yellow.png';

import FireR from '../../img/fire_red.png';
import FireY from '../../img/fire_yellow.png';

const Board3 = ({fire_spell, level}) => {

	//to make classnames dynamic to the level value. 
	const levelValue = String(level);
	
	return (
		<section style={{width:"99%"}}>

			<div className = {"board_fire_basic board_fires" + levelValue} style={fire_spell}>
				<img src={FireR} className="fires vibrate-1" alt="fire"/>
				<img src={FireY} className="fires vibrate-1" alt="fire"/>
			</div>

			<div className = {"board_monster_basic board_monsters" + levelValue}>
				<img src={DragonR} className="monsters puff-in-center" alt="dragon"/>
				<img src={DragonY} className="monsters puff-in-center" alt="dragon"/>
			</div>

		</section>
		);
};

export default Board3;
