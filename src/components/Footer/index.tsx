import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <a href="https://newline.co">Newline.co</a>
      <br />
      {currentYear}
    </footer>
  )
}

export default Footer