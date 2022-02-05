const template = document.querySelector("#card-template").content;
const card = document.querySelector(".card");
const cards = document.querySelector(".cards");
popupRenameUser = document.querySelector(".popup_type_rename-user");
popupAppendCard = document.querySelector(".popup_type_append-card");
popupBigScreen = document.querySelector(".popup_type_bigscreen");

const openPopupRenameUserButton = document.querySelector(".profile__rename");
const closePopupRenameUserButton = document.querySelector(
  ".popup__close_type_rename-user"
);
const openPopupAppendCardButton = document.querySelector(".profile__button");
const closePopupAppendCardButton = document.querySelector(
  ".popup__close_type_append-card"
);
const openPopupBigScreen = document.querySelector(".card__image");
const closePopupBigScreen = document.querySelector(
  ".popup__close_type_bigscreen"
);

const nameInput = document.querySelector(".popup__info_type_name");
const jobInput = document.querySelector(".popup__info_type_status");
const placeInput = document.querySelector(".popup__info_type_place");
const linkInput = document.querySelector(".popup__info_type_link");

const formElement = document.querySelector(".popup__form_type_rename-user");
const formElementCard = document.querySelector(".popup__form_type_append-card");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");

const imageBigscreen = document.querySelector(".popup__image");
const nameBigscreen = document.querySelector(".popup__name");
const imageCard = document.querySelector(".card__image");

function openPopup(targetClassName) {
  targetClassName.classList.add("popup_active");
}

function closePopup(targetClassName) {
  targetClassName.classList.remove("popup_active");
  clearInputs(targetClassName);
}

function openRenamePopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;

  openPopup(popupRenameUser);
}

function clearInputs(targetPopup) {
  const inputs = targetPopup.querySelectorAll("input");

  inputs.forEach((input) => {
    input.value = "";
  });
}

openPopupRenameUserButton.addEventListener("click", openRenamePopup);
openPopupAppendCardButton.addEventListener("click", () =>
  openPopup(popupAppendCard)
);

closePopupRenameUserButton.addEventListener("click", () =>
  closePopup(popupRenameUser)
);
closePopupAppendCardButton.addEventListener("click", () =>
  closePopup(popupAppendCard)
);
closePopupBigScreen.addEventListener("click", () => closePopup(popupBigScreen));

function formSubmitHandler(e) {
  e.preventDefault();

  const name = nameInput.value;
  const job = jobInput.value;
  if (name.trim()) {
    profileName.textContent = name;
  }

  if (job.trim()) {
    profileStatus.textContent = job;
  }

  closePopup(popupRenameUser);
}

formElement.addEventListener("submit", formSubmitHandler);

function formSubmitHandlerCard(e) {
  e.preventDefault();

  const place = placeInput.value;
  const link = linkInput.value;

  if (place.trim() && link.trim()) {
    addCard(place, link);
    closePopup(popupAppendCard);
  }
}

formElementCard.addEventListener("submit", formSubmitHandlerCard);

function render() {
  initialCards.reverse().forEach(renderCard);
}

function renderCard(item) {
  const newCard = getNewCard(item);

  cards.prepend(newCard);
}

function addCard(name, link) {
  renderCard({ name, link });
}

function getNewCard(item) {
  const newCard = template.cloneNode(true);

  newCard.querySelector(".card__img").src = item.link;
  newCard.querySelector(".card__name").textContent = item.name;

  addListeners(newCard);

  return newCard;
}

function addListeners(card) {
  const buttonLike = card.querySelector(".card__like");
  buttonLike.addEventListener("click", (e) => {
    e.target.classList.toggle("card__like_active");
  });

  const buttonTrash = card.querySelector(".card__trash");
  buttonTrash.addEventListener("click", () => {
    buttonTrash.parentElement.remove();
  });
  const openPopupBigScreen = card.querySelector(".card__img");
  openPopupBigScreen.addEventListener("click", (e) => {
    imageBigscreen.src = e.target.src;
    nameBigscreen.textContent = e.target.textContent;
    openPopup(popupBigScreen);
  });
}
render();
