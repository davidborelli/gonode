
## API utilizando AdonisJS

### Sobre
<p> Sistema para gerenciamento de projetos e tarefas, onde podem ser criados projetos 
e vincular pessoas (time), e designar tarefas à pessoas específicas. </p>

### Tecnologia Utilizada
* AdonisJS
<strong>Documentação: https://adonisjs.com/docs </strong>

### Anotações
- Instalar CLI do Adonis: </br>
  - `npm install -g @adonisjs/cli`


- Para ver os comandos disponíveis: </br>
  - `adonis`

- Informações de um comando em específico: </br>
  - `adonis new -h`

- Para iniciar o servidor do projeto e iniciar o Nodemon, que é o responsável pelo live reload: </br>
  - `adonis serve --dev`

- Executar as migrações no banco de dados, (Executar somente depois de configurar o BD em <strong>config > database.js</strong>): </br>
  - `adonis migration:run`

- Criar um <strong>controller</strong>: </br>
  - `adonis make:controller User`

- Para listar as rotas(controllers): </br>
  - `adonis route:list`

- Quando o fonte ainda não foi repassado para nenhum dev. e a mesma ainda não foi versionado, e é desejado alterar um "model", pode-se utilizar o seguinte comando para dar rollback nas migrações e fazer a alteração desejada: </br>
  - `adonis migration:rollback`

- Criar um novo model, e também a migração e controller: </br>
  - `adonis make:model File -m -c`

> -m = cria o Migration
> -c = cria o Controller

### Instalando dependências

Todas as instalações de dependências são instaladas separadamente

#### Email

`adonis install @adonisjs/mail`

#### Validator

`adonis install @adonisjs/validator`

- Criar um validator: </br>
  - `adonis make:validator User`

- Criar uma exceção para lidar com os erros de validação: </br>
  - `adonis make:ehandler`

#### Internacionalização

`adonis install @adonisjs/antl`
