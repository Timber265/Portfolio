import { useState, useEffect } from "react"
import { useGetPizzaApiByNameQuery } from "../service/service"
import style from '../style/SetProducts.module.css'

import { useSelector, useDispatch } from 'react-redux'


export default function SetProducts({ parametr }) {
  const [mark, setMark] = useState([])
  const value = useSelector((state) => state.search.value)

  
  useEffect(() => {
    const storedProducts = localStorage.getItem('products')
    if (storedProducts !== null) {
      setMark(JSON.parse(storedProducts))
    }
  }, []) 

  function setStorage(prod) {
    const exists = mark.some(elem => elem.id === prod.id);
    if (!exists) {
      const newMark = [...mark, prod];
      setMark(newMark);
      localStorage.setItem('products', JSON.stringify(newMark));
    }
  }

  const { data, error, isLoading } = useGetPizzaApiByNameQuery(parametr)
  const filteredItems = data && data.filter(item => item.title.includes(value));

  return (
    <div className={style.pizza}>
      <div className={style.pizzaWrapper}>
        {filteredItems && filteredItems.map((prod) => {
          return (
            <div key={prod.id} className={style.pizzaItem}>
              <div>
                <div><img src={prod.image} alt={prod.title} /></div>
                <h3>{prod.title}</h3>
                <p>{prod.description}</p>
              </div>
              <div className={style.pizzaBtn}>
                <p>{prod.price}</p>
                <button type="button" className={style.pizzaButton} onClick={(e) => setStorage(prod)}>Выбрать</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}