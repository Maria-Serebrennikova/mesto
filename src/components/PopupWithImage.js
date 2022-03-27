import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector){
    super(popupSelector);
    this._nameBigscreen = popupSelector.querySelector(".popup__name");
    this._imageBigscreen = popupSelector.querySelector(".popup__image");
    }

    open(name, link) {
        this._nameBigscreen.textContent = name;
        this._imageBigscreen.src = link;
        this._imageBigscreen.alt =  name;
        super.open();
    }
}
