"use strict"

const rankModel = require('../models/rank_model')

exports.findIdInRank = (id) => {

    return new Promise((resolve, reject) => {
        rankModel.findOne({ _id: id })
                 .then(result => resolve(result))
                 .catch(err => reject(err))
    })

}

exports.getAllScore = () => {

    return new Promise((resolve, reject) => {
        rankModel.find()
                 .limit(99)
                 .sort({ score: -1 })
                 .then(result => resolve(result))
                 .catch(err => reject(err))
    })

}

exports.updateScore = (_id, score) => {

    return new Promise((resolve, reject) => {
        rankModel.findOneAndUpdate({ _id: _id }, { score: score })
                 .then(result => resolve(result))
                 .catch(err => reject(err))
    })

}

exports.addScore = (name, score) => {

    return new Promise((resolve, reject) => {
        let tempRank = new rankModel({
            name: name,
            score: score
        })

        tempRank.save()
                .then(result => resolve(result))
                .catch(err => reject(err))
    })

}