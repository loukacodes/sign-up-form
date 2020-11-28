import React from 'react'
import { Mail } from 'react-feather'
import styles from './InputForm.module.scss'

interface InputFormProps {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  value: string
}

const InputForm: React.FC<InputFormProps> = ({ onChange, value }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Notify me when its ready"
        className={styles.input}
        onChange={onChange}
        value={value}
      />
      <button className={styles.submitButton}>
        <Mail className={styles.icon} />
      </button>
    </div>
  )
}

export default InputForm
