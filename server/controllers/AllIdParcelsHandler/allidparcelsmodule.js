const Pool = require('pg').Pool;
import fs from 'fs';
import  bodyParser from 'body-parser';
import express from 'express';

export class allidparcelsclass{

    constructor(){

            this.tosendflag=true;
    };

    getallidparcels(request,response){

		         const pool = new Pool({
                                    user: 'postgres',
                                    host: 'localhost',
                                    database: 'sendit',
                                    password: '1234',
                                    port: 7777,
                                 });

            //const sender= request.params.Id;
            const {token,id}=request.body;
            
            console.log('SELECT * FROM public."order" WHERE "Sender"=\''+id+'\'');
            
            pool.query('SELECT * FROM public."order" WHERE Sender=\''+id+'\'', (error, results) => {
                     if (error) {
                            throw error
                     }
                     else{
                        let Message=results.rows;
                        response.setHeader('Content-Type','application/json');
                        response.send({Message,token});
                     }
            return 0;

            }); 
              
            


            //response.setHeader('Content-Type','application/json');
            //response.send(jsontosend); 

            //return "\"Done!\"";        
	   

    };

}
