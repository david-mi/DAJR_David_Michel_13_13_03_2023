export interface AuthResponse {
  status: 200,
  message: string,
  body: {
    /** JSON Web Token */
    token: string
  }
}

export interface GetProfileResponse {
  status: 200,
  message: string,
  body: {
    id: string,
    email: string,
    firstName: string,
    lastName: string
  }
}

export interface EditProfileResponse {
  status: 201,
  body: {
    firstName: string,
    lastName: string
  }
}