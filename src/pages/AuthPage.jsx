import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../style/authPage.module.css';

function AuthPage() {
  const navigate = useNavigate();

  function setDataUser(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const pass = e.target.pass.value;
    if (name && pass) {
      localStorage.setItem('userData', JSON.stringify({ 'name': name, 'pass': pass }));
      navigate('/main');
    }
  }

  return (
    <div style={{ height: "calc(100vh - 80px)", backgroundColor: 'rgba(24, 20, 20, 0.987)'}}>
      <div className={style.loginBox}>
        <form onSubmit={(e) => setDataUser(e)}>
          <div className={style.userBox}>
            <input type="text" name="name" required="" />
            <label>Username</label>
          </div>
          <div className={style.userBox}>
            <input type="password" name="pass" required="" />
            <label>Password</label>
          </div>
          <center>
            <button type='submit'>
              SEND
              <span></span>
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
