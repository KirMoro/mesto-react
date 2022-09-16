import '../pages/index.css';
import { useEffect, useState} from 'react';
import { Header } from './Header.js';
import { Main } from './Main.js';
import { Footer } from './Footer.js';
import { EditProfilePopup } from "./EditProfilePopup";
import { PopupWithForm } from './PopupWithForm.js';
import { ImagePopup } from './ImagePopup.js';
import {api} from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    api.getProfileInfo()
      .then((userData) => setCurrentUser(userData))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [isEditProfilePopupOpen, handleEditProfileClick] = useState(false);
  const [isAddPlacePopupOpen, handleAddPlaceClick] = useState(false);
  const [isEditAvatarPopupOpen, handleEditAvatarClick] = useState(false);
  const [isConfirmPopupOpen, handleConfirmClick] = useState(false);
  const [selectedCard, handleCardClick] = useState(null);

  const closeAllPopups = () => {
    handleEditProfileClick(false);
    handleAddPlaceClick(false);
    handleEditAvatarClick(false);
    handleConfirmClick(false);
    handleCardClick(null);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>

    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Создать"
      >
        <fieldset className="form__fields">
          <label className="form__input">
            <input
              id="title-input"
              type="text"
              name="name"
              placeholder="Название"
              className="form__field form__field_type_title"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="form__field-error title-input-error" />
          </label>
          <label className="form__input">
            <input
              id="url-input"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              className="form__field form__field_type_link"
              required
            />
            <span className="form__field-error url-input-error" />
          </label>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="add-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <fieldset className="form__fields">
          <label className="form__input">
            <input
              id="url-avatar-input"
              type="url"
              name="avatar"
              placeholder="Ссылка на картинку"
              className="form__field form__field_type_link"
              required
            />
            <span className="form__field-error url-avatar-input-error" />
          </label>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        buttonText="Да"
      >
        <fieldset className="form__fields">
        </fieldset>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
