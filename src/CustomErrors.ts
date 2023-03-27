/**
 * Instantiated when user got no authentification token
 */

export class MissingTokenError {
  name = "MissingToken";

  constructor(public message: string) { }
}

/**
 * Instantiated when fetch request fails
 */

export class FetchError {
  constructor(public message: string, public status?: number) { }
}