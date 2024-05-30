import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { initialLoad } from '../store/reducers/orgEntityReducer';
import EntityModal from './components/EntityModal';
import Navbar from './components/Navbar';
import Entity from './components/Entity';

import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  //Fetches all the data from redux store
  const entityData = useSelector((state) => ({
    orgData: state.orgInfo.entities,
    isLoading: state.orgInfo.isLoading,
    isAlert: state.orgInfo.isAlert,
    alertMessage: state.orgInfo.alertMessage,
    entityModalActive: state.orgInfo.entityModalActive,
    entityModalInfo: state.orgInfo.entityModalInfo,
  }));

  //Sets the initial data in redux stores
  useEffect(() => {
    dispatch(initialLoad());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className={styles.OrgWrapper}>
        <div className={styles.EntitiesWrapper}>
          {entityData?.orgData?.filter((entity) => !entity.parent).map((entity) => {
            return (
              <Entity 
                details={entity} 
                key={entity.id} 
                orgData={entityData.orgData} level={1}/>
            )}
          )}
        </div>
      </div>
      {entityData?.entityModalActive && (
        <EntityModal
          orgData={entityData.orgData}
          entityModalInfo={entityData.entityModalInfo}
          isAlert={entityData.isAlert}
          alertMessage={entityData.alertMessage}
        />
      )}
    </>
  )
}

export default App;
