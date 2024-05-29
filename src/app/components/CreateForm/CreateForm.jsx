import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import styles from './CreateForm.module.css';

const CreateForm = ({selectedEntity, action, entityType, dispatchFn}) => {
  const dispatch = useDispatch();
  const defaultValues = {
    name: selectedEntity.name,
    phone: selectedEntity.phone,
    email: selectedEntity.position,
    position: selectedEntity.role_id,
  }
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    // dispatch(dispatchFn(data));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.FormContainer}>
      {/* Name Input */}
      <div className={styles.InputWrapper}>
        <label htmlFor="name">Name:</label>
        <input
          {...register("name", { required: "Name is required",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Name must contain only letters"
            }
          })}
          placeholder="Enter Name"
          className={errors.name && styles.InputInvalid}
        />
      </div>
      {errors.name && <p className={styles.InputError}>{errors.name.message}</p>}
      {entityType === 'Employee' && (
        <>
          {/* Phone Number Input */}
          <div className={styles.InputWrapper}>
            <label htmlFor="phone">Phone No:</label>
            <input
              {...register("phone", { required: "Phone no. is required",
                pattern: {
                  value: /^\+?[1-9]\d{1,14}$/,
                  message: "Phone no. must be valid"
                }
              })}
              placeholder="Enter Phone Number"
              className={errors.phone && styles.InputInvalid}
            />
          </div>
          {errors.phone && <p className={styles.InputError}>{errors.phone.message}</p>}
          {/* Email Input */}
          <div className={styles.InputWrapper}>
            <label htmlFor="email">Email:</label>
            <input
              {...register("email", { required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email must be valid"
                }
              })}
              placeholder="Enter Email"
              className={errors.email && styles.InputInvalid}
            />
          </div>
          {errors.email && <p className={styles.InputError}>{errors.email.message}</p>}
          {/* Designation Input */}
          <div className={styles.InputWrapper}>
            <label htmlFor="position">Designation:</label>
            <input
              {...register("position", { required: "Designation is required"})}
              placeholder="Enter Designation"
              className={errors.position && styles.InputInvalid}
            />
          </div>
          {errors.position && <p className={styles.InputError}>{errors.position.message}</p>}
        </>
      )}
      <button type="submit" className={styles.cta}>{`${action} ${entityType}`}</button>
    </form>
  );

}

export default CreateForm;
