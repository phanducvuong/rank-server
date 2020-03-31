"use strict"

// import express from 'express'
const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const body_parser = require('body-parser')
const routeRank = require('./route/rank')

const app = express()

app.use(body_parser.urlencoded({ extended: false }))
app.use(body_parser.json())
app.use('/', routeRank)

const URI = 'mongodb://localhost:27017/rank_server'
// const URI = 'mongodb+srv://alan:vuong.phan233189@cluster0-odfy5.mongodb.net/rank_tank?retryWrites=true&w=majority'
const port = process.env.PORT || 3000
mongoose.connect(URI, ({ useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }))

mongoose.connection.once('open', () => {
    app.listen(port, () => {
        console.log('app listen to port: ' + `${port}`);
    })
})