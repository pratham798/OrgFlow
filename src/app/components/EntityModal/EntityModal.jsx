import React from 'react'
import { useDispatch } from 'react-redux';

import { closeEntityModal } from '../../../store/reducers/orgEntityReducer';
import CrossIcon from '../../assets/cross.svg';
import styles from './EntityModal.module.css';

const EntityModal = (entityModalInfo) => {
  const dispatch = useDispatch();
  const closeModal = (e) => {
    e.stopPropagation();
    return dispatch(closeEntityModal());
  }

  return (
    <div className={styles.ModalContainer}>
      <div className={styles.ModalWrapper}>
        <img src={CrossIcon} className={styles.CloseContainer} 
          onClick={(e) => closeModal(e)} alt='close'/>
        <div className={styles.Option}>Add New Team</div>
        <div className={styles.Option}>Add New Member</div>
        <div className={styles.Option}>Update {entityModalInfo.role}</div>
        <div className={styles.Option}>Delete {entityModalInfo.role}</div>
      </div>
    </div>
  )
}

export default EntityModal;
