import fs from 'fs';
import  bodyParser from 'body-parser';
const Pool = require('pg').Pool;

export class allparcelsclass{

      constructor(){

            this.tosendflag="true";
      };


      getallparcels(request,response){

		      const pool = new Pool({
                                    user: 'postgres',
                                    host: 'localhost',
                                    database: 'sendit',
                                    password: '1234',
                                    port: 7777,
                                 });
            
            //console.log("Hey");
            const {token}=request.body;

            pool.query('SELECT * FROM public."order"', (error, results) => {
                     if (error) {
                            throw error
                     }else{

                     let Message=results.rows;
                     response.setHeader('Content-Type','application/json');
                     response.send({Message,token});
                     response.end();
                    }
            });

            //response.setHeader('Content-Type','application/json');
            //response.send(jsontosend);         
	   
    };
}