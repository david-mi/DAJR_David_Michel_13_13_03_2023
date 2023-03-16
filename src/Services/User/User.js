import { userModeling } from "./Modeling";
import { getStorageTokenOrThrow } from "../../utils";

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

  async getProfile(token) {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
    };
    const data = await this.#fetchOrThrow("profile", options);
    return userModeling.profile(data);
  }

  async editProfile(payload, token) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload, token)
    };
    const data = await this.#fetchOrThrow("profile", options);
    return userModeling.editProfile(data);
  }
}

export const userService = new User();