module.exports = {
  origin: true,
  // Recomendado é utilizar um array com os endereços que acessar a API
  // Ex. ['187.190.09', 'rockeseat.com.br']

  methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],

  headers: true,

  exposeHeaders: false,

  credentials: false,

  maxAge: 90,
}
