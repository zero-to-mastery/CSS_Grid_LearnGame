import { combineReducers } from "redux";
import UserReducer from "./user/user.reducer";

const rootReducer = combineReducers({
    user: UserReducer
});

export default rootReducer;
