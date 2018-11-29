
const request=require('request');


describe("Select One ID parcels Test ", () => {

    let url = "http://localhost:8080/api/v1/parcels/id111";

    let result='Forbidden';

    it("returns status 200", (done) =>{
      request(url, (error, response, body) =>{
        //expect(response.statusCode).toBeUndefined();
        expect(response.statusCode).toEqual(200);
        done();
      });
    });

    it("returns the expected result", (done) =>{
      request(url, (error, response, body) =>{
        //expect(body).toBeUndefined();
        expect(response.body).toEqual("Restricted");
        done();
      });
    });


});
