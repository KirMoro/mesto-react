import {useContext} from "react";
import classNames from 'classnames';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

export const Card = ({ onCardClick, card: { name, link, likes, owner } }) => {
  const currentUserContext = useContext(CurrentUserContext);

  const isOwn = owner._id === currentUserContext._id;
  console.log(isOwn)

  const cardDeleteButtonClassName = (
    `elements__trash-button ${isOwn ? 'elements__trash-button_visible' : ''}`
  );

  function handleClick() {
    onCardClick(link);
  }

  return (
    <article className="elements__item">
      <img className="elements__image" src={link} alt={name} onClick={() => handleClick()} />
      <div className="elements__item-text">
        <h2 className="elements__title">{name}</h2>
        <button type="button" className="elements__like-button" aria-label="Понравилось" />
        <span className="elements__like-counter">{likes.length}</span>
      </div>
      <button type="button" className={cardDeleteButtonClassName} aria-label="Корзина" />
    </article>
  );
};
