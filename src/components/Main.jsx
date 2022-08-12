import {api} from "../utils/api";
import {Card} from "./Card";
import {useState, useEffect} from "react";

export const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
    let [userName, setName] = useState();
    let [userDescription, setDescription] = useState();
    let [userAvatar, setAvatar] = useState();
    let [cards, setCards] = useState([]);

    useEffect(() => {
        const initialPromises = Promise.all([
            api.getProfileInfo(),
            api.getInitialCards(),
        ]);

        initialPromises
            .then(([profile, cards]) => {
                setName(profile.name);
                setDescription(profile.about);
                setAvatar(profile.avatar);
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})`}}
                ></div>
                <button type="button" className="profile__edit-avatar-button" aria-label="Редактировать"
                        onClick={onEditAvatar}></button>
                <h1 className="profile__title">{userName}</h1>
                <p className="profile__subtitle">{userDescription}</p>
                <button type="button" className="profile__edit-button" aria-label="Редактировать"
                        onClick={onEditProfile}></button>
                <button type="button" className="profile__add-button" aria-label="Добавить"
                        onClick={onAddPlace}></button>
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
    )
}

