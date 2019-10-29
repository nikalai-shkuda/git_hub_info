import React from 'react';

import { getFullYear } from '../../utils/helpers';
import styles from './Overview.module.scss';

const Overview = ({ overview }) => {
  const { login, name, url, created_at, public_repos, followers, location} = overview;
  
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{login}</h2>
      <p className={styles.subTitle}>A passionate Github user</p>
      <p className={styles.url}>{url}</p>
      <p className={styles.description}>On GitHub since <span>{getFullYear(created_at)}</span>, <span>{name}</span> is a developer based in {<span>{location}</span>}, with <span className={styles.color}>{public_repos} public repositories</span> and <span className={styles.color}>{followers}  followers</span>.</p>
    </div>
  )
};

export default Overview;
