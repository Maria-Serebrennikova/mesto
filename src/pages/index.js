import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import {
  validationConfig,
  formRenameUser,
  formAppendCard,
  nameInput,
  jobInput,
  openPopupRenameUserButton,
  openPopupAppendCardButton,
  initialCards,
  cards,
} from "../utils/constants.js";

const profileEditValidator = new FormValidator(
  validationConfig,
  formRenameUser
);
const cardAddValidator = new FormValidator(validationConfig, formAppendCard);

profileEditValidator.enableValidation();
cardAddValidator.enableValidation();

const createCard = (item) =>
  new Card(item, "#card-template", () => handleCardClick(item)).getNewCard();

const cardList = new Section(
  {
    items: initialCards.reverse(),
    renderer: (item) => {
      const cardElement = createCard(item);
      cardList.addItem(cardElement);
    },
  },
  cards
);

function handleCardClick({ name, link }) {
  popupWithImage.open(name, link);
}

const popupWithImage = new PopupWithImage(".popup_type_bigscreen");

const userInfo = new UserInfo(".profile__name", ".profile__status");

const popupWithFormRenameUser = new PopupWithForm({
  popupSelector: ".popup_type_rename-user",
  handleSubmit: (formValues) => {
    userInfo.setUserInfo(formValues.inputName, formValues.inputJob);
  },
});

const popupWithFormAppendCard = new PopupWithForm({
  popupSelector: ".popup_type_append-card",
  handleSubmit: (formValues) => {
    const cardElement = createCard(formValues);
    cardList.addItem(cardElement);
  },
});

cardList.renderItems();

openPopupRenameUserButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;

  profileEditValidator.resetValidation();
  popupWithFormRenameUser.open();
});

openPopupAppendCardButton.addEventListener("click", () => {
  cardAddValidator.resetValidation();

  popupWithFormAppendCard.open();
});

popupWithFormAppendCard.setEventListeners();
popupWithFormRenameUser.setEventListeners();
popupWithImage.setEventListeners();
