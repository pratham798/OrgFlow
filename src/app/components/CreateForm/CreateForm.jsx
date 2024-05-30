import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import InputField from '../common/FormFields/InputField';
import SelectField from '../common/FormFields/SelectField';

import styles from './CreateForm.module.css';

const CreateForm = ({selectedEntity, action, entityType, dispatchFn, orgData}) => {
  const dispatch = useDispatch();
  //Provides Options For Entity to whome they can be Assigned to
  const parseAllEntities = () => {
    return orgData.filter((entity) => entity.id !== selectedEntity.id).map((entity) => ({
      value: entity.role_id,
      label: entity.name,
      position: entity.position,
    }))
  }
  const selectedEntityParent = orgData.find((entity) => entity.role_id === selectedEntity.parent)

  //Default Values for form inputs when an update form is triggered
  const defaultValues = action === 'Update' ? {
    name: selectedEntity.name,
    phone: selectedEntity.phone,
    email: selectedEntity.email,
    position: selectedEntity.position,
    parent: {
      label: selectedEntityParent?.name || 'none',
      value: selectedEntityParent?.role_id,
      position: selectedEntityParent?.position,
    },
  } : {};

  //Created Form using useForm hook provided by react-form-hook
  const { register, handleSubmit, control, formState: { errors } } = useForm({defaultValues});
  const onSubmit = (data) => {
    if(action === 'Add') {
      data['role']=entityType.toLowerCase();
      data['parent']=selectedEntity.role_id;
      dispatch(dispatchFn(data));
    }
    if(action === 'Update') {
      const updatedDetails={
        name:data['name'],
        phone:data['phone'],
        email:data['email'],
        position:data['position'],
        parent: data['parent'].value || null,
      }
      dispatch(dispatchFn({selectedEntity, updatedDetails}));
    }
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
            options={parseAllEntities()}
            required
          />
        </>
      )}
      <button type="submit" className={styles.cta}>{`${action} ${entityType}`}</button>
    </form>
  );
}

export default CreateForm;
