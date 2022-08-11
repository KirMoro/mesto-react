export const Card = (card) => {
    const {
        name, link, likes, _id
    } = card.card;

    return (
        <article className="elements__item" key={_id}>
            <img className="elements__image" src={link} alt={name}/>
            <div className="elements__item-text">
                <h2 className="elements__title">{name}</h2>
                <button type="button" className="elements__like-button" aria-label="Понравилось"></button>
                <span className="elements__like-counter">{likes.length}</span>
            </div>
            <button type="button" className="elements__trash-button" aria-label="Корзина"></button>
        </article>
    )
}
