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
    const {id,email, password}=req.body
    const nuevoRegistro = new persona({
        id,
        email, 
        password 
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