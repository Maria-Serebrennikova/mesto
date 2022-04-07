export class UserInfo {
  constructor({ profileName, profileStatus, profileAvatar }) {
    (this._profileName = document.querySelector(profileName)),
      (this._profileStatus = document.querySelector(profileStatus)),
      (this._profileAvatar = document.querySelector(profileAvatar));
  }

  getUserInfo() {
    this._userInfo = {
      name: this._profileName.textContent,
      about: this._profileStatus.textContent,
      avatar: this._profileAvatar.src,
    };
    return this._userInfo;
  }

  setUserInfo(info) {
    this._profileName.textContent = info.name;
    this._profileStatus.textContent = info.about;
  }

  setAvatar(info) {
    this._profileAvatar.src = info.avatar;
  }
}
