import { Link } from "react-router-dom";
import style from '../style/mainPageNot.module.css'
export default function MainPageNot() {

  return (
    <main className={style.main}>
      <div className={style.mainWrapper}>
        <div className={style.mainText}>
          <div className={style.mainTitle}>
            <h1>Лучшая пицца </h1>
            <p>Твой кусочек счастья</p>
          </div>
          <div className={style.mainDesc}>
            <p>Добро пожаловать в Pizza Paradise!
              Мы рады приветствовать вас в нашем уютном уголке с идеальными пиццами. <br /> В нашем ассортименте вы найдете самые разнообразные и вкусные варианты пиццы, которые удовлетворят любой вкус и предпочтения.
              Выбирайте из нашего богатого ассортимента: от классических комбинаций до эксклюзивных авторских рецептов. Мы используем только самые свежие и качественные ингредиенты, чтобы каждая пицца была истинным кулинарным произведением и доставила вам незабываемое удовольствие.
              Наши горячие и вкусные пиццы доступны для заказа как на вынос, так и с доставкой прямо к вашему дому. Насладитесь ароматом свежеиспеченной пиццы и наслаждайтесь вкусом вместе с друзьями и семьей.
              Приходите к нам в гости или сделайте заказ прямо сейчас и откройте для себя волшебство наших пицц!</p>
          </div>
        </div>
        <div className={style.mainInfo}>
          <div className={style.mainInfoWrapper}>
            <div className={style.mainInfoCard}>
              <div className={style.mainInfoItem}>
                <p>
                  войдите в вашу учетную запись, чтобы продолжить наслаждаться вашей любимой пиццой!
                </p>
                <Link to='/auth' className={style.link}>Войти</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}