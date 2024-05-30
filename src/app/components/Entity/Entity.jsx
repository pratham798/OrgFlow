import React, { useState } from 'react'
import classnames from 'classnames';
import { useDispatch } from 'react-redux';

import { setEntityModal } from '../../../store/reducers/orgEntityReducer';
import EditIcon from '../../assets/edit.svg';
import styles from './Entity.module.css';

/*
  This is a recursive component where when we click on any entity it will render its child by
  searching through the entities which have current entity's role id as there parent
*/
const Entity = ({details, orgData, level}) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const changeStatus = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
  }
  const entities = orgData && orgData.filter((entity) => entity.parent === details.role_id);
  const displayEntities = () => {
    return entities.map((entity) => {
        return <Entity key={entity.id} details={entity} level={level+1} orgData={orgData} />;
      })
  }
  const showEntities = (e) => {
    e.stopPropagation();
    dispatch(setEntityModal(details));
  };

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
              src={EditIcon} onClick={(e) => showEntities(e)} alt='moreInfo'/>
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

export default React.memo(Entity);
