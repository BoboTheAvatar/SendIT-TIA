import fs from 'fs';
import  bodyParser from 'body-parser';
const Pool = require('pg').Pool;


export class deliveredidparcelsclass{

    constructor(){

            this.tosendflag="true";
    };

    deliveredidparcels(request,response){

             const pool = new Pool({
                                    user: 'postgres',
                                    host: 'localhost',
                                    database: 'sendit',
                                    password: '1234',
                                    port: 7777,
                                 });

            const parcelid= request.params.Id;
            console.log('UPDATE public."order" SET status=\'Delivered\' WHERE id=\''+parcelid+'\''); 

            pool.query('UPDATE public."order" SET status=\'Delivered\' WHERE id=\''+parcelid+'\'', (error, results) => {
                     if (error) {
                            throw error
                     }
                     response.setHeader('Content-Type','text/plain');
                     response.send("Updated!");  
            });
            

           
      };

}

