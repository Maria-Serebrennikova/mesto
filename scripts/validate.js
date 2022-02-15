// Показывает ошибку
const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  signElement
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(signElement.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(signElement.errorClass);
};

// Скрывает ошибку
const hideInputError = (formElement, inputElement, signElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(signElement.inputErrorClass);
  errorElement.classList.remove(signElement.errorClass);
  errorElement.textContent = "";
};

// Проверяет инпуты на валидность
const checkInputValidity = (formElement, inputElement, signElement) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      signElement
    );
  } else {
    hideInputError(formElement, inputElement, signElement);
  }
};

// Переключает кнопку"Сохранить"
function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
  }
}

// Проверяет наличие хотя бы одного невалидного инпута
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

// Слушатель инпутов форм
const setEventListeners = (formElement, signElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(signElement.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    signElement.submitButtonSelector
  );

  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement, signElement.inactiveButtonClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, signElement);
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(
        inputList,
        buttonElement,
        signElement.inactiveButtonClass
      );
    });
  });
};

//   Обработчик всех форм на странице
const enableValidation = (signElement) => {
  const formList = Array.from(
    document.querySelectorAll(signElement.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, signElement);
  });
};

// Вызов валидации объектом
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__info",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__info_type_error",
  errorClass: "popup__error_visible",
});
