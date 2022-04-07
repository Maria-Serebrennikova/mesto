export class Card {
  constructor(
    data,
    userID,
    cardSelector,
    handleCardClick,
    { handleDeleteClick, handleLikeClick }
  ) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._userID = userID;
    this._ownerID = data.owner._id;
    this._template = document
      .querySelector(cardSelector)
      .content.querySelector(".card");
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  getNewCard() {
    this._newCard = this._template.cloneNode(true);
    this._cardImage = this._newCard.querySelector(".card__img");
    const likeCountElement = this._newCard.querySelector(".card__like-count");

    this._addListeners();
    this._getInitialLikes();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;
    this._newCard.querySelector(".card__name").textContent = this._name;

    if (this._userID !== this._ownerID) {
      this._newCard.querySelector(".card__trash").style.display = "none";
    }

    return this._newCard;
  }

  deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  isLiked() {
    const userHasLikedCard = this._likes.find(
      (user) => user._id === this._userID
    );

    return userHasLikedCard;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    const likeCountElement = this._newCard.querySelector(".card__like-count");
    likeCountElement.textContent = this._likes.length;
    if (this.isLiked()) {
      this._fillLike();
    } else {
      this._cleanLike();
    }
  }

  _getInitialLikes() {
    const likeCountElement = this._newCard.querySelector(".card__like-count");
    likeCountElement.textContent = this._likes.length;
    if (this.isLiked()) {
      this._fillLike();
    } else {
      this._cleanLike();
    }
  }

  _fillLike() {
    this._newCard
      .querySelector(".card__like")
      .classList.add("card__like_active");
  }

  _cleanLike() {
    this._newCard
      .querySelector(".card__like")
      .classList.remove("card__like_active");
  }

  _addListeners() {
    this._newCard.querySelector(".card__like").addEventListener("click", () => {
      this._handleLikeClick(this._id);
    });

    this._newCard
      .querySelector(".card__trash")
      .addEventListener("click", () => {
        this._handleDeleteClick(this._id);
      });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}
