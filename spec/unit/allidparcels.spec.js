//require("babel-core");
const request=require('request');
//const AllIdParcelsApiFunction=require('../../server/controllers/AllIdParcelsHandler/allidparcelsmodule');
//const AllIdParcelsApi=require('../../server/controllers/AllIdParcelsHandler/allidparcelsmodule');

const loginfo={
   username:'bobo', 
   password:'bobo'
};

let jwt="", auth="";

const reqinfo={
  token:"",
  id: "bobo"
};


describe("Select All ID Parcels Test With JWT", () => {

    beforeEach(function() {

      console.log(reqinfo);
      
      request.post('http://localhost:8080/api/v1/auth/login',{json:true, body:loginfo}, (error, response, body) =>{
        jwt=body.token;
        auth="Bearer "+jwt;
        reqinfo.token=jwt;
        //console.log(jwt);
        console.log(auth);
      });

    });
    
    let url = "http://localhost:8080/api/v1/users/bobo/parcels";

    //let apifn=new AllIdParcelsApi.allidparcelsclass();
    
    //let result="Forbidden";

    it("returns status 200", (done)=> {
      request(url, {json:true, headers: {Authorization: auth , body:reqinfo}}, (error, response, body) =>{
      	//console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+response.statusCode);
        expect(response.statusCode).toEqual(200);
        done();
      });
    });

    it("returns the expected result",(done) =>{
      request(url, (error, response, body) =>{
        //expect(body).toBeUndefined();
        //expect(response.body).toEqual("Restricted")
        done();
      });
    });


});
