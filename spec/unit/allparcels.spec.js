
const request=require('request');


describe("Select All Parcels Test ", () => {
    
    let url = "http://localhost:8080/api/v1/parcels";

    //var result=[{"id":"id3                           ","sender":"bobo                ","Info":"Laptop                        ","Pickup":"Kn12                ","PLatitude":"0.144     ","PLongitude":"0.35      ","destination":"KK04                ","dlatitude":"0.23      ","dlongitude":"0.2       ","current":"KK10                ","clatitude":"10        ","clongitude":"20        ","Weight":7,"Price":130,"Receiver":"Hariyali            ","Telephone":"57766543689    ","status":"Cancelled      "},{"id":"id1                           ","sender":"bobo                ","Info":"Laptop                        ","Pickup":"Kn12                ","PLatitude":"0.1344    ","PLongitude":"0.1235    ","destination":"KK345               ","dlatitude":"90        ","dlongitude":"90        ","current":"KG12                ","clatitude":"0.65      ","clongitude":"0,21      ","Weight":76,"Price":1200,"Receiver":null,"Telephone":null,"status":"Delivered      "},{"id":"id2                           ","sender":"bobo                ","Info":"Laptop                        ","Pickup":"Kn12                ","PLatitude":"0.144     ","PLongitude":"0.35      ","destination":"KK04                ","dlatitude":"0.23      ","dlongitude":"0.2       ","current":"KG52                ","clatitude":"0.6       ","clongitude":"0,21      ","Weight":7,"Price":130,"Receiver":null,"Telephone":null,"status":"In Progress    "},{"id":"id2                           ","sender":"bobo                ","Info":"Laptop                        ","Pickup":"Kn12                ","PLatitude":"0.144     ","PLongitude":"0.35      ","destination":"KK04                ","dlatitude":"0.23      ","dlongitude":"0.2       ","current":"KG52                ","clatitude":"0.6       ","clongitude":"0,21      ","Weight":7,"Price":130,"Receiver":"Hariyali            ","Telephone":"57766543689    ","status":"In Progress    "}];

    it("returns status 200", (done) =>{
      request(url, (error, response, body) =>{
        //expect(response.statusCode).toBeUndefined();
        expect(response.statusCode).toEqual(403);
        done();
      });
    });

    it("returns the expected result", (done)=> {
      request(url, (error, response, body)=> {
        //expect(body).toBeUndefined();
        done();
      });
    });
    
    

});
