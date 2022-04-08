import { Popup } from "./Popup.js";

export class PopupWithConfirmDelete extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(".popup__form");
  }
  changeSubmitHandler(newSubmitHandler) {
    this._handleSubmit = newSubmitHandler;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
    super.setEventListeners();
  }
}
