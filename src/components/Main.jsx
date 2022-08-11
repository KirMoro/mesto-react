import {api} from "../utils/api";
import {Card} from "./Card";
import {useState} from "react";
import {useEffect} from "react";


export const Main = ({ onEditProfile, onAddPlace, onEditAvatar }) => {
    let [userName, setName] = useState();
    let [userDescription, setDescription] = useState();
    let [userAvatar, setAvatar] = useState();
    let [cards, setCards] = useState([]);

    useEffect(() => {
        api.getProfileInfo()
            .then((profile) => {
                userName = setName(profile.name);
                userDescription = setDescription(profile.about);
                userAvatar = setAvatar(profile.avatar);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        api.getInitialCards()
            .then((cardsInfo) => {
                cards = setCards(cardsInfo)
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
                        onClick={() => onEditAvatar(true)}></button>
                <h1 className="profile__title">{userName}</h1>
                <p className="profile__subtitle">{userDescription}</p>
                <button type="button" className="profile__edit-button" aria-label="Редактировать"
                        onClick={() => onEditProfile(true)}></button>
                <button type="button" className="profile__add-button" aria-label="Добавить"
                        onClick={() => onAddPlace(true)}></button>
            </section>
            <section className="elements" aria-label="Галерея">
                {cards.map((card) => (
                    <Card
                        card={card}
                    />
                ))}
            </section>
        </main>
    )
}

