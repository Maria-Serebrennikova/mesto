export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._template = document.querySelector(cardSelector).content;
    this._handleCardClick = handleCardClick;
  }

  getNewCard() {
    this._newCard = this._template.cloneNode(true);
    this._cardImage = this._newCard.querySelector(".card__img");

    this._addListeners();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._newCard.querySelector(".card__name").textContent = this._name;

    return this._newCard;
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

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  };
}
