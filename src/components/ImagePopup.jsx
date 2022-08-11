import classNames from "classnames";

export const ImagePopup = ({ card, onClose }) => {
    return (
        <div className={classNames('popup', 'popup_color_black', 'popup_type_image',  {popup_opened: card})}>
            <figure className="popup__gallery">
                <img className="popup__image" src={card}/>
                <figcaption className="popup__capture"></figcaption>
                <button type="button" className="popup__close-button" aria-label="Закрыть" onClick={onClose}></button>
            </figure>
        </div>
    )
}
