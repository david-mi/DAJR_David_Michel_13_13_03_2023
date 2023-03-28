export interface AuthResponse {
  status: 200,
  message: string,
  body: {
    /** JSON Web Token */
    token: string
  }
}

export interface ProfileResponse {
  status: 200,
  message: string,
  body: {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    createdAt: string,
    updatedAt: string
  }
}