import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { closeEntityModal, removeEntity } from '../../../store/reducers/orgEntityReducer';
import OptionModal from '../OptionModal';
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
      case 'Add':
        return <div>Add</div>;
      case 'Update':
        return <div>Update</div>;
      default:
        return <OptionModal handleAction={handleAction} entityModalInfo={entityModalInfo} />;
    }
  }
  console.log(selectedForm);
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
