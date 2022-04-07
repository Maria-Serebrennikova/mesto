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
  cards,
  avatar,
  formAvatar,
} from "../utils/constants.js";
import { api } from "../components/Api.js";

let userID;

api
  .getProfile() //готово
  .then((res) => {
    userInfo.setUserInfo(res);
    userInfo.setAvatar(res);
    userID = res._id;
  });

api
  .getInitialCards(userID) // готово
  .then((cardsContainer) => {
    cardsContainer.forEach((data) => {
      const cardElement = createCard(data, userID);
      cardList.addItem(cardElement);
    });
  });

const profileEditValidator = new FormValidator( // готово
  validationConfig,
  formRenameUser
);
const cardAddValidator = new FormValidator(validationConfig, formAppendCard); // готово
const avatarAddValidator = new FormValidator(validationConfig, formAvatar); // готово

profileEditValidator.enableValidation(); // готово
cardAddValidator.enableValidation(); // готово
avatarAddValidator.enableValidation(); // готово

function createCard(item, userID) {
  //готово
  const card = new Card(item, userID, "#card-template", handleCardClick, {
    handleDeleteClick: (id) => {
      popupWithFormConfirmDelete.open();
      popupWithFormConfirmDelete.changeSubmitHandler(() => {
        api.deleteCard(id).then((res) => {
          card.deleteCard();
          popupWithFormConfirmDelete.close();
        });
      });
    },
    handleLikeClick: (id) => {
      if (card.isLiked()) {
        api.deleteLike(id).then((res) => {
          card.setLikes(res.likes);
        });
      } else {
        api.addLike(id).then((res) => {
          card.setLikes(res.likes);
        });
      }
    },
  });
  const newCard = card.getNewCard();
  return newCard;
}

const cardList = new Section( //готово
  {
    items: [],
    renderer: (item) => {
      const cardElement = createCard(item);
      cardList.addItem(cardElement);
    },
  },
  cards
);

function handleCardClick(name, link) {
  //готово
  popupWithImage.open(name, link);
}

function handleSubmitRenameUser(info) {
  //готово
  popupWithFormRenameUser.changeButtonText("Сохранение...");
  api
    .editProfile(info)
    .then((res) => {
      userInfo.setUserInfo(info);
    })
    .finally(() => {
      popupWithFormRenameUser.changeButtonText("Сохранить");
    });
  popupWithFormRenameUser.close();
}

function handleSubmitAppendCard(obj) {
  //готово
  popupWithFormAppendCard.changeButtonText("Сохранение...");
  api
    .addCard(obj)
    .then((res) => {
      obj._id = res._id;
      const cardElement = createCard(obj, userID);
      cardList.addItem(cardElement);
    })
    .finally(() => {
      popupWithFormAppendCard.changeButtonText("Создать");
    });
  obj.owner = {};
  obj.owner._id = userID;
  obj.likes = [];

  popupWithFormAppendCard.close();
}

function handleSubmitAvatar(obj) {
  popupWithFormAvatar.changeButtonText("Сохранение...");
  api
    .changeAvatar(obj)
    .then((res) => {
      userInfo.setAvatar(obj);
    })
    .finally(() => {
      popupWithFormAvatar.changeButtonText("Сохранить");
    });
  popupWithFormAvatar.close();
}

const popupWithImage = new PopupWithImage(".popup_type_bigscreen"); //готово

const userInfo = new UserInfo({
  profileName: ".profile__name",
  profileStatus: ".profile__status",
  profileAvatar: ".profile__avatar-img",
}); //готово

const popupWithFormRenameUser = new PopupWithForm(
  ".popup_type_rename-user",
  handleSubmitRenameUser
);

const popupWithFormAppendCard = new PopupWithForm(
  ".popup_type_append-card",
  handleSubmitAppendCard
);

const popupWithFormConfirmDelete = new PopupWithForm(
  ".popup_type_delete-confirm"
); //готово

const popupWithFormAvatar = new PopupWithForm(
  ".popup_type_avatar-change",
  handleSubmitAvatar
);

cardList.renderItems(); //готово

openPopupRenameUserButton.addEventListener("click", () => {
  //готово
  const { name, about } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = about;

  profileEditValidator.resetValidation();
  popupWithFormRenameUser.open();
});

openPopupAppendCardButton.addEventListener("click", () => {
  //готово
  cardAddValidator.resetValidation();
  popupWithFormAppendCard.open();
});

avatar.addEventListener("click", () => {
  //готово
  popupWithFormAvatar.open();
  avatarAddValidator.resetValidation();
});

popupWithFormAppendCard.setEventListeners(); //готово
popupWithFormRenameUser.setEventListeners(); //готово
popupWithImage.setEventListeners(); //готово
popupWithFormConfirmDelete.setEventListeners(); //готово
popupWithFormAvatar.setEventListeners(); //готово
