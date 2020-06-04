import React from 'react';
import BoardComplete from './MissionComplete/BoardComplete';
import BoardTemplate from './Board-Template/Board-Template.component';

const Board = ({ level, levels }) => {
  if (!levels[level]) {
    return (
      <section className='board_section'>
        <BoardComplete />
      </section>
    );
  } else {
    let { dragonImages, fireImages } = levels[level];
    return (
      <section className='board_section'>
        <BoardTemplate
          level={level}
          levels={levels}
          dragonImages={dragonImages}
          fireImages={fireImages}
        />
        ;
      </section>
    );
  }
};

export default Board;
