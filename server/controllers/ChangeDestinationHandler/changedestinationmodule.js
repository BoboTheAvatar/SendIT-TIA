import fs from 'fs';
import bodyParser from 'body-parser';
const Pool = require('pg').Pool;


export class changedestinationclass{

    constructor(){

            this.tosendflag="true";
    };



    changedestination(request,response){

            const pool = new Pool({
                                    user: 'postgres',
                                    host: 'localhost',
                                    database: 'sendit',
                                    password: '1234',
                                    port: 7777,
                                 });

            const{ token, parcelid,lat,long,loc}=request.body;

             /*
              const parcelid= request.params.Id;
              const lat=request.param('lat');
              const long=request.param('long');
              const loc=request.param('loc');*/

              //url example
              //localhost:8080/api/v1/parcels/id3/destination?lat=10&long=20&loc=KK10

              //const {long,loc}= request.body;

              console.log('UPDATE public."order" SET destination=\''+loc+'\', dlatitude=\''+lat+'\', dlongitude=\''+long+'\' WHERE id=\''+parcelid+'\''); 

            pool.query('UPDATE public."order" SET destination=\''+loc+'\', dlatitude=\''+lat+'\', dlongitude=\''+long+'\' WHERE id=\''+parcelid+'\'', (error, results) => {
                     if (error) {
                            throw error
                     }
                     //response.setHeader('Content-Type','text/plain');
                     response.send({Message:"Updated", token});  
            });      
	   

   };

}
