import fs from 'fs';
//import bodyParser from 'body-parser';

export function addidparcels(request,response){


              const newdata={
                                        "Id":"id151",
                                        "Info":"Headphone",
                                        "Weight":"124",
                                        "Sender":"bobobuya",
                                        "Receiver":"Uwera",
                                        "Phone": "3552574454",
                                        "Departure":"Kg45",
                                        "Destination": "KK333",
                                        "Location":"KL153",
                                        "Price": "1217",
                                        "Status":"In Progress"           
                            };

            let filedata=fs.readFileSync("./server/models/jsonfile.json", (err, data) => {
              if (err) { return err;}
              else{return data;}
            });

            let jsondata=JSON.parse(filedata), id1 =newdata.Sender, t=newdata.Id;

            //console.log(id1+" >> "+t);

            //console.log(jsondata.users[id1].Orders);

            //jsondata.users[id1].Orders.NewPropertyName=t;
            jsondata.users[id1].Orders[t]=newdata;




            //console.log(jsondata.users[id1].Orders[t]);
            //console.log(jsondata.users[id1]);

            fs.writeFile('./server/models/jsonfile.json', JSON.stringify(jsondata), (err) => {
                           if (err) throw err;
                              //console.log('The file has been saved!');
                      });


            response.setHeader('Content-Type','application/plain');
            response.send("Done");         
	   

};


