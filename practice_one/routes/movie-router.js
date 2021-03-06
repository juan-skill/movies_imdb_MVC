#!/usr/bin/env node

'use strict'

import express from 'express';
import MovieController from '../controllers/movie-controller.js';

const router = express.Router();

router
	.get('/', MovieController.getAll)
	.get('/agregar', MovieController.addForm)
	//.post('/', MovieController.insert)
	.post('/', MovieController.save)
	.get('/editar/:movie_id', MovieController.getOne)
	//.post('/actualizar/:movie_id', MovieController.update)
	//.put('/actualizar/:movie_id', MovieController.update)
	.put('/actualizar/:movie_id', MovieController.save)
	//.post('/eliminar/:movie_id', MovieController.delete)
	.delete('/eliminar/:movie_id', MovieController.delete)
	.use(MovieController.error404)
	
export default router;