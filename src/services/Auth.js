const Auth = {
  isLoggedIn: false,
  authenticate (email, password) {
    if (email && password) {
      return true;
    } else {
      return false;
    }
  },
  singout () {
    this.isLoggedIn = false;
  }
}

export default Auth;
