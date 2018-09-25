import React from 'react';
import './Level1.css';

import DragonR from '../../img/dragon_red.png';
import DragonB from '../../img/dragon_blue.png';

import FireR from '../../img/fire_red.png';
import FireB from '../../img/fire_blue.png';

const Board1 = ({fire_spell, level}) => {

	//to make classnames dynamic to the level value. 
	const levelValue = String(level);

	return (
		<section style={{width:"99%"}}>

				{/*className "board_fire_basic" => basic style of board under fire*/}
				{/*className "board_fires + level" => this level's unique style*/}
			<div className = {"board_fire_basic board_fires" + levelValue} style={fire_spell}>
				{/*className "fires" => basic fire style*/}
				{/*className "vibrate-1" => fire animaiton*/}
				<img src={FireR} className="fires vibrate-1" alt="fire"/>
				<img src={FireB} className="fires vibrate-1" alt="fire"/>
			</div>

				{/*className "board_monster_basic" => basic style of board under monster*/}
				{/*className "board_monsters + level" => this level's unique style*/}
			<div className = {"board_monster_basic board_monsters" + levelValue}>
				{/*className "monsters" => basic monster style*/}
				{/*className "puff-in-center..." => monster animaiton*/}
				<img src={DragonR} className="monsters puff-in-center" alt="dragon"/>
				<img src={DragonB} className="monsters puff-in-center" alt="dragon"/>
			</div>

		</section> 
		);
}

export default Board1;
