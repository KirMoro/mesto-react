function Main() {
    return  <main className="content">
        <section className="profile">
            <div className="profile__avatar"></div>
            <button type="button" className="profile__edit-avatar-button" aria-label="Редактировать"></button>
            <h1 className="profile__title"></h1>
            <p className="profile__subtitle"></p>
            <button type="button" className="profile__edit-button" aria-label="Редактировать"></button>
            <button type="button" className="profile__add-button" aria-label="Добавить"></button>
        </section>
        <section className="elements" aria-label="Галерея"></section>
    </main>
};

export { Main }
