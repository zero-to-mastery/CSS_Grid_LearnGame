import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    isFormSubmitted: false,
    credentials: {
        name: '',
        email: ''
    }
};

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SUBMIT_USER_CREDENTIALS:
            return {
                ...state,
                isFormSubmitted: true,
                credentials: action.payload
            };
        default:
            return state;
    }
};

export default UserReducer;