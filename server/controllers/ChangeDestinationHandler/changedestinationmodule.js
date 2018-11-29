import fs from 'fs';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const Pool = require('pg').Pool;


export class changedestinationclass{

    constructor(){

            this.tosendflag="true";
    };



    changedestination(request,response){

            const pool = new Pool({
                user: process.env.DB_USER,
                host: process.env.DB_HOST,
                database: process.env.DB_NAME,
                password: process.env.DB_PASS,
                port: process.env.DB_PORT
              });

            const{ token, parcelid, lat, long, loc, price, sender, username }=request.body;

             /*
              const parcelid= request.params.Id;
              const lat=request.param('lat');
              const long=request.param('long');
              const loc=request.param('loc');*/

              //url example
              //localhost:8080/api/v1/parcels/id3/destination?lat=10&long=20&loc=KK10

              //const {long,loc}= request.body;
        jwt.verify(request.token, 'privatekey', (err, authorizedData) => { 
            if(err){

                response.send({token, message: "Your token has a problem.", username});
                response.end(); 
            }
            else
            {

               console.log('UPDATE public."order" SET price=\''+price+'\', destination=\''+loc+'\', dlatitude=\''+lat+'\', dlongitude=\''+long+'\' WHERE id=\''+parcelid+'\''); 

               pool.query('UPDATE public."order" SET price=\''+price+'\', destination=\''+loc+'\', dlatitude=\''+lat+'\', dlongitude=\''+long+'\' WHERE id=\''+parcelid+'\'', (error, results) => {
                     if (error) {
                            console.log(error);
                            response.send({token, message: "Server down. Please try later.", username});
                            throw error;
                     }
                     else
                     {
                     response.send({token, message: "Destination Updated To "+loc+"", username});  
                     }
               });      
            }
	   

        });

      }

}
