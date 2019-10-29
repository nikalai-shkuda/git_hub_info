import React, { Component } from 'react';

import Overview from '../../components/Overview/Overview';
import OverviewProjects from '../../components/OverviewProjects/OverviewProjects';
import styles from './Home.module.scss';

class Home extends Component {
  state = {
    inputValue: '',
    repositories: {},
    overview: {},
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({inputValue: value});
  }

  handleSubmit = e => {
    e.preventDefault();

    const { inputValue } = this.state;
    const urlReposirories = `https://api.github.com/users/${inputValue}/repos`;
    const urlOverview = `https://api.github.com/users/${inputValue}`;

    fetch(urlReposirories)
      .then(response => response.json())
      .then(repositories => this.setState({repositories}))
      .catch(() => console.log("Error"));

    fetch(urlOverview)
      .then(response => response.json())
      .then(overview => this.setState({overview}))
      .catch(() => console.log("Error"));

      this.setState({inputValue: ''})
  }

  render() {
    const { 
      inputValue,
      repositories,
      overview
    } = this.state;
    console.log(overview)
    return (
      <>
        <h1 className={styles.title}>My Github Resumé</h1>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <h2 className={styles.enterName}>Github username</h2>
            <div className={styles.send}>
              <input 
                className={styles.sendInput}
                type="text"
                placeholder="John Doe"
                value={inputValue}
                onChange={this.handleChange} 
              />
              <button className={styles.sendBtn}>Generieren</button>
            </div>
          </form>
          <div className={styles.content}>
            {overview && overview.name && <Overview overview={overview} />}
            {repositories.length && <OverviewProjects repositories={repositories} />}
          </div>
        </div>
      </>
    )
  }
} 

export default Home;
