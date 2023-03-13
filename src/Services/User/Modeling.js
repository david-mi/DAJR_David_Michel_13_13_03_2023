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

  editProfile({ body }) {
    return {
      firstName: body.firstName || "",
      lastName: body.lastName || ""
    };
  }
}

export const userModeling = new UserModeling()

