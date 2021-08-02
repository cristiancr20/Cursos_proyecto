const control={}
const persona= require ('../models/persona');


control.leer=async(req,res)=>{
    await persona.find().then(persona =>{
        res.json(persona)
    });

}

control.actualizar=(req, res)=>{
    res.send("Metodo Update")
}

control.crear=async(req,res)=>{
    const {id,cedula,nombre,apellido,edad}=req.body
    const nuevoRegistro = new persona({
        id,
        cedula,
        nombre,
        apellido,
        edad,
    })
    await nuevoRegistro.save()
    res.json({
        mensaje: 'Persona Guardado'
    })
}


control.eliminar=(req, res)=>{
    res.send("Metodo Delete")
}

module.exports= control;