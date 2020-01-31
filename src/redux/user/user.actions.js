import UserActionTypes from "./user.types";

export const SubmitForm = (userCredentials) => ({
    type: UserActionTypes.SUBMIT_USER_CREDENTIALS,
    payload: userCredentials
});