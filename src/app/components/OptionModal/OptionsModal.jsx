import React from 'react'

import styles from './OptionsModal.module.css';

const OptionsModal = ({ handleAction, entityModalInfo}) => {
  return (
    <div onClick={(e)=>handleAction(e)}>
      <div className={styles.Option} data-action='AddTeam'>Add New Team</div>
      <div className={styles.Option} data-action='AddEmployee'>Add New Employee</div>
      <div className={styles.Option} data-action={
        entityModalInfo.role === 'team' ? 'UpdateTeam' : 'UpdateEmployee'}
      >
        Update {entityModalInfo.role}
      </div>
      <div className={styles.Option} data-action='Delete'>Delete {entityModalInfo.role}</div>
    </div>
  );
}

export default OptionsModal;
