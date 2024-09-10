import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Login.module.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Проверка валидности данных
    if (!email || !password) {
      setErrorMessage('Пожалуйста, заполните все поля');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Введите корректный email');
      return;
    }

    try {
      const response = await axios.post('/api/login', { email, password });
      const token = response.data.token;

      // Сохраняем токен в localStorage
      localStorage.setItem('token', token);

      // Перенаправляем пользователя (например, на главную страницу)
      window.location.href = '/'; 
    } catch (error) {
      setErrorMessage(error.response.data.message || 'Произошла ошибка при авторизации');
    }
  };

  const handleEmailClear = () => {
    setEmail('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={classes.container}>
      <form className={classes.loginForm} onSubmit={handleSubmit}>
        <Link to="/" className={classes.brand}>
          <img
            src="https://cdn.leonardo.ai/users/11490471-750d-4139-b725-e1782ef5308f/generations/d9716816-b0bf-4314-9665-b093bbac1da4/Graphic_Design_make_a_logo_for_the_website_psychological_prac_1.jpg"
            alt="Логотип"
            className={classes.logo}
          />
          <span className={classes.brandName}>Constraint</span>
        </Link>

        <h2 className={classes.title}>Вход</h2>

        {errorMessage && <div className={classes.error}>{errorMessage}</div>}

        <div className={classes.inputGroup}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.input}
            placeholder="Электронная почта"
          />
          {email && (
            <span className={classes.clearIcon} onClick={handleEmailClear}>
              ✖ 
            </span>
          )}
        </div>

        <div className={classes.inputGroup}>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={classes.input}
            placeholder="Пароль"
          />
          {password && (
            <span
              className={classes.passwordIcon}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          )}
        </div>

        <button type="submit" className={classes.button}>
          Вперед
        </button>

        <p className={classes.signupLink}>
          Нет аккаунта? <Link to="/registration">Регистрироваться</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;