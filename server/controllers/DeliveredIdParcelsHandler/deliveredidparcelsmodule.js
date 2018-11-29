import fs from 'fs';
import  bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';


const Pool = require('pg').Pool;


export class deliveredidparcelsclass{

    constructor(){

            this.tosendflag="true";
    };

    deliveredidparcels(request,response){

             const pool = new Pool({
                user: process.env.DB_USER,
                host: process.env.DB_HOST,
                database: process.env.DB_NAME,
                password: process.env.DB_PASS,
                port: process.env.DB_PORT
              });

            const{parcelid,token,username}=request.body;

            jwt.verify(request.token, 'privatekey', (err, authorizedData) => { 
            if(err){

                response.send({token, message: "Your token has a problem.", username});
                response.end(); 
            }
            else
            {

            console.log('UPDATE public."order" SET status=\'Delivered\' WHERE id=\''+parcelid+'\''); 

            pool.query('UPDATE public."order" SET status=\'Delivered\' WHERE id=\''+parcelid+'\'', (error, results) => {
                     if (error) {
                            console.log(error);
                            response.send({token, message:"Server down. Please try again later.", username});
                            response.end();
                     }
                     else{
                     response.send({token, message: "Parcel status set to delivered.", username});  
                     }
            });

            }      
       
        });
            

           
      };

}

