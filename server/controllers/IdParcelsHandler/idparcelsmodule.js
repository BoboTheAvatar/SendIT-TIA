//import Database from "../Database";
import fs from 'fs';
import  bodyParser from 'body-parser';
const Pool = require('pg').Pool;

export class idparcelsclass{

    constructor(){

            this.tosendflag="true";
    };


    getidparcels(request,response){
             
            const pool = new Pool({
                                    user: 'postgres',
                                    host: 'localhost',
                                    database: 'sendit',
                                    password: '1234',
                                    port: 7777,
                                 });

            const sender="";

            if(request.params.parcelId){ sender=request.params.parcelId;};
            
            console.log('SELECT * FROM public."order" WHERE "id"=\''+sender+'\'');
            
            pool.query('SELECT * FROM public."order" WHERE id=\''+sender+'\'', (error, results) => {
                     if (error) {
                            throw error
                     }
                     response.status(200).json(results.rows)
            }); 
            


            //response.setHeader('Content-Type','application/json');
            //response.send(jsontosend);  

    };
}

