import express from 'express'
const route = express.Router()

import * as controller from '../controllers/controllers.js'

route.get('/',controller.home)

route.post('/register', controller.register)

route.post('/add-journal/:id', controller.add_journal)
route.patch('/edit-journal/:id', controller.edit_journal)
route.delete('/delete-journal/:id', controller.delete_journal)

route.post('/add-thought/:id', controller.add_thought)
route.patch('/edit-thought/:id', controller.edit_thought)
route.delete('/delete-thought/:id', controller.delete_thought)

route.post('/add-quote/:id', controller.add_quote)
route.patch("/edit-quote/:id", controller.edit_quote)
route.delete("/delete-quote/:id", controller.delete_quote)

route.post('/login', controller.login)

export default route