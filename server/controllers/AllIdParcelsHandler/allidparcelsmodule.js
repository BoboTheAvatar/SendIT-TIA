import fs from 'fs';
import  bodyParser from 'body-parser';

export class allidparcelsclass{

    constructor(){

            //const jsontosend={};
    }

    getallidparcels(request,response){

		          
              
            let jsontosend={};

            let filedata=fs.readFileSync("./server/models/jsonfile.json", (err, data) => {
              if (err) { 
                return err;
              }else{
                return data;
              }
            });


            let jsondata=JSON.parse(filedata), x="",id = request.params.Id;

            
              for(x in jsondata.users){
                    if(jsondata.users[x].Username===id){
                      jsontosend[x]=jsondata.users[x].Orders;
                    }
             }

             //console.log(jsontosend);


            response.setHeader('Content-Type','application/json');
            response.send(jsontosend);         
	   

    };

}
