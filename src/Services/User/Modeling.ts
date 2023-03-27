import { MissingTokenError } from "../../CustomErrors"
import type { AuthResponse, GetProfileResponse, EditProfileResponse } from "./types";

/**
 * Data modeling class for user
 */

class UserModeling {

  /**
   * Modeling retrieved data from login request
   * 
   * @returns user token
   * @throws {MissingTokenError} if token is missing
   */

  auth(data: AuthResponse) {
    const token = data.body.token;
    if (!token) throw new MissingTokenError("Token not found !");
    return token;
  }

  /**
   * Modeling retrieved data from profile get infos request
   * 
   * @returns user identity
   */

  profile({ body }: GetProfileResponse) {
    return {
      firstName: body.firstName || "",
      lastName: body.lastName || ""
    };
  }

  /**
   * Modeling retrieved data from profile edit request
   * 
   * @returns user updated identity
   */

  editProfile({ body }: EditProfileResponse) {
    return {
      firstName: body.firstName || "",
      lastName: body.lastName || ""
    };
  }
}

export const userModeling = new UserModeling()

