const { getAllorders } = require("./orders.model")

module.exports = {
    Query: {
        orders: () => { return getAllorders }
    }
}