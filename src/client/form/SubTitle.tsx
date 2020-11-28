import React from 'react'
import styles from './SignUpForm.module.scss'

interface SubTitleProps {
  title: string
}

const SubTitle: React.FC<SubTitleProps> = ({ title }) => {
  return <h3 className={styles.subTitle}>{title}</h3>
}

export default SubTitle
