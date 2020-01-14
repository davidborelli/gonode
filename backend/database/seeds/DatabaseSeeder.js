/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const User = use('App/Models/USer')

class DatabaseSeeder {
  async run() {
    const user = await User.create({
      name: 'David Borelli',
      email: 'david_borelli@live.com',
      password: '123456',
    })

    await user.teams().create({
      name: 'Projetos',
      user_id: user.id,
    })
  }
}

module.exports = DatabaseSeeder
