import { userModeling } from "./Modeling";

class User {
  #API_USER_URL = `${process.env.REACT_APP_API_BASE_URL}/user`;

  async #fetchOrThrow(endpoint, options) {
    const url = `${this.#API_USER_URL}/${endpoint}`;
    const response = await fetch(url, options);
    if (response.ok === false) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }

  #getStorageToken() {
    const token = localStorage.getItem("token");
    if (token === null) {
      throw new Error("Missing token");
    }

    return token;
  }

  async login(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    };
    const data = await this.#fetchOrThrow("login", options);
    return userModeling.auth(data);
  }

  async getProfile() {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.#getStorageToken()}`
      },
    };
    const data = await this.#fetchOrThrow("profile", options);
    return userModeling.profile(data);
  }

  async editProfile(payload) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.#getStorageToken()}`
      },
      body: JSON.stringify(payload)
    };
    const data = await this.#fetchOrThrow("profile", options);
    return userModeling.editProfile(data);
  }
}

export const userService = new User();