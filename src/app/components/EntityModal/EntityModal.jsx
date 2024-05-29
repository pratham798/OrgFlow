import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { closeEntityModal, removeEntity, addEntity, updateEntity } from '../../../store/reducers/orgEntityReducer';
import OptionModal from '../OptionModal';
import CreateForm from '../CreateForm';
import CrossIcon from '../../assets/cross.svg';
import styles from './EntityModal.module.css';

const EntityModal = ({entityModalInfo, isAlert, alertMessage}) => {
  const [selectedForm, setSelectedForm] = useState(null);
  const dispatch = useDispatch();

  const closeModal = useCallback((e) => {
    e.stopPropagation();
    setSelectedForm(null);
    dispatch(closeEntityModal());
  },[dispatch]);

  const handleAction = useCallback((e) => {
    e.stopPropagation();
    const action = e.target.getAttribute('data-action');
    setSelectedForm(action);
  },[]);

  useEffect(() => {
    if(selectedForm==='Delete') dispatch(removeEntity(entityModalInfo));
  }, [dispatch, entityModalInfo, selectedForm])

  const displayForm = (action) => {
    switch (action) {
      case 'AddTeam':
        return <CreateForm selectedEntity={entityModalInfo} dispatchFn={addEntity} action={'Add'} entityType={'Team'}/>;
      case 'UpdateTeam':
        return <CreateForm selectedEntity={entityModalInfo} dispatchFn={updateEntity} action={'Update'} entityType={'Team'}/>;
      case 'AddEmployee':
        return <CreateForm selectedEntity={entityModalInfo} dispatchFn={addEntity} action={'Add'} entityType={'Employee'}/>;
      case 'UpdateEmployee':
        return <CreateForm selectedEntity={entityModalInfo} dispatchFn={updateEntity} action={'Update'} entityType={'Employee'}/>;
      default:
        return <OptionModal handleAction={handleAction} entityModalInfo={entityModalInfo} />;
    }
  }

  return (
    <div className={styles.ModalContainer}>
      <div className={styles.ModalWrapper}>
        <img src={CrossIcon} className={styles.CloseContainer} 
          onClick={(e) => closeModal(e)} alt='close'/>
          {isAlert ? (<div className={styles.Alert}>{alertMessage}</div>): displayForm(selectedForm)}
      </div>
    </div>
  )
}

export default EntityModal;
