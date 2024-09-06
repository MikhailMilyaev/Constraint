import React from 'react';
import classes from './Intro.module.css';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <h1 className={classes.title}>ПРОЦЕССИНГ</h1>
        <p className={classes.subtitle}>
          ПРАКТИКА ДУХОВНОГО ВОЗРАЖДЕНИЯ
          <br /><br />
        </p>
        <p className={classes.description}>
          Открой свой истинный потенциал и стань творцом своей жизни!
          <br />
          {/* Уникальная технология работы с разумом на основе глубокого
          изучения буддизма! */}
        </p>
        <Link to="/login" ><button to="/login" className={classes.button}>Начать путь</button></Link>
      </div>
    </section>
  );
};

export default Intro;