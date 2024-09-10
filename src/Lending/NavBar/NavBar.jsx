import React, { useState, useEffect, useCallback } from 'react';
import classes from './NavBar.module.css';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {
  const [showFullNav, setShowFullNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  // Используем useCallback для handleScroll
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && showNav) {
      setShowNav(false);
    } else if (currentScrollY < lastScrollY && !showNav) {
      setShowNav(true);
    }
    setLastScrollY(currentScrollY);
  }, [showNav, lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className={`${classes.navBar} ${!showNav ? classes.hidden : ''}`}>
      <div className={classes.container}>
        <div className={classes.brand}>
          <img
            src="https://cdn.leonardo.ai/users/11490471-750d-4139-b725-e1782ef5308f/generations/d9716816-b0bf-4314-9665-b093bbac1da4/Graphic_Design_make_a_logo_for_the_website_psychological_prac_1.jpg"
            alt="Логотип"
            className={classes.logo}
          />
          <Link to="#" smooth={true} className={classes.brandLink}>
            <span className={classes.brandName}>Constraint</span>
          </Link>  
        </div>

        {/* Ссылки навигации для десктопной версии */}
        <div className={classes.navLinks}>
          <Link to="#inner-space" smooth={true}>Внутреннее пространство</Link>
          <Link to="#ideas" smooth={true}>Идеи</Link>
          <Link to="#thoughts-images" smooth={true}>Мысли – образы</Link>
          <Link to="#results" smooth={true}>Результаты</Link>
          <Link to="#author" smooth={true}>Автор</Link>
        </div>

        <div className={classes.navActions}>
          <Link to="/login"><button className={classes.loginButton}>ВОЙТИ</button></Link>

          {/* Кнопка меню (для мобильных и планшетов) */}
          {windowWidth < 1024 && (
            <button className={classes.menuButton} onClick={toggleFullNav}>
              <span className={classes.menuIcon}>☰</span>
            </button>)}
        </div>
      </div>

      {/* Выезжающая панель (для мобильных и планшетов) */}
      {windowWidth < 1024 && (
        <div
          className={`${classes.fullNav} ${showFullNav ? classes.open : ''}`}
          onClick={toggleFullNav}>
          <div className={classes.fullNavLinks}>
            <Link to="#inner-space" smooth={true} onClick={toggleFullNav}>Внутреннее пространство</Link>
            <Link to="#ideas" smooth={true} onClick={toggleFullNav}>Идеи</Link>
            <Link to="#thoughts-images" smooth={true} onClick={toggleFullNav}>Мысли – образы</Link>
            <Link to="#results" smooth={true} onClick={toggleFullNav}>Результаты</Link>
            <Link to="#author" smooth={true} onClick={toggleFullNav}>Автор</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;