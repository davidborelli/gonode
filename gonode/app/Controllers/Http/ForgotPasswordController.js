const crypto = require('crypto')
const moment = require('moment')

const User = use('App/Models/User')
const Mail = use('Mail')
const Env = use('Env')

class ForgotPasswordController {
  async store({ request, response }) {
    try {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      await Mail.send(
        ['emails.forgot_password'],
        {
          email,
          token: user.token,
          link: `${request.input('redirect_url')}?token=${user.token}`,
        },
        message => {
          message
            .to(user.email)
            .from(Env.get('MAIL_SENDER_EMAIL', Env.get('MAIL_SENDER_NAME')))
            .subject('Recuperação de senha')
        }
      )
    } catch (error) {
      return response.status(error.status).send({
        error: {
          message: `Email não encontrado, informe um email válido! - Erro: ${error}`,
        },
      })
    }
  }

  async update({ request, response }) {
    try {
      const { token, password } = request.all()

      const user = await User.findByOrFail('token', token)

      const tokenExpired = moment()
        .subtract('2', 'days')
        .isAfter(user.token_created_at)

      if (tokenExpired) {
        return response.status(401).send({
          error: {
            message: `Token expirado, gere outro token para continuar...`,
          },
        })
      }

      user.token = null
      user.token_created_at = null
      user.password = password

      await user.save()
    } catch (error) {
      return response.status(error.status).send({
        error: {
          message: `Algo deu errado ao resetar sua senha - Erro: ${error}`,
        },
      })
    }
  }
}

module.exports = ForgotPasswordController
