import fs from 'fs';
import bodyParser from 'body-parser';
const Pool = require('pg').Pool;


export class changestatusclass{

    constructor(){

            this.tosendflag="true";
    };



    changestatus(request,response){

            const pool = new Pool({
                                    user: 'postgres',
                                    host: 'localhost',
                                    database: 'sendit',
                                    password: '1234',
                                    port: 7777,
                                 });

            const id=request.params.Id;
            const status=request.param('stat');

            //localhost:8080/api/v1/parcels/id3/status?stat="In Progress"

            //const {status} = request.body;

            pool.query("UPDATE public.\"order\" SET status ='"+status+"' WHERE id ='"+id+"'", (error, results) => {
                          if (error) {
                                throw error;
                           }
                           response.setHeader('Content-Type','text/plain');
                           response.setHeader('statusCode',200);
                           response.send("Updated!"); 

            });        
	   

   };

}
