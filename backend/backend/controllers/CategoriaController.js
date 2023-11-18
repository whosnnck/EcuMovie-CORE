const Pelicula = require('../model/pelicula');
const Categoria = require('../model/categoria');

exports.agregarCategoriaPelicula = (req, res) =>{
    const {tipo, peliculaId} = req.body;

    Pelicula.findById(peliculaId)
    .then(pelicula =>{
        if (!pelicula){
            return res.status(404).json({message: 'Pelicula no encontrada'});
        }
        Categoria.findOne({tipo})
        .then(categoria =>{
        if(!categoria){
            return res.status(404).json({message: 'Categoria no existe'});
        }
        pelicula.categoriaId = categoria._id;
        pelicula
        .save()
        .then(() => {
            res.status(201).json(categoria);
        })
        .catch(error =>{
            res.status(500).json({message: 'Ocurrio un error al asociar la categoria'})
            })
        .catch(error => {
            res.status(500).json({message: 'Ocurrio un error en buscar la categoria'})
        });
    });
    
    })
    .catch(error => {
        res.status(500).json({message: 'Ocurrio un error al buscar la pelicula'})
    });
};