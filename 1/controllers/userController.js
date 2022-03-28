const { response } = require("express")
const { request } = require("express")

// Memanggil file model untuk User
let modelUser = require("../models/index").user 

// Memanggil modul untuk enkripsi data Password
let md5 = require(`md5`)

exports.getDataUser = async (request, response) => {
    let dataUser = await modelUser.findAll()
    return response.json(dataUser)
}

exports.addDataUser = (request, response) => {
    let dataUser = {
        user: request.body.user,
        pass: md5(request.body.pass) 
    }

    modelUser.create(dataUser)
    .then(result => {
        return response.json({
            message: `Data User successfully inserted`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message 
        })
    })
}

exports.deleteDataUser = (request, response) => {
    let params = {
        id: request.params.id 
    }

    modelUser.destroy({
        where: params 
    })
    .then(result => {
        return response.json({
            message: `Data User successfully deleted`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.authentication = async (request, response) => {
    let data = {
        user: request.body.user,
        pass: md5(request.body.pass)
    }

    let result = await modelUser.findOne({
        where: data
    })

    if(result) {
        return response.json({
            rc: `00`,
            rd: `Sukses`
        })
    } else {
        return response.json({
            rc: `01`,
            rd: `Invalid user\/password`
        })
    }
}