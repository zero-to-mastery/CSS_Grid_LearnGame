import { createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk]; //for dispatching multiple sync or async function inside of redux action

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;