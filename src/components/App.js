import '../pages/index.css';
import { useState } from 'react';
import { Header } from './Header.js';
import { Main } from './Main.js';
import { Footer } from './Footer.js';
import { PopupWithForm } from './PopupWithForm.js';
import { ImagePopup } from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, handleEditProfileClick] = useState(false);
  const [isAddPlacePopupOpen, handleAddPlaceClick] = useState(false);
  const [isEditAvatarPopupOpen, handleEditAvatarClick] = useState(false);
  const [isConfirmPopupOpen, handleConfirmClick] = useState(false);
  const [selectedCard, handleCardClick] = useState(null);

  const closeAllPopups = () => {
    handleEditProfileClick();
    handleAddPlaceClick();
    handleEditAvatarClick();
    handleConfirmClick();
    handleCardClick('');
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <fieldset className="form__fields">
          <label className="form__input">
            <input
              id="name-input"
              type="text"
              name="name"
              placeholder="Имя"
              className="form__field form__field_type_name"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="form__field-error name-input-error" />
          </label>
          <label className="form__input">
            <input
              id="about-input"
              type="text"
              name="about"
              placeholder="О себе"
              className="form__field form__field_type_about"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="form__field-error about-input-error" />
          </label>
        </fieldset>
      </PopupWithForm>
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
  );
}

export default App;
