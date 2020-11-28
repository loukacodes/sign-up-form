import React from 'react'
import styles from './EnvelopeBackground.module.scss'

const EnvelopeBackground = () => {
  return <div className={styles.root}>
    <div className={styles.upperPart}></div>
    <div className={styles.lowerPart}></div>
  </div>
}

export default EnvelopeBackground