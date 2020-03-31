const express = require('express')
const route = express.Router();
const randomId = require('../util/random_id')
const funcRank = require('../funtions/func_rank')

route.get('/', (req, res) => {
    res.send('hello')
})

route.get('/get-score', (req, res) => {

    funcRank.getAllScore()
            .then(result => res.json(result))
            .catch(err => res.json({ err: err }))

})

route.post('/post-score', async (req, res) => {

    let name = req.body.name
    let score = req.body.score

    funcRank.addScore(name, score)
            .then(result => res.json({
                _id: result._id,
                name: result.name,
                score: result.score
             }))
            .catch(err => res.json({ message: 'error' }))

})

route.post('/update-score', (req, res) => {

    let _id = req.body._id
    let score = req.body.score

    funcRank.updateScore(_id, score)
            .then(result => res.json({ message: 'OK' }))
            .catch(err => res.json({ err: err }))

})

route.get('/get-score/:_id', (req, res) => {

    let _id = req.params._id

    funcRank.findIdInRank(_id)
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ err: err }))

})

module.exports  = route