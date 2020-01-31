import React from 'react';
import './Level1_marked-to-delete.css';

import DragonR from '../../../assets/img/dragon_red.png';
import DragonB from '../../../assets/img/dragon_blue.png';

import FireR from '../../../assets/img/fire_red.png';
import FireB from '../../../assets/img/fire_blue.png';

const Board1_markedToDelete = ({fire_spell, level}) => {

	//to make classnames dynamic to the level value. 
	const levelValue = String(level);

	return (
		<section style={{width:"99%"}}>

				{/*className "board_fire_basic" => basic style of board under fire*/}
				{/*className "board_fires + level" => this level's unique style*/}
			<div className = {"board_fire_basic board_fires" + levelValue} style={fire_spell}>
				{/*className "fires" => basic fire imgae style*/}
				{/*className "vibrate-1" => fire animaiton*/}
				<img src={FireR} className="fires vibrate-1" alt="fire"/>
				<img src={FireB} className="fires vibrate-1" alt="fire"/>
			</div>

				{/*className "board_monster_basic" => basic style of board under monster*/}
				{/*className "board_monsters + level" => this level's unique style*/}
			<div className = {"board_monster_basic board_monsters" + levelValue}>
				{/*className "monsters" => basic monster image style*/}
				{/*className "puff-in-center..." => monster animaiton*/}
				<img src={DragonR} className="monsters puff-in-center" alt="dragon"/>
				<img src={DragonB} className="monsters puff-in-center" alt="dragon"/>
			</div>

		</section> 
		);
};

export default Board1_markedToDelete;
