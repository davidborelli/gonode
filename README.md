[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/davidborelli/gonode) 

# API utilizando AdonisJS

> Aqui será inserido informaços ref. ao AdonisJS e seu ecossistema.

Instalar CLI do Adonis: </br>
`npm install -g @adonisjs/cli`

Para ver os comandos disponíveis: </br>
`adonis`

Informações de um comando em específico: </br>
`adonis new -h`

Para iniciar o servidor do projeto e iniciar o Nodemon, que é o responsável pelo live reload: </br>
`adonis serve --dev`

Executar as migrações no banco de dados, (Executar somente depois de configurar o BD em <strong>config > database.js</strong>): </br>
`adonis migration:run`

Criar um <strong>controller</strong>: </br>
`adonis make:controller User`

Para listar as rotas(controllers): </br>
`adonis route:list`

Quando o fonte ainda não foi repassado para nenhum dev. e a mesma ainda não foi versionado, e é desejado alterar um "model", pode-se utilizar o seguinte comando para dar rollback nas migrações e fazer a alteração desejada: </br>
`adonis migration:rollback`
