import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { validationConfig, formRenameUser, formAppendCard, 
  popupBigScreen, nameInput, jobInput, openPopupRenameUserButton, 
  openPopupAppendCardButton, profileName, profileStatus, popupRenameUser, popupAppendCard,
 initialCards,cards } from "../utils/constants.js";


const editProfileValidator = new FormValidator(
  validationConfig,
  formRenameUser
);
const addCardValidator = new FormValidator(validationConfig, formAppendCard);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();


const cardList = new Section (
    { items: initialCards.reverse(),
    renderer: (item) => {
      const cardElement = new Card(
        item,
        "#card-template",
        () => handleCardClick(item)
      );
      return cardElement.getNewCard();
      },
    },
  cards);

  function handleCardClick({name, link}) {
    popupWithImage.open(name, link);
  }

const popupWithImage = new PopupWithImage(popupBigScreen);

const userInfo = new UserInfo(profileName, profileStatus);

const popupWithFormRenameUser = new PopupWithForm({
  popupSelector: popupRenameUser,
  handleSubmit: (formValues) => {
    userInfo.setUserInfo(formValues.inputName, formValues.inputJob);
},
},
formRenameUser);

const popupWithFormAppendCard = new PopupWithForm({
  popupSelector: popupAppendCard,
  handleSubmit: (formValues) => {
    cardList.addItem(formValues);
  },
},
formAppendCard);

cardList.renderItems();

openPopupRenameUserButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;

  popupWithFormRenameUser.open();
});

openPopupAppendCardButton.addEventListener("click", () => {
addCardValidator.resetValidation();

popupWithFormAppendCard.open();
});

popupWithFormAppendCard.setEventListeners();
popupWithFormRenameUser.setEventListeners();
popupWithImage.setEventListeners();