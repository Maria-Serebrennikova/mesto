export const imageBigscreen = document.querySelector(".popup__image");
export const nameBigscreen = document.querySelector(".popup__name");
export const popupBigScreen = document.querySelector(".popup_type_bigscreen");

export function openPopup(targetClassName) {
  addPopupListeners(targetClassName);
  targetClassName.classList.add("popup_active");
}
export function closePopup(targetClassName) {
  removePopupListeners(targetClassName);
  targetClassName.classList.remove("popup_active");
}

export function addPopupListeners(targetClassName) {
  targetClassName.addEventListener("click", closeOutPopup);
  document.addEventListener("keydown", closePopupEscape);
}

export function removePopupListeners(targetClassName) {
  targetClassName.removeEventListener("click", closeOutPopup);
  document.removeEventListener("keydown", closePopupEscape);
}

export const closeOutPopup = (e) => {
  if (e.target === e.currentTarget) closePopup(e.target);
};

export const closePopupEscape = (e) => {
  if (e.key === "Escape") {
    const targetClassName = document.querySelector(".popup_active");
    closePopup(targetClassName);
  }
};
