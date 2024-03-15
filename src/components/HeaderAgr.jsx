import { Link, useNavigate } from 'react-router-dom';
import pizzaImage from '../assets/logo.png';
import style from '../style/HeaderAgr.module.css'

import { setValue } from '../slice/searchSlice';
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';

export default function HeaderAgr() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function delDataUser(e) {
    e.preventDefault()
    localStorage.removeItem('userData')
    navigate("/")
  }

  let [userData, setUserData] = useState([])
  useEffect(() => {
    userData = JSON.parse(localStorage.getItem('userData'))
    if(!userData) {
      navigate('/auth')
    }
  })

  return (
    <form onSubmit={(e) => delDataUser(e)}>
      <header className={style.header}>
        <div className={style.headerWrapper}>
          <div className={style.headerLogo}>
            <Link to='/main'><img src={pizzaImage} alt="Pizza Paradise" /></Link>
            <Link to='/main' style={{ textDecoration: 'none' }}><p>Pizza Paradise</p></Link>
          </div>
          <nav className={style.headerMenu}>
            <ul>
              <li><Link to='/main/combo' className={style.link}>Комбо</Link></li>
              <li><Link to='/main/pizza' className={style.link}>Пицца</Link></li>
            </ul>
          </nav>
          <div className={style.headerSearch}>
            <input type="text" placeholder='найти пиццу' onChange={(e) => dispatch(setValue(e.target.value))} />
            <Link to='/main/basket' className={style.linkBasket}>Корзина</Link>
          </div>
          <div className={style.headerLogin}>
            <button className={style.link}>Выйти</button>
          </div>
        </div>
      </header>
    </form>
  )
}