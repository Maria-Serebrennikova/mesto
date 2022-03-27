export class UserInfo {
    constructor(profileName, profileStatus) {
        this._profileName = profileName;
        this._profileStatus = profileStatus;
    }

    getUserInfo() {
    this._userInfo = {
        name: this._profileName.textContent,
        job: this._profileStatus.textContent,
        };
    return this._userInfo;
    }

    setUserInfo(name, job) {
        this._profileName.textContent = name;
        this._profileStatus.textContent = job;
    }

}
