class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token, username) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null
      && localStorage.getItem('username') !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.clear();
  }

  /**
   * Get token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem('token');
  }

  /**
   * Get username value.
   *
   * @returns {string}
   */

  static getUser() {
    return localStorage.getItem('username');
  }

}

export default Auth;
