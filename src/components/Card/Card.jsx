/* eslint-disable no-unused-vars */
import React from 'react';
import uniqid from 'uniqid';
import moment from 'moment';
import PropTypes from 'prop-types';
import classes from './Card.module.scss'
// import logo from '../../img/S7-Logo.png'

function Card({ price, logoId, segments }) {
  // const format = (value) => value.toString().length === 1 ? `0${value}` : value


  const getEndTime = (str, duration = 0) => {

    const timeStamp = Date.parse(str);
    const durationToMs = duration * 60 * 1000;
    const endMillisec = timeStamp + durationToMs


    return endMillisec
  }


  return (
    <div className={classes.card}>
      <div className={classes.card__header}>
        <div className={classes.card__price}>
          {price.toLocaleString()} Р
        </div>
        <div className={classes.card__logo}>
          <img
            src={
              logoId
                ? `https://pics.avs.io/99/36/${logoId}.png`
                : 'https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY='
            }
            alt=""
          />
        </div>
      </div>
      {
        segments.map(segment =>
          <div
            key={uniqid()}
            className={classes.card__row}
          >
            <div className={classes.card__info}>
              <div className={classes.card__title}>
                {segment.origin} – {segment.destination}
              </div>
              <div className={classes.card__descr}>

                {moment(segment.date).utc().format('hh:mm')}

                &nbsp;-&nbsp;

                {(moment(getEndTime(segment.date, segment.duration)).utc().format('hh:mm'))

                }

              </div>
            </div>
            <div className={classes.card__info}>
              <div className={classes.card__title}>
                В пути
              </div>
              <div className={classes.card__descr}>
                {moment().hours(segment.duration).format('h')}ч&nbsp;
                {moment().minutes(segment.duration).format('m')}м

              </div>
            </div>
            <div className={classes.card__info}>
              <div className={classes.card__title}>
                {segment.stops.length} пересадки
              </div>
              <div className={classes.card__descr}>
                {segment.stops.join(', ')}
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

Card.defaultProps = {
  price: 0,
  logoId: '',
  segments: []
};

Card.propTypes = {
  price: PropTypes.number,
  logoId: PropTypes.string,
  segments: PropTypes.arrayOf(PropTypes.object)
};

export default Card;