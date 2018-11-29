import fs from 'fs';
import  bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const Pool = require('pg').Pool;


export class cancelidparcelsclass{

      constructor(){

            this.tosendflag="true";
      };


      cancelidparcels(request,response){

             const pool = new Pool({
                user: process.env.DB_USER,
                host: process.env.DB_HOST,
                database: process.env.DB_NAME,
                password: process.env.DB_PASS,
                port: process.env.DB_PORT
              });

            //const parcelid= request.params.Id;
            const{parcelid,token,username}=request.body;

            jwt.verify(request.token, 'privatekey', (err, authorizedData) => { 
            if(err){

                response.send({token, message: "Your token has a problem.", username});
                response.end(); 
            }
            else
            {

            console.log('UPDATE public."order" SET status=\'Cancelled\' WHERE id=\''+parcelid+'\''); 

            pool.query('UPDATE public."order" SET status=\'Cancelled\' WHERE id=\''+parcelid+'\'', (error, results) => {
                     if (error) {
                            console.log(error);
                            response.send({token, message:"Server down. Please try again later.", username});
                            response.end();
                     }
                     else{
                     response.send({token, message: "Parcel status set to Cancelled.", username});  
                     }
            });

           

            //response.setHeader('Content-Type','text/plain');
            //response.send("\"Done!\"");         
          }      
       
        });
    };

}