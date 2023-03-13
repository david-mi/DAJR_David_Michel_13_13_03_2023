class UserModeling {
  auth(data) {
    const token = data.body.token;
    if (!token) throw new Error("Missing token");
    return token;
  }

  profile(data) {
    const { createdAt, updatedAt, id, ...userInfos } = data.body;
    return userInfos;
  }
}

export const userModeling = new UserModeling()

