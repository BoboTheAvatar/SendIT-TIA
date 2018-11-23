//require("babel-register");
require("@babel/register");
const express= require('express');
const expect  = require("chai").expect;
const http=require("http");
var assert = require('assert');

const request = require("request");

const AllIdParcelsApi=require('../server/controllers/AllIdParcelsHandler/allidparcelsmodule');

const server = require('../index.js');

const api=new AllIdParcelsApi.allidparcelsclass();


describe('HTTP Server Test', function() {


  describe('/', function() {
    it('should be Hello, Mocha!', function() {
      
       expect(api.tosendflag).to.equal("true");

    });
  });
});

/*describe("API End-point Testing", function() {

  //Testing No 1

  describe("Get all parcels of 1 user", function() {
    
    let url = "http://localhost:8080/api/v1/users/bobobuya/parcels";

    //console.log(url);;
    let apifn=new AllIdParcelsApi.allidparcelsclass();



    it("Check Function Variable", function() {
        expect(apifn.jsontosend).toBeDefined();
    });



  });

 

});*/
