const { getAllProducts, getAllProductsInRange, addProducts } = require("./products.model")

module.exports = {
    Query: {
        products: () => { return getAllProducts() },
        productsByPrice: (_, args) => { return getAllProductsInRange(args.min, args.max) }
    },
    Mutation: {
        addProducts: (_, args) => { return addProducts(args.id, args.description, args.price) }
    }
}