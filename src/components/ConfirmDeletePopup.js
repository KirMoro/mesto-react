import { PopupWithForm } from "./PopupWithForm";

export const ConfirmDeletePopup = ({isOpen, onClose, onDeletePlace }) => {

  function handleSubmit(e) {
    e.preventDefault();

    onDeletePlace(card);
  }

  return (
    <PopupWithForm
      name="confirm"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Да"
    >
      <fieldset className="form__fields">
      </fieldset>
    </PopupWithForm>
  )
}
