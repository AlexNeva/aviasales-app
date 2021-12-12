import React from 'react';
import classes from './Card.module.scss'
import logo from '../../img/S7-Logo.png'

function Card() {
  return (
    <div className={classes.card}>
      <div className={classes.card__header}>
        <div className={classes.card__price}>
          13 400 Р
        </div>
        <div className={classes.card__logo}>
          <img src={logo} alt="" />
        </div>
      </div >
      <div className={classes.card__row}>
        <div className={classes.card__info}>
          <div className={classes.card__title}>
            MOW – HKT
          </div>
          <div className={classes.card__descr}>
            10:45 – 08:00
          </div>
        </div>
        <div className={classes.card__info}>
          <div className={classes.card__title}>
            В пути
          </div>
          <div className={classes.card__descr}>
            21ч 15м
          </div>
        </div>
        <div className={classes.card__info}>
          <div className={classes.card__title}>
            2 пересадки
          </div>
          <div className={classes.card__descr}>
            HKG, JNB
          </div>
        </div>
      </div>
      <div className={classes.card__row}>
        <div className={classes.card__info}>
          <div className={classes.card__title}>
            MOW – HKT
          </div>
          <div className={classes.card__descr}>
            11:20 – 00:50
          </ div>
        </div>
        <div className={classes.card__info}>
          <div className={classes.card__title}>
            В пути
          </div>
          <div className={classes.card__descr}>
            13ч 30м
          </div>
        </div >
        <div className={classes.card__info}>
          <div className={classes.card__title}>
            1 пересадка
          </div>
          <div className={classes.card__descr}>
            HKG
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;