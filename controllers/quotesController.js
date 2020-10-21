let quotes = require('../data/quotesData.json')

module.exports = {
    index: (req, res) => {
        res.json(quotes)
    },

    create: (req, res) => {
        console.log(req)
        console.log(req.params)
    }
}