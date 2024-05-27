import { createSlice } from '@reduxjs/toolkit';
import { EMPLOYEES, TEAMS } from '../../constants/entities';

/**
 * Updates the local storage with the provided state object after converting it to a JSON string.
 * @param {Object} state - The state object to be stored in local storage.
 */
const updateLocalStorage = (state) => {
  localStorage.setItem('OrgData', JSON.stringify(state));
};

const initialState = {
  entities: {},
  isAlert: false,
  alertMessage: '',
  entityModalActive: false,
  entityModalInfo: {},
  isLoading: false,
};

export const OrgEntityReducer = createSlice({
  name: 'OrgEntity',
  initialState,
  reducers: {
  /**
   * Loads initial organization data from local storage or sets default data if not present.
   * @returns {Object} The organization data containing employees and teams.
   */
  initialLoad: () => {
    if(!localStorage.getItem('OrgData')) {
      localStorage.setItem('OrgData', JSON.stringify({
        employees: EMPLOYEES,
        teams: TEAMS,
      }))
    }
    const orgData = JSON.parse(localStorage.getItem('OrgData') || '{}');
    return { ...orgData };
  },

  /**
   * Updates or Creates the entity in the state with the provided action payload.
   * Also updates the local storage with the updated state.
   */
  setEntity: (state, action) => {
    const updatedState = {
      ...state,
      [action.payload.role]: { ...action.payload.role, [action.payload.id]: action.payload.details }
    }
    updateLocalStorage(updatedState);
    return updatedState;
  },

  /**
   * Removes an entity from the state based on the provided action payload.
   * @returns {Object} - The updated state object after removing the entity.
   */
  removeEntity: (state, action) => {
    const { [action.payload.id]: removedEntity, ...updatedEntities } = state[action.payload.role];
    const updatedState = {
      ...state,
      [action.payload.role]: updatedEntities
    };
    updateLocalStorage(updatedState);
    return updatedState;
  }},
})

export const {initialLoad, setEntity, removeEntity} = OrgEntityReducer.actions;

export default OrgEntityReducer.reducer;
