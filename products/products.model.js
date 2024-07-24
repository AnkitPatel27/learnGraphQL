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

function getAllProductsInRange(min, max) {
    return data.products.filter((item) => {
        return min <= item.price && item.price <= max;
    });
}

function addProducts(id, description, price) {
    product = {
        id: id,
        description: description,
        price: price,
        reviews: []
    }

    if (data.products.find(item => item.id === id)) {
        throw new Error("Product which such id already present")
    }

    data.products.push(product);
    return product;
}

module.exports = { getAllProducts, getAllProductsInRange, addProducts }
