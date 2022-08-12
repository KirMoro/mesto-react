import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import { Card } from './Card';

export const Main = ({
  onEditProfile, onAddPlace, onEditAvatar, onCardClick,
}) => {
  const [userName, setName] = useState();
  const [userDescription, setDescription] = useState();
  const [userAvatar, setAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const initialPromises = Promise.all([
      api.getProfileInfo(),
      api.getInitialCards(),
    ]);

    initialPromises
      .then(([profile, cardsInfo]) => {
        setName(profile.name);
        setDescription(profile.about);
        setAvatar(profile.avatar);
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
          style={{ backgroundImage: `url(${userAvatar})` }}
        />
        <button
          type="button"
          className="profile__edit-avatar-button"
          aria-label="Редактировать"
          onClick={onEditAvatar}
        />
        <h1 className="profile__title">{userName}</h1>
        <p className="profile__subtitle">{userDescription}</p>
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
