import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { initialLoad } from './store/reducers/orgEntityReducer';

import Navbar from './components/Navbar/Navbar';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialLoad());
  }, [dispatch]);
  
  const entityData = useSelector((state) => ({
    orgData: state.orgInfo.entities,
    isLoading: state.orgInfo.isLoading,
    isAlert: state.orgInfo.isAlert,
    alertMessage: state.orgInfo.alertMessage,
    entityModalActive: state.orgInfo.entityModalActive,
    entityModalInfo: state.orgInfo.entityModalInfo,
  }));

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App;