import fs from 'fs';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
const Pool = require('pg').Pool;


export class changestatusclass{

    constructor(){

            this.tosendflag="true";
    };



    changestatus(request,response){

            const pool = new Pool({
                user: process.env.DB_USER,
                host: process.env.DB_HOST,
                database: process.env.DB_NAME,
                password: process.env.DB_PASS,
                port: process.env.DB_PORT
              });

            /*
            const id=request.params.Id;
            const status=request.param('stat');*/

            //localhost:8080/api/v1/parcels/id3/status?stat="In Progress"

            const {token, status, parcelid, username} = request.body;

           jwt.verify(request.token, 'privatekey', (err, authorizedData) => { 
            if(err){

                response.status(400).send({token, message: "Your token has a problem.", username});
                response.end(); 
            }
            else
            {

            pool.query("UPDATE public.\"order\" SET status ='"+status+"' WHERE id ='"+parcelid+"'", (error, results) => {
                          if (error) {
                                console.log(error);
                                response.status(500).send({token, message: "Server down. Please try later.", username});
                                throw error;
                           }
                           else
                           {
                                
                                response.status(202).send({token, message: "Parcel Status Updated To "+status+"", username}); 
                           }

            });  

            }      
	   
        });
   };

}
