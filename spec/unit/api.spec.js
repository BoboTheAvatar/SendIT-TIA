//require("babel-register");

require("@babel/register");
const express= require('express');

//const AllIdParcelsApi=require('../../server/controllers/AllIdParcelsHandler/allidparcelsmodule');

const AllParcelsApi = require('../../server/controllers/AllParcelsHandler/allparcelsmodule');
const IdParcelsApi = require('../../server/controllers/IdParcelsHandler/idparcelsmodule');
const AllIdParcelsApi = require('../../server/controllers/AllIdParcelsHandler/allidparcelsmodule');
const CancelIdParcelsApi = require('../../server/controllers/CancelIdParcelsHandler/cancelidparcelsmodule');
const AddIdParcelsApi = require('../../server/controllers/AddIdParcelsHandler/addidparcelsmodule');
const LocationIdParcelsApi = require('../../server/controllers/LocationIdParcelsHandler/locationidparcelsmodule');
const DeliveredIdParcelsApi = require('../../server/controllers/DeliveredIdParcelsHandler/deliveredidparcelsmodule');

const a=new AllIdParcelsApi.allidparcelsclass();
const b=new AddIdParcelsApi.addidparcelsclass();
const c=new AllParcelsApi.allparcelsclass();
const d=new CancelIdParcelsApi.cancelidparcelsclass();
const e=new DeliveredIdParcelsApi.deliveredidparcelsclass();
const f=new IdParcelsApi.idparcelsclass();
const g=new LocationIdParcelsApi.locationidparcelsclass();

const api=new AllIdParcelsApi.allidparcelsclass();



const loginfo={
   username:'bobo', 
   password:'bobo'
};

let jwt="", auth="";

const reqinfo={
  token:"",
  id: "bobo"
};

const request={
  body:{
    "token":"jkjlk",
    "id": "bobo"
  }
};

const response={
  setHeader(){
  },
  send(){
  }
};






describe('HTTP Server Test', function() {

  /*
  beforeEach(function() {

      request.headers['body']={
        token:'bnds',
        id: 'bobo'
      }

    });*/


  describe('All id parcels', function() {
    it('should be:', function() {
      
       expect(a.tosendflag).toBeTruthy();
       //expect(a.sender).toBeUndefined();
       expect(a.getallidparcels(request,response)).not.toEqual(0);
       //expect(a.getallidparcels()).toContain("Forbidden");
       expect(a.getallidparcels).toThrow();
    });
  });

  

  describe('Add id parcels', function() {
    it('should be:', function() {
      
       expect(b.tosendflag).toBeTruthy();
       expect(b.addidparcels).toThrow();
       //expect(b.addidparcels()).toContain("Forbidden");
    });
  });
  describe('All parcels', function() {
    it('should be:', function() {
      
       expect(c.tosendflag).toBeTruthy();
       expect(c.getallparcels).toThrow();
       //expect(c.getallparcels()).toContain("Done");
    });
  });
  describe('Cancel id parcels', function() {
    it('should be:', function() {
      
       expect(d.tosendflag).toBeTruthy();
       expect(d.cancelidparcels).toThrow();
       //expect(d.cancelidparcels()).toContain("Updated");
    });
  });
  describe('Delivered id parcels', function() {
    it('should be:', function() {
      
       expect(e.tosendflag).toBeTruthy();
       expect(e.deliveredidparcels).toThrow();
       //expect(e.deliveredidparcels()).toContain("Updated");
    });
  });
  describe('Id parcels', function() {
    it('should be:', function() {
      
       expect(f.tosendflag).toBeTruthy();
       expect(f.getidparcels).toThrow();
       expect(f.getidparcels(request,response)).not.toEqual(0);
       //expect(f.getidparcels()).toContain("Forbidden");
    });
   });
    describe('Location Id parcels', function() {
    it('should be:', function() {
      
       expect(g.tosendflag).toBeTruthy();
       expect(g.locationidparcels).toThrow();
       //expect(g.locationidparcels()).toContain("Updated");
    });
  });


});
