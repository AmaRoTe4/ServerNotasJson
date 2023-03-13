import { proximoId ,  individual , oldYoung , youngOld } from './funciones.js'
import fs from 'fs';

const pathNotas = 'data/notas.json'
const pathCat = 'data/categorias.json'

export const todoNota = async (req , res) => {
    try{
        const data = await fs.readFileSync(pathNotas);
        res.json(JSON.parse(data).sort((a , b) => a.jerarquia - b.jerarquia));
    }catch(error){
        console.log(error.message)
    }
}

export const todoNotaYoungOld = async (req , res) => {
    try{
        const data = await youngOld(pathNotas);
        res.json(data);
    }catch(error){
        console.log(error.message)
    }
}

export const todoNotaOldYoung = async (req , res) => {
    try{
        const data = await oldYoung(pathNotas);
        res.json(data);
    }catch(error){
        console.log(error.message)
    }
}

export const individualNota = async (req , res) => {
    try{
        const data = await fs.readFileSync(pathNotas);
        const retorno = JSON.parse(data)
        
        res.json(individual(retorno, req.params.id));
    }catch(error){
        console.error(error.message)
    }
}

export const crearNota = async (req , res) => {
    //nota
    try{
        const aux = await fs.readFileSync(pathNotas)
        let notasActuales = JSON.parse(aux)
        
        const today = new Date().getTime()
        let nota = req.body
        
        nota.id = await proximoId(pathNotas)
        nota.createdAt = today
        notasActuales.push(nota)

        const newFichero = JSON.stringify(notasActuales);

        await fs.writeFileSync(pathNotas , newFichero);

        res.json("Nota Creada Con Exito");
    }catch(error){
        console.error(error)
    }
}

export const editarNota = async (req , res) => {
    //id
    //notas
    try{
        const body = req.body
        const today = new Date().getTime()
        body.updatedAt = today;
        
        const aux = await fs.readFileSync(pathNotas)
        let notasActualesFiltrada = JSON.parse(aux).filter(n => Number(n.id) !== Number(req.params.id))
    
        notasActualesFiltrada.push(body)
    
        const newFichero = JSON.stringify(notasActualesFiltrada);
        await fs.writeFileSync(pathNotas , newFichero);
        res.json("Nota Editada Con Exito");
    }catch(error){
        console.error(error)
    }
}

export const borrarNota = async (req , res) => {
    //id
    try{
        const aux = await fs.readFileSync(pathNotas)
        const newFichero = JSON.stringify(JSON.parse(aux).filter(n => Number(n.id) !== Number(req.params.id)))
        
        await fs.writeFileSync(pathNotas , newFichero);
        res.json("Nota Borrada Con Exito");
    }catch(error){
        console.error(error)
    }
}

export const todoCategoria = async (req , res) => {
    try{
        const data = await fs.readFileSync(pathCat);
        res.json(JSON.parse(data).sort((a , b) => a.jerarquia - b.jerarquia));
    }catch(error){
        console.log(error.message)
    }
}

export const todoCategoriaYoungOld = async (req , res) => {
    try{
        const data = await youngOld(pathCat);
        res.json(data);
    }catch(error){
        console.log(error.message)
    }
}

export const todoCategoriaOldYoung = async (req , res) => {
    try{
        const data = await oldYoung(pathCat);
        res.json(data);
    }catch(error){
        console.log(error.message)
    }
}

export const individualCategoria = async (req , res) => {
    try{
        const data = await fs.readFileSync(pathCat);
        const retorno = JSON.parse(data)
                
        res.json(individual(retorno, req.params.id));
    }catch(error){
        console.error(error.message)
    }
}

export const crearCategoria = async (req , res) => {
    //nota
    try{
        const aux = await fs.readFileSync(pathCat)
        let notasActuales = JSON.parse(aux)
        
        const today = new Date().getTime()
        let nota = req.body
        
        nota.id = await proximoId(pathCat)
        nota.createdAt = today
        notasActuales.push(nota)

        const newFichero = JSON.stringify(notasActuales);

        await fs.writeFileSync(pathCat , newFichero);

        res.json("Nota Creada Con Exito");
    }catch(error){
        console.error(error)
    }
}

export const editarCategoria = async (req , res) => {
    //id
    //notas
    try{
        const body = req.body
        const today = new Date().getTime()
        body.updatedAt = today;
        
        const aux = await fs.readFileSync(pathCat)
        let notasActualesFiltrada = JSON.parse(aux).filter(n => Number(n.id) !== Number(req.params.id))
    
        notasActualesFiltrada.push(body)
    
        const newFichero = JSON.stringify(notasActualesFiltrada);
        await fs.writeFileSync(pathCat , newFichero);
        res.json("Nota Editada Con Exito");
    }catch(error){
        console.error(error)
    }
}

export const borrarCategoria = async (req , res) => {
    //id
    try{
        const aux = await fs.readFileSync(pathCat)
        const newFichero = JSON.stringify(JSON.parse(aux).filter(n => Number(n.id) !== Number(req.params.id)))
        
        await fs.writeFileSync(pathCat , newFichero);
        res.json("Nota Borrada Con Exito");
    }catch(error){
        console.error(error)
    }
}