const {Router} = require('express')
const routes = Router()



routes.get('/', (req, res) =>{
    res.send("teste rota")
})

//middleware
    const {authenticate} = require('../middlewares')

const UserController = require('../controllers/UserController')//importando arquivo criação de usuario
routes.post('/users', UserController.createUser)//cadastro usuarios
routes.get('/users', UserController.getUsers)//ver usuarios
routes.get('/users/:user_id',authenticate, UserController.getUsersById)//listar usuario por id


const LoginController = require('../controllers/login')
routes.post('/login', LoginController.createSession)// fazer login


const ProductController = require('../controllers/produtcs')
routes.post('/products/:user_id',authenticate, ProductController.createProduct)//criarproduto
routes.get('/:user_id/products', ProductController.getUserProducts)//listar produtos do usuario
routes.patch('/products/:user_id/:product_id',authenticate, ProductController.updateProduct)//atualizar produto do usuario
routes.delete('/products/:user_id/:product_id',authenticate, ProductController.deleteProduct) //deletar produto
routes.get('/products/', ProductController.getProducts)//listar todos os produtos
routes.get('/products/:product_id', ProductController.getProductById)//listar produto especifico


const CartController = require('../controllers/CartController')
routes.post('/carts/:user_id',authenticate, CartController.CreateCart)//fazer compras
routes.get('/carts/:user_id',authenticate, CartController.getUserCarts)//ver carrinho de compras de um usuario
routes.get('/carts/:user_id/:cart_id',authenticate, CartController.getCart)//listar cart especifico


module.exports = routes