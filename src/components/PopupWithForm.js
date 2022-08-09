function PopupWithForm(props) {
    <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
            <h3 className="popup__title">props.title</h3>
            <form name={`form-${props.name}`} className="form form_type_edit" noValidate>
                {/*<fieldset className="form__fields">*/}
                {/*    <label className="form__input">*/}
                {/*        <input id="name-input" type="text" name="name" placeholder="Имя"*/}
                {/*               className="form__field form__field_type_name"*/}
                {/*               minLength="2" maxLength="40" required/>*/}
                {/*        <span className="form__field-error name-input-error"></span>*/}
                {/*    </label>*/}
                {/*    <label className="form__input">*/}
                {/*        <input id="about-input" type="text" name="about" placeholder="О себе"*/}
                {/*               className="form__field form__field_type_about" minLength="2" maxLength="200"*/}
                {/*               required/>*/}
                {/*        <span className="form__field-error about-input-error"></span>*/}
                {/*    </label>*/}
                {/*    <button type='submit' className="form__submit-button" aria-label="Сохранить">Сохранить*/}
                {/*    </button>*/}
                {/*</fieldset>*/}
            </form>
            <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
        </div>
    </div>
console.log(props)
};

export { PopupWithForm };
