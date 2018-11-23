const Pool = require('pg').Pool;
import fs from 'fs';
import  bodyParser from 'body-parser';

export class allidparcelsclass{

    constructor(){

            this.tosendflag="true";
    };

    getallidparcels(request,response){

		         const pool = new Pool({
                                    user: 'postgres',
                                    host: 'localhost',
                                    database: 'sendit',
                                    password: '1234',
                                    port: 7777,
                                 });

            const sender= request.params.Id;
            console.log('SELECT * FROM public."order" WHERE "Sender"=\''+sender+'\'');
            
            pool.query('SELECT * FROM public."order" WHERE Sender=\''+sender+'\'', (error, results) => {
                     if (error) {
                            throw error
                     }
                     response.status(200).json(results.rows)
            }); 
              
            


            //response.setHeader('Content-Type','application/json');
            //response.send(jsontosend); 

            //return "\"Done!\"";        
	   

    };

}
