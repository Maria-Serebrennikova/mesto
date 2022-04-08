import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithConfirmDelete } from "../components/PopupWithConfirmDelete.js";
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

Promise.all([api.getProfile(), api.getInitialCards(userID)])
  .then(([res, cardsContainer]) => {
    userInfo.setUserInfo(res);
    userInfo.setAvatar(res);
    userID = res._id;

    cardsContainer.forEach((data) => {
      const cardElement = createCard(data, userID);
      cardList.addItem(cardElement);
    });
  })
  .catch((err) => console.log(err));

const profileEditValidator = new FormValidator(
  validationConfig,
  formRenameUser
);
const cardAddValidator = new FormValidator(validationConfig, formAppendCard);
const avatarAddValidator = new FormValidator(validationConfig, formAvatar);

profileEditValidator.enableValidation();
cardAddValidator.enableValidation();
avatarAddValidator.enableValidation();

function createCard(item, userID) {
  const card = new Card(item, userID, "#card-template", handleCardClick, {
    handleDeleteClick: (id) => {
      popupWithFormConfirmDelete.open();
      popupWithFormConfirmDelete.changeSubmitHandler(() => {
        api
          .deleteCard(id)
          .then((res) => {
            card.deleteCard();
            popupWithFormConfirmDelete.close();
          })
          .catch((err) => console.log(err));
      });
    },
    handleLikeClick: (id) => {
      if (card.isLiked()) {
        api.deleteLike(id).then((res) => {
          card.setLikes(res.likes).catch((err) => console.log(err));
        });
      } else {
        api
          .addLike(id)
          .then((res) => {
            card.setLikes(res.likes);
          })
          .catch((err) => console.log(err));
      }
    },
  });
  const newCard = card.getNewCard();
  return newCard;
}

const cardList = new Section(
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
  popupWithImage.open(name, link);
}

function handleSubmitRenameUser(info) {
  popupWithFormRenameUser.changeButtonText("Сохранение...");
  api
    .editProfile(info)
    .then((res) => {
      userInfo.setUserInfo(info);
      popupWithFormRenameUser.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupWithFormRenameUser.changeButtonText("Сохранить");
    });
}

function handleSubmitAppendCard(obj) {
  popupWithFormAppendCard.changeButtonText("Сохранение...");
  api
    .addCard(obj)
    .then((res) => {
      obj._id = res._id;
      const cardElement = createCard(obj, userID);
      cardList.addItem(cardElement);
      popupWithFormAppendCard.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupWithFormAppendCard.changeButtonText("Создать");
    });
  obj.owner = {};
  obj.owner._id = userID;
  obj.likes = [];
}

function handleSubmitAvatar(obj) {
  popupWithFormAvatar.changeButtonText("Сохранение...");
  api
    .changeAvatar(obj)
    .then((res) => {
      userInfo.setAvatar(obj);
      popupWithFormAvatar.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupWithFormAvatar.changeButtonText("Сохранить");
    });
}

const popupWithImage = new PopupWithImage(".popup_type_bigscreen");

const userInfo = new UserInfo({
  profileName: ".profile__name",
  profileStatus: ".profile__status",
  profileAvatar: ".profile__avatar-img",
});

const popupWithFormRenameUser = new PopupWithForm(
  ".popup_type_rename-user",
  handleSubmitRenameUser
);

const popupWithFormAppendCard = new PopupWithForm(
  ".popup_type_append-card",
  handleSubmitAppendCard
);

const popupWithFormConfirmDelete = new PopupWithConfirmDelete(
  ".popup_type_delete-confirm"
);

const popupWithFormAvatar = new PopupWithForm(
  ".popup_type_avatar-change",
  handleSubmitAvatar
);

cardList.renderItems();

openPopupRenameUserButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = about;

  profileEditValidator.resetValidation();
  popupWithFormRenameUser.open();
});

openPopupAppendCardButton.addEventListener("click", () => {
  cardAddValidator.resetValidation();
  popupWithFormAppendCard.open();
});

avatar.addEventListener("click", () => {
  popupWithFormAvatar.open();
  avatarAddValidator.resetValidation();
});

popupWithFormAppendCard.setEventListeners();
popupWithFormRenameUser.setEventListeners();
popupWithImage.setEventListeners();
popupWithFormConfirmDelete.setEventListeners();
popupWithFormAvatar.setEventListeners();
