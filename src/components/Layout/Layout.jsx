import React from 'react';

import Logo from '../../images/logo.svg'
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />
    </header>
    <section className={styles.container}>{children}</section>
    <footer className={styles.footer}>
      <span>© exozet 2019</span>
    </footer>
  </div>
);

export default Layout;
