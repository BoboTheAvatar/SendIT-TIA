import fs from 'fs';
import  bodyParser from 'body-parser';

export function getallparcels(request,response){

		          //import fs from 'fs';
              //import  bodyParser from 'body-parser';
              
              let jsontosend={};

            let filedata=fs.readFileSync("./server/models/jsonfile.json", (err, data) => {
              if (err) {
                  return err;
              }else{
                  return data;
              }

            });


            let jsondata=JSON.parse(filedata), x="";
            
              for(x in jsondata.users){
                      jsontosend[x]=jsondata.users[x].Orders;
             }

             //console.log(jsontosend);


            response.setHeader('Content-Type','application/json');
            response.send(jsontosend);         
	   
};
