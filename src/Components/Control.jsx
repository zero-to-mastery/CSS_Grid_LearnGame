import React from 'react';
import ControlComplete from './MissionComplete/ControlComplete';
import ControlTemplate from './Control-Template/Control-Template.component';

const Control = ({ level, levels }) => {
  if (!levels[level]) {
    return (
      <section className='control_section'>
        <div className='control_container'>
          <h1 className='title'>
            <span style={{ color: 'red' }}>C</span>SS <span style={{ color: 'green' }}>G</span>rid{' '}
            <span style={{ color: 'blue' }}>G</span>ame
          </h1>
          <div className='control_card'>
            <ControlComplete />
          </div>
        </div>
      </section>
    );
  } else {
    let { header, hints } = levels[level];
    return (
      <section className='control_section'>
        <div className='control_container'>
          <h1 className='title'>
            <span style={{ color: 'red' }}>C</span>SS <span style={{ color: 'green' }}>G</span>rid{' '}
            <span style={{ color: 'blue' }}>G</span>ame
          </h1>
          <div className='control_card'>
            <ControlTemplate headerText={header} hints={hints} />;
          </div>
        </div>
      </section>
    );
  }
};

export default Control;
