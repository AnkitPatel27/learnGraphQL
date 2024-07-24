const data = {
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
    }]
}

function getAllProducts() {
    return data.products;
}

module.exports = { getAllProducts }
