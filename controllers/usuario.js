const { response } = require('express')

//Importación de los modelos
const Usuario = require('../models/usuario') //Para instanciar, para conectar en la base de datos

//Método GET de la API
const usuarioGet = async (req, res = response) => {
    // const { nombre } = req.query //Desestructuración

    const usuarios = await Usuario.find()

    res.json({ //Respuesta en JSON
        usuarios
    })
}

const usuarioPost = async (req, res) => {
    let mensaje = 'Inserción exitosa'
    const body = req.body
    // console.log(query)
    try {
        // const { nombreUsu, nombre, apellidos, correo, celular, password, rol } = req.body;
        const usuario = new Usuario(body) //Se instancia el objeto
        await usuario.save() //Inserta en la colección
        // res.json(usuario)
    } catch (error) {
        mensaje = "error  al insertar"
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const usuarioPut = async (req, res) => {
    const { _id, nombreUsu, nombre, apellidos, correo, password, celular, rol } = req.body
    let mensaje = 'Modificación exitosa'
    try {
        await Usuario.updateMany({ _id: _id }, { $set: { correo: correo, password: password, celular: celular, rol: rol }});
} catch (error) {
    mensaje = "Problemas al modificar"
    console.log(error)
}
res.json({
    msg: mensaje
})
}

const usuarioDelete = async (req, res = response) => {
    const { _id } = req.body
    let mensaje = 'Eliminación exitosa'
    try {
        await Usuario.deleteOne({ _id: _id })
    } catch (error) {
        mensaje = "error al eliminar"
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}



module.exports = { usuarioGet, usuarioPost, usuarioPut, usuarioDelete }