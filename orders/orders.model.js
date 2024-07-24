const data = {
    orders: [{
        date: '2020-05-05',
        total: 20000,
        items: 10
    }]
}

const getAllorders = () => {
    return data.orders;
}

module.exports = { getAllorders }