import { createSlice } from '@reduxjs/toolkit';
import { EMPLOYEES, TEAMS } from '../../app/constants/entities';
import { ERRORS } from '../../app/constants/errors';
import filterAndReduceObject from '../../utils/filterAndReduceObject';

/**
 * Updates the local storage with the provided state object after converting it to a JSON string.
 * @param {Object} state - The state object to be stored in local storage.
 */
const updateLocalStorage = (state) => {
  localStorage.setItem('OrgData', JSON.stringify(state));
};

const filterByKey = (allEntities, targetKey, filterKey) => {
  return filterAndReduceObject(allEntities, ([__, data]) => data[filterKey] === targetKey);
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
  initialLoad: (state) => {
    if(!localStorage.getItem('OrgData')) {
      localStorage.setItem('OrgData', JSON.stringify({
        ...EMPLOYEES,
        ...TEAMS,
      }))
    }
    const orgData = JSON.parse(localStorage.getItem('OrgData') || '{}');
    return {
      ...state,
      entities: orgData,
    };
  },

  /**
   * Creates a new entity in the state with the provided action payload.
   * Also updates the local storage with the updated state.
   */
  addEntity: (state, action) => {
    const updatedState = {
      ...state,
      entities: { ...state.entities, [action.payload.id]: action.payload.details }
    }
    updateLocalStorage(updatedState);
    return updatedState;
  },

  /**
   * Removes an entity from the state based on the provided action payload.
   * @returns {Object} - The updated state object after removing the entity.
   */
  removeEntity: (state, action) => {
    const { [action.payload.id]: removedEntity, ...updatedEntities } = state.entities;
    const childEntities = filterByKey(updatedEntities, removedEntity.role_id, 'parent');
    console.log(childEntities);
    if(removedEntity.role==='team' && Object.keys(childEntities).length>0) return {
      ...state,
      isAlert: true,
      alertMessage: ERRORS.TeamRemovalError,
    }
    const parentEntity = Object.values(updatedEntities).find(
      entity => entity.role_id === removedEntity.parent
    );
    Object.keys(childEntities).map((entity) => {
      return childEntities[entity].parent=parentEntity.role_id;
    })
    const updatedState = {
      ...state,
      entities: {...updatedEntities, ...childEntities},
      entityModalActive: false,
    };
    updateLocalStorage(updatedState.entities);
    return updatedState;
  },

  updateEntity: (state, action) => {
    const updatedState = {
      ...state,
      entities: { ...state.entities, [action.payload.id]: action.payload.details }
    }
    updateLocalStorage(updatedState);
    return updatedState;
  },
  
  setEntityModal: (state, action) => {
    return {
      ...state,
      entityModalInfo: action.payload,
      entityModalActive: true,
    }
  },

  closeEntityModal: (state) => {
    return {
      ...state,
      entityModalActive: false,
      isAlert: false,
    }
  },
}})

export const {
  initialLoad, 
  addEntity, 
  removeEntity, 
  updateEntity, 
  setEntityModal, 
  closeEntityModal,
} = OrgEntityReducer.actions;

export default OrgEntityReducer.reducer;
