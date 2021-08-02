const control={}
const curso= require ('../models/curso');


control.leer=async(req,res)=>{
    await curso.find().then(curso =>{
        res.json(curso)
    });

}

control.actualizar=(req, res)=>{
    res.send("Metodo Update")
}

control.crear=async(req,res)=>{
    const {id,codigo,nombre,tiempo,profesor}=req.body
    const nuevoRegistro = new curso({
        id,
        codigo,
        nombre,
        tiempo,
        profesor,
    })
    await nuevoRegistro.save()
    res.json({
        mensaje: 'Curso Guardado'
    })
}


control.eliminar=(req, res)=>{
    res.send("Metodo Delete")
}

module.exports= control;