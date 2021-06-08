const User = require ('../../models/user')

const LoginController = {
    async createSession(req, res){

        const {username} = req.body

        try {
            const user = await User.findOne({username})
            return res.status(200).json(user)

        } catch (error) {
            return res.status(400).json(err)
        }

    }

}
module.exports = LoginController