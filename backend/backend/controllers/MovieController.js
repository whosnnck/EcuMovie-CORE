const express = require('express');
const router = express.Router();
const Pelicula = require('../model/pelicula');
const uploadImage = require('../libs/cloudinary.js');
const fs = require('fs-extra');


//Ruta para crear la pelicula C
exports.registroPelicula = async(req, res) => {
    try{
        let image = req.file;
        if(req.files.image && req.files.image){
            const resultado = await uploadImage(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath);
            image = {
                url: resultado.secure_url,
                public_id: resultado.public_id
            }
        }
        const { nombre, sinopsis, productor, director, clasificacion, tipo } = req.body;
        console.log(req.body);
        const nuevaPelicula = new Pelicula({
            nombre, 
            sinopsis,
            productor,
            director,
            clasificacion,
            tipo,
            image,
        });
        
        const peliculaGuardada = await nuevaPelicula.save();

        
        res.status(200).json({
            peliculaGuardada
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message})
    }
};

//Ruta para obtener las peliculas R
exports.obtenerPeliculas = async (req, res) => {
    try{
        const pelicula = await Pelicula.find();
        res.json(pelicula);
    } catch (error) {
        res.status(500).json({message: 'Error al obtener las peliculas'})
    }
};

//Read por Id
exports.obtenerPeliculaPorId = async (req, res) => {
    try{
        const pelicula = await Pelicula.findById(req.params.id);
        if(!pelicula){
            return res.status(404).json({message: 'Pelicula no encontrada'});
        }
        res.json(pelicula);
    } catch (error) {
        res.status(500).json({message: 'Error al obtener la pelicula'});
    }
};


//Ruta para editar la pelicula U
exports.editarPelicula = async(req, res) =>{
    try{
        const pelicula = await Pelicula.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!pelicula) {
            return res.status(404).json({message: 'Pelicula no encontrada'});
        }
        res.json(pelicula);
    } catch (error) {
        res.status(404).json({message: 'Error al actualizar la pelicula'});
    }
};

//Ruta para eliminar la peliucula D
exports.eliminarPelicula = async (req, res) => {
    try{
        const pelicula = await Pelicula.findByIdAndDelete(req.params.id, req.body, {new: true});
        if(!pelicula) {
            return res.status(404).json({message: 'Pelicula no encontrada'});
        }

        res.json({message: 'Pelicula eliminada correctamente'});
    } catch (error) {
        res.status(404).json({message: 'Error al eliminar la pelicula'});
    }
};