export const Card = ({ onCardClick, card: { name, link, likes } }) => {
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
      <button type="button" className="elements__trash-button" aria-label="Корзина" />
    </article>
  );
};
