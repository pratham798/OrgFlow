import { createSlice } from '@reduxjs/toolkit';
import { EMPLOYEES, TEAMS } from '../../app/constants/entities';
import { ERRORS } from '../../app/constants/errors';

/**
 * Updates the local storage with the provided state object after converting it to a JSON string.
 * @param {Object} state - The state object to be stored in local storage.
 */
const updateLocalStorage = (state) => {
  localStorage.setItem('OrgData', JSON.stringify(state));
};
//Function to get the direct children for the selected Entity (Team/Employee) in Heirarchy
const getChildEntities = (entities, targetEntity) => {
  return entities.filter((entity) =>  entity.parent === targetEntity.role_id);
}
//Function to get the Parent for the selected Entity (Team/Employee) in Heirarchy
const getParentEntity = (entities, targetEntity) => {
  const parentEntity = entities.find(entity => entity.role_id === targetEntity.parent);
  return parentEntity || null;
}

const initialState = {
  entities: [],
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
      localStorage.setItem('OrgData', JSON.stringify([
        ...EMPLOYEES,
        ...TEAMS,
      ]))
    }
    const orgData = JSON.parse(localStorage.getItem('OrgData') || '[]');
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
    const newEntity = action.payload;
    if(newEntity.role === 'team' && state.entities.find((entity) =>  entity.name === newEntity.name)) {
      return {
        ...state,
        isAlert: true,
        alertMessage: ERRORS.DuplicateTeamError,
      }
    }
    newEntity['id']=newEntity['role_id']=state.entities.length+1; 
    const updatedState = {
      ...state,
      entities: [ ...state.entities, newEntity],
      entityModalActive: false,
    }
    updateLocalStorage(updatedState.entities);
    return updatedState;
  },

  /**
   * Removes an entity from the state based on the provided action payload.
   * @returns {Object} - The updated state object after removing the entity and also replacing the 
   * parent of direct child entities to the parent of removed entity.
   */
  removeEntity: (state, action) => {
    const targetEntity=action.payload;
    const childEntities = getChildEntities(state.entities, targetEntity);
    if(targetEntity.role==='team' && childEntities.length>0) return {
      ...state,
      isAlert: true,
      alertMessage: ERRORS.TeamRemovalError,
    }
    const updatedEntities = state.entities.filter((entity) => entity.id !== targetEntity.id).map((entity)=>(
      entity.parent === targetEntity.role_id ? { ...entity, parent: targetEntity.parent } : {...entity}));
    const updatedState = {
      ...state,
      entities: updatedEntities,
      entityModalActive: false,
    };

    updateLocalStorage(updatedState.entities);
    return updatedState;
  },

  updateEntity: (state, action) => {
    const {selectedEntity, updatedDetails} = action.payload;
    const updatedEntities = state.entities.map((entity) => { 
      if ( selectedEntity.role!=='team' && selectedEntity.parent!==updatedDetails.parent 
           && entity.parent === selectedEntity.role_id) return { ...entity, parent: selectedEntity.parent }
      else if (entity.id === selectedEntity.id) return { ...entity, ...updatedDetails }
      return entity;
    });

    const updatedState = {
      ...state,
      entities: updatedEntities,
      entityModalActive: false,
    }
    updateLocalStorage(updatedState.entities);
    return updatedState;
  },
  
  //Opens the entity modal with the info of Selected Entity passed through payload
  setEntityModal: (state, action) => {
    return {
      ...state,
      entityModalInfo: action.payload,
      entityModalActive: true,
    }
  },

  //Closes the entity modal
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
