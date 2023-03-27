import { userModeling } from "./Modeling";
import type { ProfileEditPayload } from "../../Pages/Profile/Profile";
import type { AuthPayload } from "../../Pages/Login/Login";
import { AuthResponse, GetProfileResponse, EditProfileResponse } from "./types";
import { FetchError } from "../../CustomErrors";

/**
 * Service to handle api requests around user
 */

class User {
  private API_USER_URL = `${process.env.REACT_APP_API_BASE_URL}/user`;

  /**
   * Fetch and return data or throws an error
   * 
   * @param endpoint API endpoint
   * @param options fetch options
   * @throws {Error} if response.ok is false
   */

  protected async fetchOrThrow<T>(endpoint: string, options: RequestInit): Promise<T> {
    const url = `${this.API_USER_URL}/${endpoint}`;
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok === false) {
      const error = new FetchError(data.message || response.statusText);
      error.status = response.status;
      throw error;
    }

    return data;
  }

  /**
   * Send API request to log in,
   * then send data to modeling class and returns it
   * 
   * @returns user token from data modeling class
   * @throws {Error} if request failed
   */

  async login(payload: Omit<AuthPayload, "remember">): Promise<string> | never {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    };
    const data = await this.fetchOrThrow<AuthResponse>("login", options);
    return userModeling.auth(data);
  }

  /**
   * Send API request to get profile infos, 
   * then send data to modeling class and returns it
   * 
   * @param token user token for authentification
   * @returns user profile infos from data modeling class
   * @throws {Error} if request failed
   */

  async getProfile(token: string) {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
    };
    const data = await this.fetchOrThrow<GetProfileResponse>("profile", options);
    return userModeling.profile(data);
  }

  /**
   * Send API request to edit profile infos (firstName / lastName), 
   * then send data to modeling class and returns it
   * 
   * @param payload new user profile data
   * @param token user token for authentification
   * @returns user profile infos from data modeling class
   * @throws {Error} if request failed
   */

  async editProfile(payload: ProfileEditPayload, token: string) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    };
    const data = await this.fetchOrThrow<EditProfileResponse>("profile", options);
    return userModeling.editProfile(data);
  }
}

export const userService = new User();