import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import InputField from '../common/FormFields/InputField';
import SelectField from '../common/FormFields/SelectField';

import styles from './CreateForm.module.css';

const CreateForm = ({selectedEntity, action, entityType, dispatchFn, orgData}) => {
  const dispatch = useDispatch();
  const getLeadEntities = () => {
    return orgData.map((entity) => ({
      value: entity.role_id,
      label: entity.name,
      position: entity.position,
    }))
  }
  const entityParent = orgData.find((entity) => entity.role_id === selectedEntity.parent)
  const defaultValues = action === 'Update' ? {
    name: selectedEntity.name,
    phone: selectedEntity.phone,
    email: selectedEntity.email,
    position: selectedEntity.position,
    parent: {
      label: entityParent?.name || 'none',
      value: entityParent?.value,
      position: (entityParent?.name ? { position: entityParent.position } : null),
      },
  } : {};
  const { register, handleSubmit, control, formState: { errors } } = useForm({defaultValues});
  const onSubmit = (entityData) => {
    entityData['role'] = entityType.toLowerCase();
    if(action === 'Add') entityData['parent']=selectedEntity.role_id;
    dispatch(dispatchFn(entityData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.FormContainer}>
      {/* Name Input */}
      <InputField
        label={'Name:'} register={register} inputName={"name"}
        inputPattern={{value: /^[A-Za-z]+(?: [A-Za-z]+)?$/i, message: 'Name must contain only letters'}}
        error={errors.name}
        placeholder={"Enter Name"}
        required
      />
      {entityType === 'Employee' && (
        <>
          {/* Phone Number Input */}
          <InputField
            label={'Phone No:'} register={register} inputName={"phone"}
            inputPattern={{value: /^\+?[1-9]\d{1,14}$/, message: 'Phone no. must be valid'}}
            error={errors.phone}
            placeholder={"Enter Phone Number"}
            required
          />
          
          {/* Email Input */}
          <InputField
            label={'Email:'} register={register} inputName={'email'}
            inputPattern={{value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email must be valid'}}
            error={errors.email}
            placeholder={"Enter Email"}
            required
          />

          {/* Designation Input */}
          <InputField 
            label={'Designation:'} register={register} inputName={'position'} error={errors.position}
            placeholder={"Enter Designation"}
            required
          />
        </>
      )}
      {action === 'Update' && (
        <>
          {/* Assignee Select Input */}
          <SelectField 
            label={'Assigned To:'} register={register} inputName={'parent'}
            error={errors.parent} placeholder={"Select Lead"}
            control={control}
            options={getLeadEntities()}
            required
          />
        </>
      )}
      <button type="submit" className={styles.cta}>{`${action} ${entityType}`}</button>
    </form>
  );
}

export default CreateForm;
