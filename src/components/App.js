import '../pages/index.css';
import {Header} from './Header';
import {Main} from './Main';
import {Footer} from "./Footer";
import {PopupWithForm} from "./PopupWithForm";

function App() {

    let isEditProfilePopupOpen = '';
    let isAddPlacePopupOpen = '';
    let isEditAvatarPopupOpen = '';

    const handleEditAvatarClick = () => {
        return isEditAvatarPopupOpen = true;
    }
    const handleEditProfileClick = () => {
        return isEditProfilePopupOpen = true;
    }

    const handleAddPlaceClick = () => {
        return isAddPlacePopupOpen = true;
    }

    return (
        <div className="page">
            <Header/>
            <Main
                onEditProfile = {handleEditProfileClick}
                onAddPlace = {handleAddPlaceClick}
                onEditAvatar = {handleEditAvatarClick}
            />
            <Footer/>

            <PopupWithForm
                name="Редактировать профиль"
                title="edit"
                isOpen={isEditProfilePopupOpen}
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

            <div className="popup popup_type_add">
                <div className="popup__container">
                    <h3 className="popup__title">Новое место</h3>
                    <form name="form-add" className="form form_type_add" noValidate>
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
                    </form>
                    <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
                </div>
            </div>
            <div className="popup popup_type_confirm">
                <div className="popup__container">
                    <h3 className="popup__title">Вы уверены?</h3>
                    <form name="form-add" className="form form_type_confirm" noValidate>
                        <fieldset className="form__fields">
                            <button type='submit' className="form__submit-button" aria-label="Да">Да</button>
                        </fieldset>
                    </form>
                    <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
                </div>
            </div>
            <div className="popup popup_type_add-avatar">
                <div className="popup__container">
                    <h3 className="popup__title">Обновить аватар</h3>
                    <form name="form-add" className="form form_type_add-avatar" noValidate>
                        <fieldset className="form__fields">
                            <label className="form__input">
                                <input id="url-avatar-input" type="url" name="avatar" placeholder="Ссылка на картинку"
                                       className="form__field form__field_type_link" required/>
                                <span className="form__field-error url-avatar-input-error"></span>
                            </label>
                            <button type='submit' className="form__submit-button" aria-label="Сохранить">Сохранить
                            </button>
                        </fieldset>
                    </form>
                    <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
                </div>
            </div>
            <div className="popup popup_color_black popup_type_image">
                <figure className="popup__gallery">
                    <img className="popup__image"/>
                    <figcaption className="popup__capture"></figcaption>
                    <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
                </figure>
            </div>
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
