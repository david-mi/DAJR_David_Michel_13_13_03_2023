import { MissingTokenError } from "../../middlewares/error";

/**
 * Data modeling class for user
 */

class UserModeling {

  /**
   * Modeling retrieved data from login request
   * 
   * @param {Object} data data retrieved from api after login request
   * @returns {string} user token
   * @throws {MissingTokenError} if token is missing
   */

  auth(data) {
    const token = data.body.token;
    if (!token) throw new MissingTokenError("Token not found !");
    return token;
  }

  /**
   * Modeling retrieved data from profile get infos request
   * 
   * @param {Object} data retrieved from api after profile get infos request
   * @param {Object} data.body extracted body informations from API
   * @returns {{
   *  firstName: string,
   *  lastName: string
   * }} user identity
   */

  profile({ body }) {
    return {
      firstName: body.firstName || "",
      lastName: body.lastName || ""
    };
  }

  /**
   * Modeling retrieved data from profile edit request
   * 
   * @param {Object} data data retrieved from api after profile edit request
   * @param {Object} data.body extracted body informations from API
   * @returns {{
   *  firstName: string,
   *  lastName: string
   * }} user updated identity
   */

  editProfile({ body }) {
    return {
      firstName: body.firstName || "",
      lastName: body.lastName || ""
    };
  }
}

export const userModeling = new UserModeling()

