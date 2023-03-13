class UserModeling {
  auth(data) {
    const token = data.body.token;
    if (!token) throw new Error("Missing token");
    return token;
  }
}

export const userModeling = new UserModeling()

