class User {
  #API_USER_URL = `${process.env.REACT_APP_API_BASE_URL}/user`;

  async #fetchOrThrow(endpoint, options) {
    const url = `${this.#API_USER_URL}/${endpoint}`;
    const response = await fetch(url, options);
    if (response.ok === false) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }

  async login(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    };

    const { body } = await this.#fetchOrThrow("/login", options);
    return body;
  }
}

export const userService = new User();