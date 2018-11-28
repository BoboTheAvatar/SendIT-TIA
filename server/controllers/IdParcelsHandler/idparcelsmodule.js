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

            //const sender= request.params.parcelId;
            const{id,token}=request.body;
            
            console.log('SELECT * FROM public."order" WHERE "id"=\''+id+'\'');
            
            pool.query('SELECT * FROM public."order" WHERE id=\''+id+'\'', (error, results) => {
                     if (error) {
                            throw error
                     }
                     else{
                     let Message=results.rows;
                     response.setHeader('Content-Type','application/json');
                     response.send({Message,token});
                     }
            }); 
            


            //response.setHeader('Content-Type','application/json');
            //response.send(jsontosend);  

    };
}

