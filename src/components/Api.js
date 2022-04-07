class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }

  editProfile(info) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: info.name,
        about: info.about,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }

  addCard(obj) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: obj.name,
        link: obj.link,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id} `, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }

  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }

  changeAvatar(formValues) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: formValues.avatar,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-39",
  headers: {
    authorization: "efe40732-ef80-40e9-af55-47e05b496b02",
    "Content-Type": "application/json",
  },
});
