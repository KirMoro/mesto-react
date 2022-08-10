export const ImagePopup = () => {
    return (
        <div className="popup popup_color_black popup_type_image">
            <figure className="popup__gallery">
                <img className="popup__image"/>
                <figcaption className="popup__capture"></figcaption>
                <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
            </figure>
        </div>
    )
}
