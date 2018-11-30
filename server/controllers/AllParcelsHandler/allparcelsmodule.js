
import  bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const Pool = require('pg').Pool;

export class allparcelsclass{

      constructor(){

            this.tosendflag="true";
      };


      getallparcels(request,response){

		      const pool = new Pool({
                user: process.env.DB_USER,
                host: process.env.DB_HOST,
                database: process.env.DB_NAME,
                password: process.env.DB_PASS,
                port: process.env.DB_PORT
              });
            

            
            jwt.verify(request.token, 'privatekey', (err, authorizedData) => {

            const {token,username}=request.body;

            if(err){

                response.status(400).send({token, message: "Your token has a problem.", username});
                response.end(); 
            }
            else
            {
            //console.log("Hey");
            

            pool.query('SELECT * FROM public."order"', (error, results) => {
                     if (error) {
                            console.log(error);
                            response.status(500).send({token, message: "Server down. Please try later.", username});
                            throw error;
                     }else{

                     let data=results.rows;
                     response.setHeader('Content-Type','application/json');
                     response.status(200).send({token, message: "Parcels from All Users", data, username});
                     response.end();
                    }
            });

            }

           });

       };
}