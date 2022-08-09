import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="page">
      <header className="header">
        <img src="<%=require('./images/header-logo.svg')%>" className="header__logo" alt="Логотип"/>
      </header>
      <main className="content">
        <section className="profile">
          <img src="" className="profile__avatar" alt="Аватарка"/>
          <button type="button" className="profile__edit-avatar-button" aria-label="Редактировать"></button>
          <h1 className="profile__title"></h1>
          <p className="profile__subtitle"></p>
          <button type="button" className="profile__edit-button" aria-label="Редактировать"></button>
          <button type="button" className="profile__add-button" aria-label="Добавить"></button>
        </section>
        <section className="elements" aria-label="Галерея"></section>
        <footer className="footer">
          <p className="footer__copyright">© 2022 Mesto Russia</p>
        </footer>
      </main>
      <div className="popup popup_type_edit">
        <div className="popup__container">
          <h3 className="popup__title">Редактировать профиль</h3>
          <form name="form-edit" className="form form_type_edit" noValidate>
            <fieldset className="form__fields">
              <label className="form__input">
                <input id="name-input" type="text" name="name" placeholder="Имя"
                       className="form__field form__field_type_name"
                       minLength="2" maxLength="40" required />
                <span className="form__field-error name-input-error"></span>
              </label>
              <label className="form__input">
                <input id="about-input" type="text" name="about" placeholder="О себе"
                       className="form__field form__field_type_about" minLength="2" maxLength="200" required />
                <span className="form__field-error about-input-error"></span>
              </label>
              <button type='submit' className="form__submit-button" aria-label="Сохранить">Сохранить</button>
            </fieldset>
          </form>
          <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
        </div>
      </div>
      <div className="popup popup_type_add">
        <div className="popup__container">
          <h3 className="popup__title">Новое место</h3>
          <form name="form-add" className="form form_type_add" noValidate>
            <fieldset className="form__fields">
              <label className="form__input">
                <input id="title-input" type="text" name="name" placeholder="Название"
                       className="form__field form__field_type_title" minLength="2" maxLength="30" required />
                <span className="form__field-error title-input-error"></span>
              </label>
              <label className="form__input">
                <input id="url-input" type="url" name="link" placeholder="Ссылка на картинку"
                       className="form__field form__field_type_link" required />
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
                       className="form__field form__field_type_link" required />
                <span className="form__field-error url-avatar-input-error"></span>
              </label>
              <button type='submit' className="form__submit-button" aria-label="Сохранить">Сохранить</button>
            </fieldset>
          </form>
          <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
        </div>
      </div>
      <div className="popup popup_color_black popup_type_image">
        <figure className="popup__gallery">
          <img className="popup__image" />
          <figcaption className="popup__capture"></figcaption>
          <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
        </figure>
      </div>
      <template id="item-template">
        <article className="elements__item">
          <input type="image" className="elements__image" alt="" />
          <div className="elements__item-text">
            <h2 className="elements__title"></h2>
            <button type="button" className="elements__like-button" aria-label="Понравилось"></button>
            <span className="elements__like-counter"></span>
          </div>
          <button type="button" className="elements__trash-button" aria-label="Корзина"></button>
        </article>
      </template>
      </div>
  );
}

export default App;
