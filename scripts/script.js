const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const template = document.querySelector('#card-template').content;
const card = document.querySelector('.card');
const cards = document.querySelector('.cards');


const openPopupRenameUserButton = document.querySelector(".profile__rename");
const popupContainer =  document.querySelector(".popup");
const closePopupRenameUserButton = document.querySelector(".rename-user-close");
const openPopupAppendCardButton = document.querySelector(".profile__button");
const closePopupAppendCardButton = document.querySelector(".append-card-close");
const openPopupBigScreen = document.querySelector(".card__image");
const closePopupBigScreen = document.querySelector(".bigscreen-close");

const nameInput = document.querySelector(".popup__info.popup__info_type_name");
const jobInput = document.querySelector(".popup__info.popup__info_type_status");
const placeInput = document.querySelector(".popup__info.popup__info_type_place");
const linkInput =  document.querySelector(".popup__info.popup__info_type_link");

const formElement = document.querySelector('.popup__form[name="profile-form"]');
const formElementCard = document.querySelector('.popup__form[name="card-form"]');
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");

const imageBigscreen = document.querySelector('.popup-bigscreen__image');
const nameBigscreen = document.querySelector('.popup-bigscreen__name');
const imageCard = document.querySelector('.card__img');
const nameCard = document.querySelector('.card__name');

  function openPopup(targetClassName) {
    const targetPopup =  document.querySelector(`.popup.${targetClassName}`);

    targetPopup.classList.add("popup_active");
}

function closePopup(targetClassName) {
    const targetPopup =  document.querySelector(`.popup.${targetClassName}`);

    targetPopup.classList.remove("popup_active");
    clearInputs(targetPopup);
}

function openRenamePopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileStatus.textContent;

    openPopup("popup-rename-user");
}

function clearInputs(targetPopup) {
    const inputs = targetPopup.querySelectorAll("input");

    inputs.forEach(input => {
        input.value = ""
    });
  }
 
openPopupRenameUserButton.addEventListener("click", openRenamePopup);
openPopupAppendCardButton.addEventListener("click", () =>  openPopup("popup-append-card"));

closePopupRenameUserButton.addEventListener("click", () =>  closePopup("popup-rename-user"));
closePopupAppendCardButton.addEventListener("click", () =>  closePopup("popup-append-card"));
closePopupBigScreen.addEventListener("click", () =>  closePopup("popup-bigscreen"));


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
    
    closePopup("popup-rename-user");
}

formElement.addEventListener("submit", formSubmitHandler)

function formSubmitHandlerCard(e) {
  e.preventDefault();

  const place = placeInput.value;
  const link = linkInput.value;

  if (place.trim()&&link.trim()) {
    
addCard(place, link)
closePopup("popup-append-card");
  }
}

formElementCard.addEventListener("submit", formSubmitHandlerCard)


function render() {
  initialCards.forEach(renderCard);
}

function renderCard(item, isNew) {
  const newCard = template.cloneNode(true);
  newCard.querySelector('.card__img').src = item.link;
  newCard.querySelector('.card__name').textContent  = item.name;
     
 addListeners(newCard)

 if (isNew) {
  cards.prepend(newCard);

 } else {
  cards.appendChild(newCard);
 }
  }


function addCard(name, link) {
  renderCard({name, link}, isNew = true);
}

function addListeners(card) {
const buttonLike = card.querySelector(".card__like");
buttonLike.addEventListener('click', (e) => {
  e.target.classList.toggle('card__like_active');
});

const buttonTrash = card.querySelector(".card__trash");
  buttonTrash.addEventListener('click', () => {
    buttonTrash.parentElement.remove();
});
const openPopupBigScreen = card.querySelector(".card__image");
  openPopupBigScreen.addEventListener('click', () => {
    imageBigscreen.src = imageCard.src;
    nameBigscreen.textContent = nameCard.textContent;
    openPopup("popup-bigscreen");
});
}
  render()