import React from 'react';
import BoardComplete from './MissionComplete/BoardComplete';

import DragonR from '../assets/img/dragon_red.png';
import DragonB from '../assets/img/dragon_blue.png';
import DragonY from '../assets/img/dragon_yellow.png';

import FireR from '../assets/img/fire_red.png';
import FireB from '../assets/img/fire_blue.png';
import FireY from '../assets/img/fire_yellow.png';
import BoardTemplate from "./Board-Template/Board-Template.component";

const dragonImages = {red: DragonR, blue: DragonB, yellow: DragonY};
const fireImages = {red: FireR, blue: FireB, yellow: FireY};

const Route = ( level) => {
	switch(level) {
		case 1: //add styles of each level to Board-Template.styles.css //Board subComponents and their css are now obsolete and will be deleted soon
			return <BoardTemplate level={level}
								  dragonImages={[dragonImages.red, dragonImages.blue]} //images need to be in an array because BoardTemplate's gonna loop them through
								  fireImages={[fireImages.red, fireImages.blue]} />;
		case 2:
			return <BoardTemplate level={level}
								  dragonImages={[dragonImages.blue, dragonImages.yellow]}
								  fireImages={[fireImages.blue, fireImages.yellow]}/>;
		case 3:
			return <BoardTemplate level={level}
								  dragonImages={[dragonImages.red, dragonImages.yellow]}
								  fireImages={[fireImages.red, fireImages.yellow]}/>;
		case 4:
			return <BoardTemplate level={level}
								  dragonImages={[dragonImages.blue, dragonImages.red]}
								  fireImages={[fireImages.blue, fireImages.red]}/>;
		default:
			return <BoardComplete/>
	}
};

const Board = ({level}) => {

	return (
		<section className = "board_section">
			{
				Route(level)
			}
		</section>
		);
};

export default Board;
