import React, { useState } from 'react'
import classnames from 'classnames';
import { useDispatch } from 'react-redux';

import { setEntityModal } from '../../../store/reducers/orgEntityReducer';
import filterAndReduceObject from '../../../utils/filterAndReduceObject';
import EditIcon from '../../assets/edit.svg';
import styles from './Entity.module.css';

const Entity = ({details, orgData, level}) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch=useDispatch();
  const changeStatus = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
  }
  const entities = orgData && (
    Object.keys(filterAndReduceObject(orgData, ([key, data]) => data.parent === details.role_id))
  );
  const displayEntities = () => {
    return entities.map((entity) => {
        return <Entity key={orgData[entity].id} details={orgData[entity]} level={level+1} orgData={orgData} />;
      })
  }
  const showEntities = () => dispatch(setEntityModal(details));

  return (
    <div>
      <div className={classnames( styles.EntityWrapper, {
          [styles.active]: isActive,
        })} 
        onClick={(e) => changeStatus(e)}>
        <div className={styles.Info}>
          <span className={styles.Name}>{details.name}</span><br/>
          <span className={styles.Position}>{details.position}</span>
        </div>
        <div className={styles.Interact}>
          <img className={styles.EntityIcon} 
              src={EditIcon} onClick={() => showEntities()} alt='moreInfo'/>
        </div>
        <span className={classnames( styles.level, {
            [styles.showLevel]: entities.length > 0 && isActive,
          })}>{level}
        </span>
      </div>
      {isActive && entities.length > 0 && (
        <>
          <div className={styles.divider} />
          <div className={classnames( styles.SubEntities, {
            [styles.Multiple]: entities.length > 1,
          })}>
            {displayEntities()}
          </div>
        </>
      )}
    </div>
  )
}

export default Entity;
