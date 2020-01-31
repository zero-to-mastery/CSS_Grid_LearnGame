import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectIsFormSubmitted = createSelector(
    [selectUser],
    user => user.isFormSubmitted
);

export const selectUserCredentials = createSelector(
    [selectUser],
    user => user.credentials
);