import { MissingTokenError } from "./middlewares/error";

export function getStorageTokenOrThrow() {
  const token = localStorage.getItem("token");
  if (token === null) {
    throw new MissingTokenError("Token not found !");
  }

  return token;
}

export function setStorageToken(token) {
  localStorage.setItem("token", token);
}

export function deleteStorageToken() {
  localStorage.removeItem("token");
}