import jwt from 'jsonwebtoken';
import  bodyParser from 'body-parser';
const Pool = require('pg').Pool;

export class idparcelsclass{

    constructor(){

            this.tosendflag="true";
    };


    getidparcels(request,response){
             
            const pool = new Pool({
                user: process.env.DB_USER,
                host: process.env.DB_HOST,
                database: process.env.DB_NAME,
                password: process.env.DB_PASS,
                port: process.env.DB_PORT
              });

            //const sender= request.params.parcelId;

            jwt.verify(request.token, 'privatekey', (err, authorizedData) => {

            const{username,parcelid,token}=request.body;

            if(err){

                response.send({token, message: "Your token has a problem.", username});
                response.end(); 
            }
            else
            {
            
            console.log('SELECT * FROM public."order" WHERE "id"=\''+parcelid+'\'');
            
            pool.query('SELECT * FROM public."order" WHERE id=\''+parcelid+'\'', (error, results) => {
                     if (error) {
                            console.log(error);
                            response.send({token, message: "Server down. Please try later.", username});
                            throw error;
                     }
                     else{
                     let data=results.rows;
                     response.send({token, message: "Information of Parcel Id : "+parcelid, data, username});
                     response.end();
                     }
            }); 
            
            }

        });
    };
}

