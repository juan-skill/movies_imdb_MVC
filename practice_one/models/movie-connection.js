#!/usr/bin/env node

'use strict'

import mysql from 'mysql2';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const conf = require("./db-conf.json");

const dbOptions = {
		host : conf.mysql.host,
		port : conf.mysql.port,
		user : conf.mysql.user,
		password : conf.mysql.pass,
		database : conf.mysql.db
	},
	myConn = mysql.createConnection(dbOptions)

myConn.connect((err) => {
	return (err) ? console.log(`Error al Conectarse a MySQL: ${err.stack}`) : console.log(`Conexión establecida con MySQL N°: ${myConn.threadId}`)
})

//console.log(conf.mysql.db)

export default myConn;