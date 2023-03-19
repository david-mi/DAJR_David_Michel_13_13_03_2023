import { MissingTokenError } from "./middlewares/error";

/**
 * Returns JWT token from local / session storage or throws an error
 * 
 * @returns {string} JWT or error
 * @throws {MissingTokenError}
 */

export function getStorageTokenOrThrow() {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token === null) {
    throw new MissingTokenError("Token not found !");
  }

  return token;
}

/**
 * Set token to Local or Session Storage
 * 
 * @param {string} token JWT token
 * @param {boolean} remember 
 * if true, set token to localStorage, if false set it to SessionStorage
 */

export function setStorageToken(token, remember) {
  if (remember) {
    localStorage.setItem("token", token);
  } else {
    sessionStorage.setItem("token", token);
  }
}

/**
 * Removes JWT token from Local and Session Storage if found
 */

export function deleteStorageToken() {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
}