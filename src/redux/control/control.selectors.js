import { createSelector } from 'reselect';

const selectControl = state => state.control;

export const selectLevel = createSelector([selectControl], control => control.level);

export const selectLevels = createSelector([selectControl], control => control.levels);

export const selectScore = createSelector([selectControl], control => control.score);

export const selectFireSpell = createSelector([selectControl], control => control.fire_spell);

export const selectSpellInput = createSelector([selectControl], control => control.spell_input);

export const selectErrorMessage = createSelector([selectControl], control => control.error_message);