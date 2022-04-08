(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){var a=i.handleDeleteClick,c=i.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._alt=e.name,this._likes=e.likes,this._id=e._id,this._userID=n,this._ownerID=e.owner._id,this._template=document.querySelector(r).content.querySelector(".card"),this._handleCardClick=o,this._handleDeleteClick=a,this._handleLikeClick=c}var n,r;return n=t,(r=[{key:"getNewCard",value:function(){return this._newCard=this._template.cloneNode(!0),this._cardImage=this._newCard.querySelector(".card__img"),this._newCard.querySelector(".card__like-count"),this._addListeners(),this._getInitialLikes(),this._cardImage.src=this._link,this._cardImage.alt=this._alt,this._newCard.querySelector(".card__name").textContent=this._name,this._userID!==this._ownerID&&(this._newCard.querySelector(".card__trash").style.display="none"),this._newCard}},{key:"deleteCard",value:function(){this._newCard.remove(),this._newCard=null}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userID}))}},{key:"setLikes",value:function(e){this._likes=e,this._newCard.querySelector(".card__like-count").textContent=this._likes.length,this.isLiked()?this._fillLike():this._cleanLike()}},{key:"_getInitialLikes",value:function(){this._newCard.querySelector(".card__like-count").textContent=this._likes.length,this.isLiked()?this._fillLike():this._cleanLike()}},{key:"_fillLike",value:function(){this._newCard.querySelector(".card__like").classList.add("card__like_active")}},{key:"_cleanLike",value:function(){this._newCard.querySelector(".card__like").classList.remove("card__like_active")}},{key:"_addListeners",value:function(){var e=this;this._newCard.querySelector(".card__like").addEventListener("click",(function(){e._handleLikeClick(e._id)})),this._newCard.querySelector(".card__trash").addEventListener("click",(function(){e._handleDeleteClick(e._id)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){i._toggleButtonState(),i._inputList.forEach((function(e){i._hideInputError(e)}))},(r="resetValidation")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._form=n,this._settings=t,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._form.querySelector(this._settings.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var n=this._settings,r=n.inputErrorClass,o=n.errorClass,i=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(r),i.textContent=t,i.classList.add(o)}},{key:"_hideInputError",value:function(e){var t=this._settings,n=t.inputErrorClass,r=t.errorClass,o=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(n),o.classList.remove(r),o.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._settings.inactiveButtonClass),this._buttonElement.setAttribute("disabled","")):(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},u.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popup=document.querySelector(e),n._form=n._popup.querySelector(".popup__form"),n._handleSubmit=t,n._inputList=n._popup.querySelectorAll(".popup__info"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"changeButtonText",value:function(e){this._form.querySelector(".popup__button").textContent=e}},{key:"setEventListeners",value:function(){var e=this;u(p(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){u(p(a.prototype),"close",this).call(this),this._form.reset()}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function b(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),t=i.call(this,e);var n=document.querySelector(e);return t._nameBigscreen=n.querySelector(".popup__name"),t._imageBigscreen=n.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e,t){this._nameBigscreen.textContent=e,this._imageBigscreen.src=t,this._imageBigscreen.alt=e,y(k(a.prototype),"open",this).call(this)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=t.profileName,r=t.profileStatus,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileStatus=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={name:this._profileName.textContent,about:this._profileStatus.textContent,avatar:this._profileAvatar.src},this._userInfo}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileStatus.textContent=e.about}},{key:"setAvatar",value:function(e){this._profileAvatar.src=e.avatar}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function I(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._form=n._popup.querySelector(".popup__form"),n}return t=a,(n=[{key:"changeSubmitHandler",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()})),j(R(a.prototype),"setEventListeners",this).call(this)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i),B=(document.querySelector(".popup__image"),document.querySelector(".popup__name"),document.querySelector(".popup_type_bigscreen"),document.querySelector(".cards")),x=(document.querySelector(".popup_type_rename-user"),document.querySelector(".popup_type_append-card"),document.querySelector(".profile__rename")),A=(document.querySelector(".popup__close_type_rename-user"),document.querySelector(".profile__button")),D=(document.querySelector(".popup__close_type_append-card"),document.querySelector(".popup__close_type_bigscreen"),document.querySelector(".popup__info_type_name")),U=document.querySelector(".popup__info_type_status"),V=(document.querySelector(".popup__info_type_place"),document.querySelector(".popup__info_type_link"),document.querySelector(".popup__form_type_rename-user")),N=document.querySelector(".popup__form_type_append-card"),H=(document.querySelector(".profile__name"),document.querySelector(".profile__status"),document.querySelector(".card__image"),document.querySelector(".profile__avatar")),J=document.querySelector(".popup__form_type_avatar-change"),M={formSelector:".popup__form",inputSelector:".popup__info",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__info_type_error",errorClass:"popup__error_visible"};function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var $,F=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"editProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e," "),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"efe40732-ef80-40e9-af55-47e05b496b02","Content-Type":"application/json"}});function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Promise.all([F.getProfile(),F.getInitialCards($)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];te.setUserInfo(o),te.setAvatar(o),$=o._id,i.forEach((function(e){var t=X(e,$);Y.addItem(t)}))})).catch((function(e){return console.log(e)}));var K=new r(M,V),Q=new r(M,N),W=new r(M,J);function X(e,n){var r=new t(e,n,"#card-template",Z,{handleDeleteClick:function(e){oe.open(),oe.changeSubmitHandler((function(){F.deleteCard(e).then((function(e){r.deleteCard(),oe.close()})).catch((function(e){return console.log(e)}))}))},handleLikeClick:function(e){r.isLiked()?F.deleteLike(e).then((function(e){r.setLikes(e.likes).catch((function(e){return console.log(e)}))})):F.addLike(e).then((function(e){r.setLikes(e.likes)})).catch((function(e){return console.log(e)}))}});return r.getNewCard()}K.enableValidation(),Q.enableValidation(),W.enableValidation();var Y=new S({items:[],renderer:function(e){var t=X(e);Y.addItem(t)}},B);function Z(e,t){ee.open(e,t)}var ee=new g(".popup_type_bigscreen"),te=new E({profileName:".profile__name",profileStatus:".profile__status",profileAvatar:".profile__avatar-img"}),ne=new h(".popup_type_rename-user",(function(e){ne.changeButtonText("Сохранение..."),F.editProfile(e).then((function(t){te.setUserInfo(e),ne.close()})).catch((function(e){return console.log(e)})).finally((function(){ne.changeButtonText("Сохранить")}))})),re=new h(".popup_type_append-card",(function(e){re.changeButtonText("Сохранение..."),F.addCard(e).then((function(t){e._id=t._id;var n=X(e,$);Y.addItem(n),re.close()})).catch((function(e){return console.log(e)})).finally((function(){re.changeButtonText("Создать")})),e.owner={},e.owner._id=$,e.likes=[]})),oe=new T(".popup_type_delete-confirm"),ie=new h(".popup_type_avatar-change",(function(e){ie.changeButtonText("Сохранение..."),F.changeAvatar(e).then((function(t){te.setAvatar(e),ie.close()})).catch((function(e){return console.log(e)})).finally((function(){ie.changeButtonText("Сохранить")}))}));Y.renderItems(),x.addEventListener("click",(function(){var e=te.getUserInfo(),t=e.name,n=e.about;D.value=t,U.value=n,K.resetValidation(),ne.open()})),A.addEventListener("click",(function(){Q.resetValidation(),re.open()})),H.addEventListener("click",(function(){ie.open(),W.resetValidation()})),re.setEventListeners(),ne.setEventListeners(),ee.setEventListeners(),oe.setEventListeners(),ie.setEventListeners()})();