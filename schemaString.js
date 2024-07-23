const schemaString = `
 type Query{
    products:[Product]
    orders:[Order]
 }

 type Product{
    id:ID!
    description:String!
    reviews:[Review]
    price:Float!        
 }

 type Review{
    comment:String
    rating:Int!
 }

 type Order{
    data:String!
    total:Int!
    items:Int!
 }
`

const root = {
    products: [{
        id: 'Jeans',
        description: "pant of len 100",
        reviews: [{ rating: 5 }, { rating: 4, comment: "nice pair" }],
        price: 1500
    },
    {
        id: 'shirt',
        description: "shirt XL",
        reviews: [{ rating: 1 }, { rating: 0, comment: "nice shirt" }],
        price: 1000
    }],
    orders: [{
        date: '2020-05-05',
        total: 20000,
        items: 10
    }]
}

module.exports = { root, schemaString }