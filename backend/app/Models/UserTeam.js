const Model = use('Model')

class UserTeam extends Model {
  user() {
    return this.belongTo('App/Models/User')
  }
}

module.exports = UserTeam
