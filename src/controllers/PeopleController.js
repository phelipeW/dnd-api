const { People } = require('../models')
const { Registration } = require('../models')

class PeopleController {
  // PEOPLE
  static async index(req,res) {
    try{
      const people = await People.findAll()
      return res.status(200).json(people)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async findById(req, res) {
    const { id } = req.params
    try {
      const people = await People.findByPk(id)
      if(people){
        return res.status(200).json(people)
      } else {
        return res.status(404).json("Pessoa não encontrada!")
      }
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async create(req, res) {
    const people = req.body
    try {
      const findEmail = await Registration.findOne({
        where: {
          email: people.email
        }
      })

      const findLogin = await Registration.findOne({
        where: {
          login: people.login
        }
      })

      if(findEmail) {
        return res.status(400).json({error: 'Email já cadastrado'})
      }

      if(findLogin) {
        return res.status(400).json({error: 'Login já cadastrado'})
      }
      
      const newPeople = await People.create(people)
      return res.status(200).json(newPeople)
      
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async update(req, res) {
    const people = req.body
    const { id } = req.params

    try {
      await People.update(people, { where: { id } })
      const newPeople = await People.findByPk(id)

      return res.status(200).json(newPeople)
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }

  static async delete(req, res) {
    const { id } = req.params
    try {
      await People.destroy({ where: { id: Number(id) } })
      return res.status(200).send()
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }
}

module.exports = PeopleController