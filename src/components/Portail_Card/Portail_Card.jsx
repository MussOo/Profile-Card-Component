import React from 'react';
import style from './Portail_Card.module.scss';
import bg_pattern_card from '../../../public/images/bg-pattern-card.svg';

export default function Portail_Card() {
  return (
    <div className={style.card}>
      <div className={style.card__header}>
        <img src={bg_pattern_card} alt='bg-pattern-top' />
      </div>
      <div className={style.card__body}>
        <div className={style.card__body__image}>
          <img src='images/image-victor.jpg' alt='image-victor' />
        </div>
        <div className={style.card__body__profil_info}>
          <div>
            <h2 className={style.card__Name__info}>
              Victor Crest <span>26</span>
            </h2>
          </div>
          <div>
            <span>London</span>
          </div>
        </div>

        <div className={style.lign}></div>
        <div className={style.card__body__stat}>
          <div className={style.container_counter}>
            <div className={style.card__body__counter}>
              <span>
                <strong>80K</strong>
              </span>
              <span className={style.card__body__counter__label}>Follower</span>
            </div>
            <div className={style.card__body__counter}>
              <span>
                <strong>80K</strong>
              </span>
              <span className={style.card__body__counter__label}>Likes</span>
            </div>
            <div className={style.card__body__counter}>
              <span>
                <strong>80K</strong>
              </span>
              <span className={style.card__body__counter__label}>Photos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
