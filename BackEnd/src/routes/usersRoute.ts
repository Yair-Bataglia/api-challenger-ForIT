import {Router} from 'express'
import {getData} from '../controllers/getUsersController'
import {addUser} from '../controllers/postUserController'

const router = Router()

router.get('/users', getData)
router.post('/add', addUser)

export default router