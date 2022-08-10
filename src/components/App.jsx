import '../pages/index.css';
import {Header} from './Header';
import {Main} from './Main';
import {Footer} from "./Footer";
import {PopupWithForm} from "./PopupWithForm";
import {useState} from "react";
import {ImagePopup} from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, handleEditProfileClick] = useState(false);
    const [isAddPlacePopupOpen, handleAddPlaceClick] = useState(false);
    const [isEditAvatarPopupOpen, handleEditAvatarClick] = useState(false);
    const [isConfirmPopupOpen, handleConfirmClick] = useState(false);

    const closeAllPopups = () => {
        handleEditProfileClick(false)
        handleAddPlaceClick(false)
        handleEditAvatarClick(false)
        handleConfirmClick(false)
    }

    return (
        <div className="page">
            <Header/>
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
            />
            <Footer/>
            <PopupWithForm
                name="edit"
                title="Редактировать профиль"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
                <fieldset className="form__fields">
                    <label className="form__input">
                        <input id="name-input" type="text" name="name" placeholder="Имя"
                               className="form__field form__field_type_name"
                               minLength="2" maxLength="40" required/>
                        <span className="form__field-error name-input-error"></span>
                    </label>
                    <label className="form__input">
                        <input id="about-input" type="text" name="about" placeholder="О себе"
                               className="form__field form__field_type_about" minLength="2" maxLength="200"
                               required/>
                        <span className="form__field-error about-input-error"></span>
                    </label>
                    <button type='submit' className="form__submit-button" aria-label="Сохранить">Сохранить
                    </button>
                </fieldset>
            </PopupWithForm>
            <PopupWithForm
                name="add"
                title="Новое место"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            >
                <fieldset className="form__fields">
                    <label className="form__input">
                        <input id="title-input" type="text" name="name" placeholder="Название"
                               className="form__field form__field_type_title" minLength="2" maxLength="30"
                               required/>
                        <span className="form__field-error title-input-error"></span>
                    </label>
                    <label className="form__input">
                        <input id="url-input" type="url" name="link" placeholder="Ссылка на картинку"
                               className="form__field form__field_type_link" required/>
                        <span className="form__field-error url-input-error"></span>
                    </label>
                    <button type='submit' className="form__submit-button" aria-label="Создать">Создать</button>
                </fieldset>
            </PopupWithForm>
            <PopupWithForm
                name="add-avatar"
                title="Обновить аватар"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <fieldset className="form__fields">
                    <label className="form__input">
                        <input id="url-avatar-input" type="url" name="avatar" placeholder="Ссылка на картинку"
                               className="form__field form__field_type_link" required/>
                        <span className="form__field-error url-avatar-input-error"></span>
                    </label>
                    <button type='submit' className="form__submit-button" aria-label="Сохранить">Сохранить
                    </button>
                </fieldset>
            </PopupWithForm>
            <PopupWithForm
                name="confirm"
                title="Вы уверены?"
                isOpen={isConfirmPopupOpen}
                onClose={closeAllPopups}
            >
                <fieldset className="form__fields">
                    <button type='submit' className="form__submit-button" aria-label="Да">Да</button>
                </fieldset>
            </PopupWithForm>
            <ImagePopup/>

            <template id="item-template">
                <article className="elements__item">
                    <input type="image" className="elements__image" alt=""/>
                    <div className="elements__item-text">
                        <h2 className="elements__title"></h2>
                        <button type="button" className="elements__like-button" aria-label="Понравилось"></button>
                        <span className="elements__like-counter"></span>
                    </div>
                    <button type="button" className="elements__trash-button" aria-label="Корзина"></button>
                </article>
            </template>
        </div>);
}

export default App;
