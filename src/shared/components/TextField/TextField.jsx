import { nanoid } from 'nanoid';
import { useMemo } from 'react';

import PropTypes from 'prop-types';

import styles from './textField.module.css';

const TextField = ({
  name,
  onChange,
  label,
  value,
  placeholder,
  required,
  type,
}) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div className={styles.wrap}>
      {label && <label className={styles.label} htmlFor={id}>{label}: </label>}
      <input className={styles.input}
        ib={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </div>
  );
};

TextField.defaultProps = {
    type: "text",
    required: false,
    placeholder: "Input data",
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
}


export default TextField;
