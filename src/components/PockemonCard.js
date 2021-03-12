import { useState } from 'react';

import s from './PockemonCard.module.css';

export const PockemonCard = ({...props}) => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  }

  return (
    <div className={s.root} onClick={handleClick}>
      <div className={ `${s.pokemonCard} ${isActive ? s.active : ''}` }>
        <div className={s.cardFront}>
          <div className={s.wrap + ' ' + s.front}>
            <div className={s.pokemon + ' ' + s[props.type]}>
                <div className={s.values}>
                  <div className={s.count + ' ' + s.top}>{ props.values.top }</div>
                  <div className={s.count + ' ' + s.right}>{ props.values.right }</div>
                  <div className={s.count + ' ' + s.bottom}>{ props.values.bottom }</div>
                  <div className={s.count + ' ' + s.left}>{ props.values.left }</div>
                </div>
                <div className={s.imgContainer}>
                  <img src={props.img} alt={props.name} />
                </div>
                <div className={s.info}>
                  <span className={s.number}>#{ props.pID }</span>
                  <h3 className={s.name}>{props.name}</h3>
                  <small className={s.type}>Type: <span>{ props.type }</span></small>
                </div>
              </div>
          </div>
        </div>

        <div className={s.cardBack}>
          <div className={s.wrap + ' ' + s.back}>
            <img src={ props.backPicture } alt="Сard Backed" />
          </div>
        </div>

      </div>
    </div>
  )
}