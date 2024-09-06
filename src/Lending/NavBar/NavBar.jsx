import React, { useState, useEffect } from 'react';
import classes from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [showFullNav, setShowFullNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleFullNav = () => {
    setShowFullNav(!showFullNav);
  };


  // Обработчик для блокировки прокрутки
  useEffect(() => {
    const body = document.querySelector('body');
    if (showFullNav) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [showFullNav]);

  // Обработчик для изменения размера окна
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={classes.navBar}>
      <div className={classes.container}>
        <div className={classes.brand}>
          <img
            src="https://cdn.leonardo.ai/users/11490471-750d-4139-b725-e1782ef5308f/generations/d9716816-b0bf-4314-9665-b093bbac1da4/Graphic_Design_make_a_logo_for_the_website_psychological_prac_1.jpg"
            alt="Логотип"
            className={classes.logo}
          />
          <span className={classes.brandName}>Constraint</span>
        </div>

        {/* Ссылки навигации для десктопной версии */}
        <div className={classes.navLinks}>
          <a href="#">Процессинг</a>
          <a href="#">Как это работает?</a>
          <a href="#">Результаты</a>
          <a href="#">Автор</a>
          <a href="#">Отзывы</a>
          <a href="#">FAQ</a>
          <a href="#">Контакты</a>
        </div>

        <div className={classes.navActions}>
          <Link to="/login" ><button className={classes.loginButton}>ВОЙТИ</button></Link>

          {/* Кнопка меню (для мобильных и планшетов) */}
          {windowWidth < 1024 && (
            <button className={classes.menuButton} onClick={toggleFullNav}>
              <span className={classes.menuIcon}>☰</span>
            </button>
          )}
        </div>
      </div>

      {/* Выезжающая панель (для мобильных и планшетов) */}
      {windowWidth < 1024 && (
        <div
          className={`${classes.fullNav} ${showFullNav ? classes.open : ''}`}
          onClick={toggleFullNav}
        >
          <div className={classes.fullNavLinks}>
            <a href="#">Процессинг</a>
            <a href="#">Как это работает?</a>
            <a href="#">Результаты</a>
            <a href="#">Автор</a>
            <a href="#">Отзывы</a>
            <a href="#">FAQ</a>
            <a href="#">Контакты</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;