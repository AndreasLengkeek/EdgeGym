import axios from 'axios';

class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.setAuthDefaults();
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null
      && localStorage.getItem('user') !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.clear();
    this.setAuthDefaults();
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
    return JSON.parse(localStorage.getItem('user'));
  }

  static setAuthDefaults() {
    let token = localStorage.getItem('token');
    if (token)
      token = `Bearer ${token}`;

    axios.defaults.headers.common['Authorization'] = token;
  }

}

export default Auth;
