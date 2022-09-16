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
          />
        ))}
      </section>
    </main>
  );
};
