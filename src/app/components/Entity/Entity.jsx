import React, { useState } from 'react'
import classnames from 'classnames';
import filterAndReduceObject from '../../../utils/filterAndReduceObject';
import EditIcon from '../../assets/edit.svg';
import styles from './Entity.module.css';

const Entity = ({details, orgData}) => {
  const [isActive, setIsActive] = useState(false);
  const changeStatus = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
  }
  const entities = orgData && (
    Object.keys(filterAndReduceObject(orgData, ([key, data]) => data.parent === details.id))
  );
  const displayEntities = () => {
    return entities.map((entity) => {
        return <Entity key={orgData[entity].id} details={orgData[entity]} orgData={orgData} />;
      })
  }

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
          <img className={styles.EntityIcon} src={EditIcon} alt='moreInfo'/>
        </div>
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
