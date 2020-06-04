import React from 'react';
import './Control-Template.styles.css';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectLevel, selectSpellInput } from '../../redux/control/control.selectors';
import { HandleSpellInputChange, OnSpellSubmit } from '../../redux/control/control.actions';

const ControlTemplate = ({ submitSpell, spell_input, hints, headerText, level, handleChange }) => {
  //they are the only unique things to each Control //level comes from reducer now
  //the caveat of using controlTemplate is that ,now , we have to clear our spell_input every time a user submit the spell correctly
  //to make classnames dynamic to the level value.
  // const levelValue = String(level);
  // const solutionNum = "solution" + levelValue;

  return (
    <section>
      <div className='control_question'>
        <div className='control_mission'>
          <p>{headerText}</p>
        </div>
        <div className='control_form'>
          {hints}

          <p className='hint'>Don't forget to finish your spell with semicolon &#59; </p>
          <p>#fire_spell &#123;</p>
          <p>display: flex;</p>
          <section>
            <textarea
              className='control_input'
              type='input'
              value={spell_input} //to clear the textarea with redux
              onChange={handleChange}
              autoFocus={true}
              required={true}
            />
            <p>&#125;</p>
            <div className='control_submit'>
              <button className='record_btn' onClick={() => submitSpell(level)}>
                Next
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  level: selectLevel,
  spell_input: selectSpellInput,
});

const mapDispatchToProps = dispatch => ({
  handleChange: event => dispatch(HandleSpellInputChange(event)),
  submitSpell: level => dispatch(OnSpellSubmit(level)), //this is not a real action// we're using it to leverage thunk//every time we use an action which is not an obj form, redux thunk middleware intervene
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlTemplate);
