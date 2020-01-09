const Task = use('App/Models/Task')

class TaskController {
  async index({ params }) {
    const tasks = await Task.query()
      .where('project_id', params.projects_id)
      .with('user')
      .fetch()

    return tasks
  }

  async store({ params, request, response }) {
    try {
      const data = request.only([
        'user_id',
        'title',
        'description',
        'due_date',
        'file_id',
      ])

      const task = await Task.create({
        ...data,
        project_id: params.projects_id,
      })

      return task
    } catch (error) {
      return response.status(error.status).send({
        error: {
          message: `Erro ao criar tarefa. Erro: ${error}`,
        },
      })
    }
  }

  async show({ params, response }) {
    try {
      const task = await Task.findOrFail(params.id)

      return task
    } catch (error) {
      return response.status(error.status).send({
        error: {
          message: `Erro ao localizar tarefa solicitada. Erro: ${error}`,
        },
      })
    }
  }

  async update({ params, request, response }) {
    try {
      const task = await Task.findOrFail(params.id)
      const data = request.only([
        'user_id',
        'title',
        'description',
        'due_date',
        'file_id',
      ])

      task.merge(data)

      await task.save()

      return task
    } catch (error) {
      return response.status(error.status).send({
        error: {
          message: `Erro ao atualizar tarefa solicitada. Erro: ${error}`,
        },
      })
    }
  }

  async destroy({ params, response }) {
    try {
      const task = await Task.findOrFail(params.id)

      await task.delete()
    } catch (error) {
      return response.status(error.status).send({
        error: {
          message: `Erro ao deletar tarefa solicitada. Erro: ${error}`,
        },
      })
    }
  }
}

module.exports = TaskController
