import React from 'react'
import styles from './SignUpForm.module.scss'

interface TitleProps {
  title: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>
}

export default Title
