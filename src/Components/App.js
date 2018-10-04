import React, { Component } from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import Control from './Control';
import Board from './Board';
import Footer from './Footer';
import './App.css';
import _ from 'lodash';

//a function changing user input to React version css
import { SpellParsing } from './SpellParsing/SpellParsing';
//a function comparing user input with the solution
import { SolutionContainer } from './Solutions/SolutionContainer';


class App extends Component {
  constructor() {
      super();
      this.state = {
        level: 1, //default value is 1. 0 is for the last (certificate)
        score: 0, //it starts from 0. And +100 per one level up
        fire_spell: {}, //this is input that users type on <input />
      }
      this.spell_input = this.spell_input.bind(this);
      this.spell_submit = this.spell_submit.bind(this);
    }

  //spell input is updated to the state and re-render the componenets
  spell_input = (event) => {
    let inputSpell = event.target.value;
    let parsedSpell = SpellParsing(inputSpell);
    this.setState({fire_spell : parsedSpell});
  };

  //when a user submits, then this fucntion runs.
  //first it checks what level the user is and matches with the solution.
  //if it matches, then the user gets 100 scores and goes to the next level.
  spell_submit = (solutionNum) => {
    let solution = SolutionContainer(solutionNum);
    let fire_spell_ref = this.state.fire_spell;

    if (_.isEqual(fire_spell_ref, solution)) {
      let current_level = this.state.level;
      let current_score = this.state.score;
      current_level += 1;
      current_score += 100;
      this.setState({level : current_level, score : current_score, fire_spell : {}});
      console.log("submitted, correct answer!")
    }
    else {
      console.log("submitted, but wrong answer!")
    }
  }

  render() {
    return (
      <div className="App">
      	<Header
          level={this.state.level}
          score={this.state.score}/>

        	  <MainContainer>

      	      	<Control
                spell_input={this.spell_input}
                spell_submit={this.spell_submit}
                level={this.state.level}/>

      	      	<Board
                fire_spell={this.state.fire_spell}
                level={this.state.level}/>

  	      </MainContainer>

      	<Footer />
      </div>
    );
  }
}

export default App;
