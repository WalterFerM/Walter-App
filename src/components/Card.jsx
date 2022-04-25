import React from 'react';
import Styles from './Css Modules/Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  function validOnClose(){
    if(typeof onClose === 'function') onClose();
  }
  return (
  <div className={Styles.card}>
    <button className={Styles.closeBtn} onClick={validOnClose}>X</button>
    <span className={Styles.cityName}>{name}</span>
    <div className={Styles.temp}>
      <label>Max</label>
      <span>{max}</span>
    </div>
    <div className={Styles.temp}>
      <label>Min</label>
      <span>{min}</span>
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono del clima" className={Styles.cardIcon}/>
    
  </div>)

};

