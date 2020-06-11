import express from 'express'

import FilmsController from './controllers/FilmsController'

const routes = express.Router()

routes.get('/', FilmsController.get)

export default routes