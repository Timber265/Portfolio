import { useState, useEffect } from 'react';
import style from '../style/SetProducts.module.css';

export default function BasketPage() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('products'));
    if (data) {
      setProd(data);
    }
  }, []);

  function deleteProd(id) {
    const updatedProd = prod.filter((elem) => elem.id !== id);
    setProd(updatedProd);
    localStorage.setItem('products', JSON.stringify(updatedProd));
  }

  return (
    <div className={style.pizza}>
      <h1>Корзина</h1>
      <div className={style.pizzaWrapper}>
        {prod && prod.map((elem) => {
          return (
            <div key={elem.id} className={style.pizzaItem}>
              <div>
                <div><img src={elem.image} alt={elem.title} /></div>
                <h3>{elem.title}</h3>
                <p>{elem.description}</p>
              </div>
              <div className={style.pizzaBtn}>
                <p>{elem.price}</p>
                <button type="button" className={style.pizzaButton} onClick={() => deleteProd(elem.id)}>Удалить</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
