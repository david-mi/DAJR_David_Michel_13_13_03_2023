export function getStorageTokenOrThrow() {
  const token = localStorage.getItem("token");
  if (token === null) {
    throw new Error("No token found !");
  }

  return token;
}

export function setStorageToken(token) {
  localStorage.setItem("token", token);
}