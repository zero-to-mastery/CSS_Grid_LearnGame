import React from 'react';
import Header from './Components/Header/Header.component';
import MainContainer from './Components/MainContainer';
import Control from './Components/Control';
import Board from './Components/Board';
import FooterComponent from './Components/Footer/Footer.component';
import './App.css';

import { connect } from 'react-redux';

import {createStructuredSelector} from "reselect";
import {selectLevel, selectScore} from "./redux/control/control.selectors";


const App = ({ level, score }) => {

    return (
      <div className="App">
        <Header level={level} score={score}/>

              <MainContainer>

                <Control level={level}/>
                <Board level={level}/>

          </MainContainer>

        <FooterComponent />
      </div>
    );
};

const mapStateToProps = createStructuredSelector({
  level: selectLevel,
  score: selectScore
});


export default connect(mapStateToProps)(App);
