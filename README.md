## API utilizando AdonisJS

### Sobre

<p> Sistema para gerenciamento de projetos e tarefas, onde podem ser criados projetos 
e vincular pessoas (time), e designar tarefas à pessoas específicas. </p>

### Tecnologia Utilizada

- AdonisJS </br>
  <strong>Documentação: https://adonisjs.com/docs </strong>

### Anotações

- <strong>Instalar CLI do Adonis: </strong> </br>
  - `npm install -g @adonisjs/cli`

* <strong>Para ver os comandos disponíveis:</strong> </br>

  - `adonis`

* <strong>Informações de um comando em específico:</strong> </br>

  - `adonis new -h`

* <strong>Para iniciar o servidor do projeto e iniciar o Nodemon, que é o responsável pelo live reload: </strong></br>

  - `adonis serve --dev`

* <strong>Executar as migrações no banco de dados, (_Executar somente depois de configurar o BD em config > database.js_):</strong> </br>

  - `adonis migration:run`

* <strong>Criar um controller:</strong> </br>

  - `adonis make:controller User`

* <strong>Para listar as rotas(controllers):</strong> </br>

  - `adonis route:list`

* <strong>Quando o fonte ainda não foi repassado para nenhum dev. e a mesma ainda não foi versionado, e é desejado alterar um "model", pode-se utilizar o seguinte comando para dar rollback nas migrações e fazer a alteração desejada:</strong> </br>

  - `adonis migration:rollback`

* <strong>Criar um novo model, e também a migração e controller:</strong> </br>
  - `adonis make:model File -m -c`

> -m = cria o Migration
> -c = cria o Controller

- <strong>Criar Hook:</strong>
  - `adonis make:hook Task`

### Instalando dependências

Todas as instalações de dependências são instaladas separadamente

#### Email

`adonis install @adonisjs/mail`

#### Validator

`adonis install @adonisjs/validator`

- <strong>Criar um validator:</strong> </br>

  - `adonis make:validator User`

- <strong>Criar uma exceção para lidar com os erros de validação:</strong> </br>
  - `adonis make:ehandler`

#### Internacionalização

`adonis install @adonisjs/antl`
