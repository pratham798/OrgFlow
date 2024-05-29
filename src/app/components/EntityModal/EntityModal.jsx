import React from 'react'
import { useDispatch } from 'react-redux';

import { closeEntityModal, removeEntity } from '../../../store/reducers/orgEntityReducer';
import CrossIcon from '../../assets/cross.svg';
import styles from './EntityModal.module.css';

const EntityModal = ({entityModalInfo, isAlert, alertMessage}) => {
  const dispatch = useDispatch();
  const closeModal = (e) => {
    e.stopPropagation();
    return dispatch(closeEntityModal());
  }
  const handleAction = (e) => {
    e.stopPropagation();
    const action = e.target.getAttribute('data-action');
    switch (action) {
      case 'Add':
        console.log('add');
        break;
      case 'Update':
        console.log('update');
        break;
      case 'Delete':
        dispatch(removeEntity(entityModalInfo));
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.ModalContainer}>
      <div className={styles.ModalWrapper}>
        <img src={CrossIcon} className={styles.CloseContainer} 
          onClick={(e) => closeModal(e)} alt='close'/>
          {isAlert ? ( <div className={styles.Alert}>{alertMessage}</div>):(
              <div onClick={(e)=>handleAction(e)}>
                <div className={styles.Option} data-action='Add'>Add New Team</div>
                <div className={styles.Option} data-action='Add'>Add New Member</div>
                <div className={styles.Option} data-action='Update'>Update {entityModalInfo.role}</div>
                <div className={styles.Option} data-action='Delete'>Delete {entityModalInfo.role}</div>
              </div>
          )}
      </div>
    </div>
  )
}

export default EntityModal;
