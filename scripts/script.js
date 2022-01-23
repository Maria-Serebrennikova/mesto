const openPopupButton = document.querySelector(".profile__rename");
const popupContainer =  document.querySelector(".popup");
const closePopupButton = document.querySelector(".popup__close");

const nameInput = document.querySelector(".popup__info.popup__info_type_name");
const jobInput = document.querySelector(".popup__info.popup__info_type_status");

const formElement = document.querySelector('.popup__form[name="profile-form"]');
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");

function openPopup() {
    popupContainer.classList.add("popup_active");
    nameInput.value = profileName.textContent;
    jobInput.value = profileStatus.textContent;
}

function closePopup() {
    popupContainer.classList.remove("popup_active");

    nameInput.value = "";
    jobInput.value = "";
}

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

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
    

    closePopup();
}

formElement.addEventListener("submit", formSubmitHandler)



