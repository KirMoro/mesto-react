import { useState, useEffect, useContext } from 'react';
import { api } from '../utils/api';
import { Card } from './Card';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

export const Main = ({
  onEditProfile, onAddPlace, onEditAvatar, onCardClick,
}) => {
  const currentUserContext = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const initialPromises = Promise.all([
      api.getProfileInfo(),
      api.getInitialCards(),
    ]);

    initialPromises
      .then(([profile, cardsInfo]) => {
        setCards(cardsInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUserContext._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
      .catch((err) => {
        console.log(err);
      });
  }

function handleCardDelete(card) {
  api.deleteCard(card._id)
    .then((deleteCard) => {
      setCards((state) => state.filter((c) => c._id !== card._id ));
    })
}

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${currentUserContext.avatar})` }}
        />
        <button
          type="button"
          className="profile__edit-avatar-button"
          aria-label="Редактировать"
          onClick={onEditAvatar}
        />
        <h1 className="profile__title">{currentUserContext.name}</h1>
        <p className="profile__subtitle">{currentUserContext.about}</p>
        <button
          type="button"
          className="profile__edit-button"
          aria-label="Редактировать"
          onClick={onEditProfile}
        />
        <button
          type="button"
          className="profile__add-button"
          aria-label="Добавить"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements" aria-label="Галерея">
        {cards.map((card) => (
          <Card
            key={(card._id)}
            card={card}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
};
