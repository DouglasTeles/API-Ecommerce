
const User = require ('../../models/user')

const UserController = {

    async createUser(req,res){

        const bodyData = req.body

        try {
            
            const newUser = await User.create(bodyData)
            return res.status(200).json(newUser)

        } catch (error) {
            return res.status(400).json(error)
        }

    },

    async getUsers(req, res){
        
        try {
            const users = await User.find()
            return res.status(200).json(users)
            
        } catch (error) {
            return res.status(400).json(err)
            
        }

    },

    async getUsersById(req, res){

        const {user_id} = req.params

        try {
            const user = await User.findById(user_id) 
            return res.status(200).json(users)
            
        } catch (error) {
            return res.status(400).send(err)
        }

    }

}
module.exports = UserController