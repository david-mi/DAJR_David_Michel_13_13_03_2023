import { MissingTokenError } from "./CustomErrors";

/**
 * Returns JSON Web Token from local / session storage or throws an error
 * 
 * @returns JSON Web Token
 * @throws {MissingTokenError} if token is missing
 */

export function getStorageTokenOrThrow(): string {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token === null) {
    throw new MissingTokenError("Token not found !");
  }

  return token;
}

/**
 * Set token to Local or Session Storage
 * 
 * @param token JSON Web Token
 * @param remember if true, set token to localStorage, if false set it to SessionStorage
 */

export function setStorageToken(token: string, remember: boolean): void {
  if (remember) {
    localStorage.setItem("token", token);
  } else {
    sessionStorage.setItem("token", token);
  }
}

/**
 * Removes JSON Web Token from Local and Session Storage if found
 */

export function deleteStorageToken(): void {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
}