import React from 'react'

import styles from './InputField.module.css';

const InputField = ({label, inputName, register, required, inputPattern, placeholder, error }) => {
  return (
    <>
      <div className={styles.InputWrapper}>
        <label htmlFor={inputName}>{label}</label>
        <input
          {...register(inputName, {
            required: (required && `"${label} is required"`),
            pattern: (inputPattern && {
              value: inputPattern.value,
              message: inputPattern.message,
            })
          })}
          placeholder={placeholder}
          className={error && styles.InputInvalid}
        />
      </div>
      {error && <p className={styles.InputError}>{error.message}</p>}
    </>
  )
}

export default InputField;
