import { MissingTokenError } from "./middlewares/error";

export function getStorageTokenOrThrow() {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token === null) {
    throw new MissingTokenError("Token not found !");
  }

  return token;
}

export function setStorageToken(token, remember) {
  if (remember) {
    localStorage.setItem("token", token);
  } else {
    sessionStorage.setItem("token", token);
  }
}

export function deleteStorageToken() {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
}