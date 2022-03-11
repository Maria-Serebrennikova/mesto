import {
  imageBigscreen,
  nameBigscreen,
  openPopup,
  popupBigScreen,
} from "./utils.js";

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._template = document.querySelector(cardSelector).content;
  }

  _addListeners = () => {
    const buttonLike = this._newCard.querySelector(".card__like");

    buttonLike.addEventListener("click", () => {
      buttonLike.classList.toggle("card__like_active");
    });

    const buttonTrash = this._newCard.querySelector(".card__trash");
    buttonTrash.addEventListener("click", () => {
      buttonTrash.parentElement.remove();
    });

    const openPopupBigScreen = this._newCard.querySelector(".card__img");
    openPopupBigScreen.addEventListener("click", () => {
      imageBigscreen.src = this._link;
      imageBigscreen.alt = this._link;
      nameBigscreen.textContent = this._name;
      openPopup(popupBigScreen);
    });
  };

  getNewCard() {
    this._newCard = this._template.cloneNode(true);

    this._newCard.querySelector(".card__img").src = this._link;
    this._newCard.querySelector(".card__img").alt = this._name;
    this._newCard.querySelector(".card__name").textContent = this._name;

    this._addListeners(this._newCard);

    return this._newCard;
  }
}
