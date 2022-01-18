const openPopupButton = document.querySelector(".profile__rename");
const popupContainer =  document.querySelector(".popup");
const closePopupButton = document.querySelector(".popup__close");

const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__status");

const formElement = document.querySelector(".popup__form");

const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");

function openPopup() {
    popupContainer.classList.add("popup_type_active");
}

function closePopup() {
    popupContainer.classList.remove("popup_type_active");

    nameInput.value = "";
    jobInput.value = "";
}

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

function formSubmitHandler(e) {
    e.preventDefault();

    const name = nameInput.value;
    const job = jobInput.value;
    
    profileName.textContent = name;
    profileStatus.textContent = job;

    closePopup();
}

formElement.addEventListener("submit", formSubmitHandler)



