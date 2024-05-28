import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { initialLoad } from '../store/reducers/orgEntityReducer';
import filterAndReduceObject from '../utils/filterAndReduceObject';
import Navbar from './components/Navbar';
import Entity from './components/Entity';

import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const entityData = useSelector((state) => ({
    orgData: state.orgInfo.entities,
    isLoading: state.orgInfo.isLoading,
    isAlert: state.orgInfo.isAlert,
    alertMessage: state.orgInfo.alertMessage,
    entityModalActive: state.orgInfo.entityModalActive,
    entityModalInfo: state.orgInfo.entityModalInfo,
  }));

  useEffect(() => {
    dispatch(initialLoad());
  }, [dispatch]);

  const entities = entityData?.orgData && (
    Object.keys(filterAndReduceObject(entityData.orgData, ([key, data]) => !data.parent))
  );
  return (
    <>
      <Navbar />
      <div className={styles.OrgWrapper}>
        <div className={styles.EntitiesWrapper}>
          {entities.map((entity) => {
            return (
              <Entity details={entityData.orgData[entity]} orgData={entityData.orgData} />
            )}
          )}
        </div>
      </div>
    </>
  )
}

export default App;
