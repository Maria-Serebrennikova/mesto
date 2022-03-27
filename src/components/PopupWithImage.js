import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector){
    super(popupSelector);
    const popupElement = document.querySelector(popupSelector)
    this._nameBigscreen = popupElement.querySelector(".popup__name");
    this._imageBigscreen = popupElement.querySelector(".popup__image");
    }

    open(name, link) {
        this._nameBigscreen.textContent = name;
        this._imageBigscreen.src = link;
        this._imageBigscreen.alt =  name;
        super.open();
    }
}
