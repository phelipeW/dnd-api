const bodyParser = require('body-parser')
const peopleRoute = require('./peopleRoute')
const classRoute = require('./classRoute')
const levelRoute = require('./levelRoute')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(peopleRoute)
  app.use(classRoute)
  app.use(levelRoute)
}