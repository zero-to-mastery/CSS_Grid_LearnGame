import { combineReducers } from "redux";
import UserReducer from "./user/user.reducer";
import ControlReducer from "./control/control.reducer";

const rootReducer = combineReducers({
    user: UserReducer,
    control: ControlReducer
});

export default rootReducer;
