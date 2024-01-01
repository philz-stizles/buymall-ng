export class User {
  constructor(
    public id: string,
    public email: string,
    public _token: string,
    public _tokenExpirationDate: Date,
    public roles: Array<string> = []
  ) {}

  get token() {
    if (this.isTokenExpired()) {
      return null;
    }

    return this._token;
  }

  private isTokenExpired = () =>
    !this._token ||
    !this._tokenExpirationDate ||
    this._tokenExpirationDate < new Date();

  isAuthorized(allowedRoles: string[]) {
    return this.roles.some((role) => allowedRoles.includes(role));
  }
}
