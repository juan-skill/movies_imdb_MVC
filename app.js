#!/usr/bin/env node

'use strict'

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './routes/movie-router.js';
//restFul = require('express-method-override')('_method'),
import restFul from 'express-method-override';

const __filename = fileURLToPath(import.meta.url),
      __dirname = dirname(__filename);

const	faviconURL = `${__dirname}/public/img/node-favicon.png`,
		publicDir = express.static(`${__dirname}/public`),
		viewDir = `${__dirname}/views`,
		port = (process.env.PORT || 4000),
	

		app = express()

app
	.set('views', viewDir)
	.set('view engine', 'jade')
	.set('port', port)

	.use( favicon(faviconURL) )
	// parse application/json
	.use( bodyParser.json() )
	// parse application/x-www-form-urlencoded
	.use( bodyParser.urlencoded({extended: false}) )
	.use(restFul('_method'))
	.use( morgan('dev') )
	.use(publicDir)
	.use(router)

export default app;