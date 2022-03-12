import { FormValidator } from "./FormValidator.js";
import {
  popupBigScreen,
  openPopup,
  closePopup,
  imageBigscreen,
  nameBigscreen,
} from "./utils.js";
import { Card } from "./Card.js";

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const cards = document.querySelector(".cards");
const popupRenameUser = document.querySelector(".popup_type_rename-user");
const popupAppendCard = document.querySelector(".popup_type_append-card");

const openPopupRenameUserButton = document.querySelector(".profile__rename");
const closePopupRenameUserButton = document.querySelector(
  ".popup__close_type_rename-user"
);
const openPopupAppendCardButton = document.querySelector(".profile__button");
const closePopupAppendCardButton = document.querySelector(
  ".popup__close_type_append-card"
);
const closePopupBigScreen = document.querySelector(
  ".popup__close_type_bigscreen"
);

const nameInput = document.querySelector(".popup__info_type_name");
const jobInput = document.querySelector(".popup__info_type_status");
const placeInput = document.querySelector(".popup__info_type_place");
const linkInput = document.querySelector(".popup__info_type_link");

const formRenameUser = document.querySelector(".popup__form_type_rename-user");
const formAppendCard = document.querySelector(".popup__form_type_append-card");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");

const imageCard = document.querySelector(".card__image");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__info",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__info_type_error",
  errorClass: "popup__error_visible",
};

const editProfileValidator = new FormValidator(
  validationConfig,
  formRenameUser
);
const addCardValidator = new FormValidator(validationConfig, formAppendCard);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

function handleCardClick(name, link) {
  imageBigscreen.src = link;
  nameBigscreen.textContent = name;
  imageBigscreen.alt = name;
  openPopup(popupBigScreen);
}

function openRenamePopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;

  openPopup(popupRenameUser);
}

openPopupRenameUserButton.addEventListener("click", openRenamePopup);
openPopupAppendCardButton.addEventListener("click", () =>
  openPopup(popupAppendCard)
);

closePopupRenameUserButton.addEventListener("click", () =>
  closePopup(popupRenameUser)
);

closePopupAppendCardButton.addEventListener("click", function () {
  closePopup(popupAppendCard);
});

closePopupBigScreen.addEventListener("click", () => closePopup(popupBigScreen));

function handleProfileFormSubmit(e) {
  e.preventDefault();

  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;

  closePopup(popupRenameUser);
}

formRenameUser.addEventListener("submit", handleProfileFormSubmit);

function handleAddCardSubmit(e) {
  e.preventDefault();

  const place = placeInput.value;
  const link = linkInput.value;

  addCard(place, link);
  e.target.reset();
  addCardValidator.resetValidation();
  
  closePopup(popupAppendCard);
  }

formAppendCard.addEventListener("submit", handleAddCardSubmit);

function render() {
  initialCards.reverse().forEach(renderCard);
}

function createCard(item) {
  const card = new Card(item, "#card-template", handleCardClick);
  const cardElement = card.getNewCard();
  return cardElement;
}

function renderCard(data) {
  const newCard = createCard(data);
  cards.prepend(newCard);
}

function addCard(name, link) {
  renderCard({ name, link });
}

render();
