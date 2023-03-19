import { userModeling } from "./Modeling";

/**
 * Service to handle api requests around user
 */

class User {
  #API_USER_URL = `${process.env.REACT_APP_API_BASE_URL}/user`;

  /**
   * Fetch and return data or throws an error
   * 
   * @param {string} endpoint API endpoint
   * @param {RequestInit} options fetch options
   * @returns {Promise<any>}
   * @throws {Error} if response.ok is false
   */

  async #fetchOrThrow(endpoint, options) {
    const url = `${this.#API_USER_URL}/${endpoint}`;
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok === false) {
      const error = new Error(data.message || response.statusText);
      error.status = response.status;
      throw error;
    }

    return data;
  }

  /**
   * Send API request to log in,
   * then send data to modeling class and returns it
   * 
   * @param {{
   *  email: string,
   *  password: string
   * }} payload 
   * @returns {string} user token from data modeling class
   * @throws {Error} if request failed
   */

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

  /**
   * Send API request to get profile infos, 
   * then send data to modeling class and returns it
   * 
   * @param {string} token user token for authentification
   * @returns {Object} user profile infos from data modeling class
   * @throws {Error} if request failed
   */

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

  /**
   * Send API request to edit profile infos (firstName / lastName), 
   * then send data to modeling class and returns it
   * 
   * @param {{
   *  firstName: string,
   *  lastName: string
   * }} payload new user profile data
   * @param {string} token user token for authentification
   * @returns {Object} user profile infos from data modeling class
   * @throws {Error} if request failed
   */

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