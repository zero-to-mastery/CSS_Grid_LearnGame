import React from 'react';
import Header from './Components/Header/Header.component';
import MainContainer from './Components/MainContainer';
import Control from './Components/Control';
import Board from './Components/Board';
import FooterComponent from './Components/Footer/Footer.component';
import './App.css';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectLevel, selectLevels, selectScore } from './redux/control/control.selectors';

const App = ({ level, levels, score }) => {
  return (
    <div className='App'>
      <Header level={level} score={score} />

      <MainContainer>
        <Control level={level} levels={levels} />
        <Board level={level} levels={levels} />
      </MainContainer>

      <FooterComponent />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  level: selectLevel,
  levels: selectLevels,
  score: selectScore,
});

export default connect(mapStateToProps)(App);
