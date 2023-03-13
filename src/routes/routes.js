import { 
    todoNota ,  
    individualNota ,
    crearNota ,
    editarNota ,
    borrarNota ,
    todoNotaOldYoung,
    todoNotaYoungOld,
    todoCategoria ,  
    individualCategoria ,
    crearCategoria ,
    editarCategoria ,
    borrarCategoria ,
    todoCategoriaOldYoung,
    todoCategoriaYoungOld
} from "../controllers/funcionesJson.js"
import express from 'express'

const router = express.Router()

router.get('/notas', todoNota);
router.get('/notas/:id', individualNota);
router.get('/notasOldYoung', todoNotaOldYoung);
router.get('/notasYoungOld', todoNotaYoungOld);
router.post('/notas/', crearNota);
router.put('/notas/:id', editarNota);
router.delete('/notas/:id', borrarNota);

router.get('/categorias', todoCategoria);
router.get('/categorias/:id', individualCategoria);
router.get('/categoriasOldYoung', todoCategoriaOldYoung);
router.get('/categoriasYoungOld', todoCategoriaYoungOld);
router.post('/categorias/', crearCategoria);
router.put('/categorias/:id', editarCategoria);
router.delete('/categorias/:id', borrarCategoria);

export default router