//require("babel-core");
const request=require('request');
//const AllIdParcelsApiFunction=require('../../server/controllers/AllIdParcelsHandler/allidparcelsmodule');
//const AllIdParcelsApi=require('../../server/controllers/AllIdParcelsHandler/allidparcelsmodule');


describe("Select All ID Parcels Test ", () => {
    
    let url = "http://localhost:8080/api/v1/users/bobo/parcels";

    //let apifn=new AllIdParcelsApi.allidparcelsclass();
    
    let result="Forbidden";

    it("returns status 403", (done)=> {
      request(url, (error, response, body) =>{
      	//console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+response.statusCode);
        expect(response.statusCode).toEqual(403);
        done();
      });
    });

    it("returns the expected result",(done) =>{
      request(url, (error, response, body) =>{
        //expect(body).toBeUndefined();
        done();
      });
    });


});
