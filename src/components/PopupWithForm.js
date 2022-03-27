import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmit }, popupForm) {
        super(popupSelector);
        this._form = popupForm;
        this._handleSubmit = handleSubmit;
        this._inputList = this._popup.querySelectorAll(".popup__info");

    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
          this._formValues[input.name] = input.value;
        });
    
        return this._formValues;
      }

    setEventListeners() {
      this._popup.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._handleSubmit(this._getInputValues());
        this.close();
      });
      super.setEventListeners();
    }
  
    close() {
      super.close();
      this._form.reset();
    }
  }