const Cart = require('../../models/cart')
const CartController ={

    async CreateCart(req, res) {

        const bodyData = req.body
        const {user_id} = req.params

        try {
            
            const CreatedCart = await Cart.create({...bodyData, username: user_id})
            

            return res.status(200).json(CreatedCart)

        } catch (error) {
            return res.status(400).json(err)
        }
    },
    async getUserCarts(req, res) {

        const {user_id} = req.params
        try {
            const CartUserId = await Cart.find({username:user_id})
            return res.status(200).send(CartUserId)

            
        } catch (error) {
            return res.status(400).json(err)
        }
    },
    async getCart(req, res) {


        const { user_id, cart_id} = req.params


        try {
            const cart = await Cart.findById(cart_id).populate('product')
            return res.status(200).send(cart)
            
        } catch (error) {
            return res.status(400).json(err)
        }
    }



}
module.exports = CartController