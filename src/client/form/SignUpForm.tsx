import React, { useState } from 'react'
import EnvelopeBackground from './EnvelopeBackground'
import InputForm from './InputForm'
import styles from './SignUpForm.module.scss'
import SubTitle from './SubTitle'
import Title from './Title'

const SignUpForm = () => {
  const [input, setInput] = useState<string>(
    window.localStorage.getItem('email') || ''
  )

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
    window.localStorage.setItem('email', input)
  }

  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <Title title={'Email subscription'} />
        <SubTitle title={'Are you ready for something good?'} />
        <InputForm onChange={handleChange} value={input} />
      </div>
      <EnvelopeBackground />
    </div>
  )
}

export default SignUpForm
