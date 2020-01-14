const Mail = use('Mail')
const Env = use('Env')

class InvitationEmail {
  static get concurrency() {
    return 1
  }

  static get key() {
    return 'InvitationEmail-job'
  }

  async handle({ user, email, team }) {
    await Mail.send(
      ['emails.invitation'],
      { team: team.name, user: user.name },
      message => {
        message
          .to(email)
          .from(Env.get('MAIL_SENDER_MAIL'), Env.get('MAIL_SENDER_NAME'))
          .subject(`Convite para o time ${team.name}`)
      }
    )
  }
}

module.exports = InvitationEmail
