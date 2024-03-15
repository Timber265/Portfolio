import { Link } from "react-router-dom";
import pizzaImage from '../assets/logo.png';
import style from '../style/HeaderNot.module.css'
export default function HeaderNot() {
  return (
    <>
    <header className={style.header}>
        <div className={style.headerWrapper}>
          <div className={style.headerLogo}>
            <Link to='/'><img src={pizzaImage} alt="Pizza Paradise" /></Link>
            <Link to='/' style={{textDecoration: 'none'}}><p>Pizza Paradise</p></Link> 
          </div>
          <div className={style.headerLogin}>
            <Link to='/auth' className={style.link}>Войти</Link>
          </div>
        </div>
      </header>
    </>
  )
}