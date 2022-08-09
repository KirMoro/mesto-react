function Main() {
    const handleEditAvatarClick = () => {
        const popupAddAvatar = document.querySelector('.popup_type_add-avatar');
        popupAddAvatar.classList.add('popup_opened');
    }
    const handleEditProfileClick = () => {
        const popupEditProfile = document.querySelector('.popup_type_edit');
        popupEditProfile.classList.add('popup_opened');
    }

    const handleAddPlaceClick = () => {
        const popupAddPlace = document.querySelector('.popup_type_add');
        popupAddPlace.classList.add('popup_opened');
    }

    return  <main className="content">
        <section className="profile">
            <div className="profile__avatar"></div>
            <button type="button" className="profile__edit-avatar-button" aria-label="Редактировать" onClick={handleEditAvatarClick}></button>
            <h1 className="profile__title"></h1>
            <p className="profile__subtitle"></p>
            <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={handleEditProfileClick}></button>
            <button type="button" className="profile__add-button" aria-label="Добавить" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="elements" aria-label="Галерея"></section>
    </main>
};

export { Main }
