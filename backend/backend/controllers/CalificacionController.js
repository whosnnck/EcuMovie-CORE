const Calificacion = require ('../model/calificacion');
const Pelicula = require('../model/pelicula');

//Agregar una nueva calificacion
exports.registrarCalificacion = async (req, res) => {
    try{
        const {tipo, comentario, peliculaId} = req.body;

        const pelicula = await Pelicula.findById(peliculaId);

        if(!pelicula){
            return res.status(404).json({message: 'La pelicula no existe.'});
        }

        if (req.user.rol === 'Administrador'){
            return res.status(403).json({message: 'Los administradores no pueden calificar'});
        }

        const nuevaCalificacion = new Calificacion({
            tipo,
            comentario,
            pelicula: peliculaId,
            usuario: req.user._id,
        });

        const calificacionGuardada = await nuevaCalificacion.save();

        res.status(201).json(calificacionGuardada);
    } catch (error){
        console.error(error);
        res.status(500).json({message: 'Ha ocurrido un error en el servidor'});
    }
};

//Obtener la calificacion de una pelicula
const obtenerCalificacionPelicula = async(req, res) =>{
    try{
        const peliculaId = req.params.peliculaId;
        const pelicula = await Pelicula.findById(peliculaId);

        if(!pelicula) {
            return res.status(404).json({message: 'La pelicula no existe'});
        }

        const calificaciones = await Calificacion.find({pelicula: peliculaId}).populate('usuario', 'nombre');
        res.status(200).json(calificaciones);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Ha ocurrido un error al obtener las calificaciones'})
    }
};
