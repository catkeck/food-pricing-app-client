export default class AuthAdapter {
  static login(userParams) {
    const request = {
      method: "POST",
      body: userJSON,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };
    const userJSON = JSON.stringify(userParams);
    return fetch(
      "https://buttergrams-api.herokuapp.com/api/v1/login",
      request
    ).then(res => res.json());
  }

  static signup(userParams) {
    const userJSON = JSON.stringify(userParams);
    return fetch("https://buttergrams-api.herokuapp.com/api/v1/signup", {
      method: "POST",
      body: userJSON,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then(res => res.json());
  }

  static logOut() {
    localStorage.removeItem("token");
  }
}
