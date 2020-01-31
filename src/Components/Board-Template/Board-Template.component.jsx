import React from 'react';
import './Board-Template.styles.css';


const BoardTemplate = ({fire_spell, level, fireImages, dragonImages}) => {

    //to make classNames dynamic to the level value.
    const levelValue = String(level);

    return (
        <section style={{width:"99%"}}>

            {/*className "board_fire_basic" => basic style of board under fire*/}
            {/*className "board_fires + level" => this level's unique style*/}
            <div className = {"board_fire_basic board_fires"} style={fire_spell}>
                {/*className "fires" => basic fire image style*/}
                {/*className "vibrate-1" => fire animation*/}
                {
                    fireImages.map((img, index) => <img key={index} src={img} className="fires vibrate-1" alt="fire"/>)
                }
            </div>

            {/*className "board_monster_basic" => basic style of board under monster*/}
            {/*className "board_monsters + level" => this level's unique style*/}
            <div className = {"board_monster_basic board_monsters" + levelValue}>
                {/*className "monsters" => basic monster image style*/}
                {/*className "puff-in-center..." => monster animaiton*/}
                {
                    dragonImages.map((dragonImage, index) => <img key={index} src={dragonImage} className="monsters puff-in-center" alt="dragon"/>)
                }
            </div>

        </section>
    );
};

export default BoardTemplate;