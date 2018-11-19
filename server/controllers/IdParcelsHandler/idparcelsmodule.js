//import Database from "../Database";
import fs from 'fs';
import  bodyParser from 'body-parser';

export function getidparcels(request,response){
             
            
            let jsontosend={};

            let filedata=fs.readFileSync("./server/models/jsonfile.json", (err, data) => {
              if (err) {
                  return err
              }else{
                  return data;
              }

            });


            let jsondata=JSON.parse(filedata), id = request.params.parcelId, x="", y="";

              for(x in jsondata.users){
                for(y in jsondata.users[x].Orders){
                   //console.log(jsondata.users[x].Orders[y]);
                    if(jsondata.users[x].Orders[y].Id===id){
                      jsontosend[y]=jsondata.users[x].Orders[y];
                    }
                }
             }

             //console.log(jsontosend);


            response.setHeader('Content-Type','application/json');
            response.send(jsontosend);  

};


