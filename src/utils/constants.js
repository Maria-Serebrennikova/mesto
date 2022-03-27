export const imageBigscreen = document.querySelector(".popup__image");
export const nameBigscreen = document.querySelector(".popup__name");
export const popupBigScreen = document.querySelector(".popup_type_bigscreen");
export const cards = document.querySelector(".cards");
export const popupRenameUser = document.querySelector(".popup_type_rename-user");
export const popupAppendCard = document.querySelector(".popup_type_append-card");

export const openPopupRenameUserButton = document.querySelector(".profile__rename");
export const closePopupRenameUserButton = document.querySelector(
  ".popup__close_type_rename-user"
);
export const openPopupAppendCardButton = document.querySelector(".profile__button");
export const closePopupAppendCardButton = document.querySelector(
  ".popup__close_type_append-card"
);
export const closePopupBigScreen = document.querySelector(
  ".popup__close_type_bigscreen"
);

export const nameInput = document.querySelector(".popup__info_type_name");
export const jobInput = document.querySelector(".popup__info_type_status");
export const placeInput = document.querySelector(".popup__info_type_place");
export const linkInput = document.querySelector(".popup__info_type_link");

export const formRenameUser = document.querySelector(".popup__form_type_rename-user");
export const formAppendCard = document.querySelector(".popup__form_type_append-card");
export const profileName = document.querySelector(".profile__name");
export const profileStatus = document.querySelector(".profile__status");

export const imageCard = document.querySelector(".card__image");

export const initialCards = [
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
  
  export const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__info",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__info_type_error",
    errorClass: "popup__error_visible",
  };