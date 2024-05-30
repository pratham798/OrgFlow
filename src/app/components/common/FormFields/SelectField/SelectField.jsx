import React from 'react'
import { Controller } from 'react-hook-form';
import classNames from 'classnames';
import Select from 'react-select'; 

import styles from './SelectField.module.css';

const SelectField = ({label, inputName, required, placeholder, error, control, options, multiSelect}) => {
  return (
    <>
      <div className={styles.InputWrapper}>
        <label htmlFor={inputName}>{label}</label>
        <Controller
          name={inputName}
          control={control}
          defaultValue={null}
          rules={{ required: (required && `"${label} is required"`) }}
          render={({ field }) => (
            <Select 
              className={classNames(styles.Select, {
                [styles.InputInvalid]: error
              })}
              {...field}
              options={options}
              getOptionLabel={option => `${option.label}${option?.position ? ` (${option.position})` : ''}`}
              placeholder={placeholder}
              isClearable
              isMulti={multiSelect}
            />
          )}
        />
      </div>
      {error && <p className={styles.InputError}>{error.message}</p>}
    </>
  )
}

export default SelectField;
