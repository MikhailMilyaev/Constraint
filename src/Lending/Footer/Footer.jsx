import React from 'react';
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        {/* Название */}
        <Link to="#" onClick={scrollToTop} className={classes.brandName}>
          Constraint
        </Link>

        {/* Политика обработки данных (для десктопной версии) */}
        <a href="#политика" className={classes.policyDesktop}> 
          Политика обработки персональных данных
        </a>

        {/* Telegram (для десктопной версии) */}
        <a href="https://t.me/pinky589" className={classes.telegramDesktop} target='blink'>
          <img
            src="https://pngicon.ru/file/uploads/telegram.png"
            alt="Telegram"
            className={classes.icon}
          />
          <span>По всем вопросам</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
