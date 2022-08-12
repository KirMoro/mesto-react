import '../pages/index.css';
import {Header} from './Header';
import {Main} from './Main';
import {Footer} from "./Footer";
import {PopupWithForm} from "./PopupWithForm";
import {ImagePopup} from "./ImagePopup";
import {useState} from "react";

function App() {
    const [isEditProfilePopupOpen, handleEditProfileClick] = useState();
    const [isAddPlacePopupOpen, handleAddPlaceClick] = useState();
    const [isEditAvatarPopupOpen, handleEditAvatarClick] = useState();
    const [isConfirmPopupOpen, handleConfirmClick] = useState();
    const [selectedCard, handleCardClick] = useState();

    const closeAllPopups = () => {
        handleEditProfileClick();
        handleAddPlaceClick();
        handleEditAvatarClick();
        handleConfirmClick();
        handleCardClick('');
    }

    return (
        <div className="page">
            <Header/>
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
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
            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />
        </div>);
}

export default App;
