function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
    return  <main className="content">
        <section className="profile">
            <div className="profile__avatar"></div>
            <button type="button" className="profile__edit-avatar-button" aria-label="Редактировать" onClick={onEditAvatar}></button>
            <h1 className="profile__title"></h1>
            <p className="profile__subtitle"></p>
            <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={onEditProfile}></button>
            <button type="button" className="profile__add-button" aria-label="Добавить" onClick={onAddPlace}></button>
        </section>
        <section className="elements" aria-label="Галерея"></section>
    </main>
};

export { Main }
