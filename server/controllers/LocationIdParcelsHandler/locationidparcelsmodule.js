import fs from 'fs';
import  bodyParser from 'body-parser';
const Pool = require('pg').Pool;

export class locationidparcelsclass{

    constructor(){

            this.tosendflag="true";
    }; 



    locationidparcels(request,response){
              
              //Entered new location and price
              //const enteredprice=126, enteredlocation="KL 123", filedata={};

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
              //localhost:8080/api/v1/parcels/id3/location?lat=10&long=20&loc=KK10

              //const {long,loc}= request.body;

              console.log('UPDATE public."order" SET current=\''+loc+'\', clatitude=\''+lat+'\' clongitude=\''+long+'\' WHERE id=\''+parcelid+'\''); 

            pool.query('UPDATE public."order" SET current=\''+loc+'\', clatitude=\''+lat+'\', clongitude=\''+long+'\' WHERE id=\''+parcelid+'\'', (error, results) => {
                     if (error) {
                            throw error
                     }
                     response.setHeader('Content-Type','text/plain');
                     response.send({Message:"Updated",token});  
            });

     };
}

