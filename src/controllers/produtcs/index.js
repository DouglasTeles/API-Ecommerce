const Product = require ('../../models/product')

const ProductController ={

    async createProduct(req, res){

        const bodyData = req.body
        const {user_id} = req.params
        try {
            
            const data = {username:user_id,...bodyData}
            const newProduct = await Product.create(data)
            await newProduct.populate('username').execPopulate()
            return res.status(200).send(newProduct)
            
        } catch (error) {
            return res.status(400).send(err)
        }

    },    

    async getUserProducts(req, res){

       const {user_id} = req.params

        try {
            const productsOfanUser = await Product.find({username:user_id})
            return res.status(200).send(productsOfanUser)
            
        } catch (error) {
            return res.status(400).send(err)
        }
    },

    async updateProduct(req, res){
        
        const bodyData = req.body
        const {product_id, user_id} = req.params

        try {
            const updatedProduct = await Product.findByIdAndUpdate(product_id, bodyData, {new:  true})
            return res.status(200).json(updatedProduct)
            
        } catch (error) {
            return res.status(400).send(err)
        }
    },

    async deleteProduct(req, res){

        
        const {product_id, user_id} = req.params
        try {

            const deletedProduct = await Product.findByIdAndDelete(product_id)
            return res.status(200).json(deletedProduct)
            
        } catch (error) {
            return res.status(400).send(err)
        }
    },

    async getProducts(req, res){
        
        try {
            
            const products = await Product.find()
            return res.status(200).json(products)

        } catch (error) {
            return res.status(400).send(err)
        }

    },
    async getProductById(req, res){
       
        const {product_id} = req.params
        try {
            const product = await Product.findById(product_id)
            return res.status(200).json(product)
            
        } catch (error) {
            return res.status(400).send(err)
        }

    },
    


}

module.exports = ProductController