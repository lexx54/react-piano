import React from 'react';
import styles from './App.module.css';
import Footer from './components/Footer';
import Logo from './components/Logo';

function App() {
  return (
    <div className={styles.app}>
      <Logo />
      <main className={styles.content}></main>
      <Footer />
    </div>
  );
}

export default App;
