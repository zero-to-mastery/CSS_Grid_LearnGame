import ControlActionTypes from './control.types';
import Levels from '../../LevelData/Levels';
//a function changing user input to React version css
import { SpellParsing } from '../../Components/SpellParsing/SpellParsing';

const INITIAL_STATE = {
  level: 1, //default value is 1. 0 is for the last (certifiControlCompletecate)
  score: 0, //it starts from 0. And +100 per one level up
  fire_spell: {}, //this is input that users type on <input />
  spell_input: '',
  levels: new Levels(), //an object with all of the levels
};

const ControlReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ControlActionTypes.CORRECT_SPELL_INPUT:
      return {
        ...state,
        level: state.level + 1,
        score: state.score + 100,
        spell_input: '',
        fire_spell: {},
      };
    case ControlActionTypes.INCORRECT_SPELL_INPUT:
      return {
        ...state, //we can decrease scores or show errors from here if we want
      };
    case ControlActionTypes.SPELL_INPUT_CHANGE:
      return {
        ...state,
        spell_input: action.payload,
        fire_spell: SpellParsing(state.spell_input),
      };
    default:
      return state;
  }
};

export default ControlReducer;
