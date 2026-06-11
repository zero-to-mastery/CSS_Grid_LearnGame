import ControlActionTypes from './control.types';
import _ from 'lodash';

export const CorrectSpellInput = () => ({
  type: ControlActionTypes.CORRECT_SPELL_INPUT,
});

export const IncorrectSpellInput = () => ({
  type: ControlActionTypes.INCORRECT_SPELL_INPUT,
});

//spell input is updated to the state and re-render the components
export const HandleSpellInputChange = event => ({
  type: ControlActionTypes.SPELL_INPUT_CHANGE,
  payload: event.target.value,
});

//when a user submits, then this function runs.
//first it checks what level the user is and matches with the solution.
//if it matches, then the user gets 100 scores and goes to the next level.
export const OnSpellSubmit = level => {
  //every time we use an action which is not an obj form, redux thunk middleware intervene
  return (dispatch, getState) => {
    //redux-thunk gives us these two wonderful properties// we can use the second one to access to redux store which is very useful
    const state = getState(); //this returns the state of the redux store which currently has control and user

    // Get the solution from the current level object
    const solution = state.control.levels[level].solution;

    const { fire_spell } = state.control;

    if (_.isEqual(fire_spell, solution)) {
      dispatch(CorrectSpellInput());
      console.log('submitted, correct answer!');
    } else {
      dispatch(IncorrectSpellInput());
      console.log('submitted, but wrong answer!');
    }
  };
};
