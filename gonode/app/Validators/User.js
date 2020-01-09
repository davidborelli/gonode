class User {
  /*
    Adonis por padrão já para no primeiro erro, passando esse
    dessa forma o mesmo vai validar todos os campos
  */
  get validateAll() {
    return true
  }

  get rules() {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed',
    }
  }
}

module.exports = User
