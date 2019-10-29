import React from 'react';

import { getFullYear } from '../../utils/helpers';
import styles from './RepositoryInfo.module.scss';

const RepositoryInfo = ({ repository }) => {
  const { name, description, stargazers_count, forks, url, language, created_at, updated_at } = repository;
  return (
    <div className={styles.wrapper}>
      <div className={styles.nameWrap}>
        <h3 className={styles.name}>{name}</h3>
        <span>{getFullYear(created_at)} - {getFullYear(updated_at)}</span>
      </div>
      <p className={styles.language}>{language}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.info}>This repository has <span>{stargazers_count}</span> stars and <span>{forks}</span> forks. If you would like more information about this repository and my contributed code, please visit <span className={styles.color}>{url}</span> on GitHub.</p>
    </div>
  );
}

export default RepositoryInfo;
