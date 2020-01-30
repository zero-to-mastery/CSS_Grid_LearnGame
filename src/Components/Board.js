import React from 'react';
import Board1 from './Subcomponents/Level1/Board1';
import Board2 from './Subcomponents/Level2/Board2';
import Board3 from './Subcomponents/Level3/Board3';
import Board4 from './Subcomponents/Level4/Board4';
import BoardComplete from './MissionComplete/BoardComplete';

const Route = (fire_spell, level, userCredentials) => {
	switch(level) {
		case 1:
			return <Board1 fire_spell={fire_spell} level={level}/>;
		case 2:
			return <Board2 fire_spell={fire_spell} level={level}/>;
		case 3:
			return <Board3 fire_spell={fire_spell} level={level}/>;
		case 4:
			return <Board4 fire_spell={fire_spell} level={level}/>;
		default:
			return <BoardComplete userCredentials={userCredentials}/>
	}
}

const Board = ({fire_spell, level, userCredentials}) => {

	return (
		<section className = "board_section">
			{
				Route(fire_spell, level, userCredentials)
			}
		</section>
		);
};

export default Board;
