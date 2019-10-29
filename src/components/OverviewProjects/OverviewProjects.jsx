import React from 'react';

import RepositoryInfo from '../RepositoryInfo/RepositoryInfo'
import styles from './OverviewProjects.module.scss';

const OverviewProjects = ({ repositories }) => {
  const langArr = repositories.map(item => item.language); 
  const langObj = langArr.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Languages</h2>
      <div className={styles.languagesWrap}>
        {Object.keys(langObj).map((item,i) => {
          const percent = (langObj[item]/langArr.length * 100).toFixed(0);
            return (
              <div className={styles.languagesBlock} key={i}>
                <div>
                  <span className={styles.language}>{item}</span>
                  <span>{percent}%</span>
                </div>
                <div className={styles.progress}>
                  <span className={styles.progressColor} style={{width: `${percent}%`}}></span>
                </div>
              </div>
            )
          })
        }
      </div>
      <h2 className={styles.title}>Popular Repositories</h2>
      {repositories.map((item, index) => <RepositoryInfo repository={item} key={index} />)}
    </div>
  );
}

export default OverviewProjects;
