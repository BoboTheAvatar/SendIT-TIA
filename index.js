import express from 'express';
import fs from 'fs';
//const express = require("express");
import  bodyParser from 'body-parser';
import router from './server/routes/routing.js';
//import {rootin} from './server/routes/routing.js';

const app=express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//console.log(router);

app.use('/api/v1', router.router);
//app.use('/api/v1', rootin());


app.use('/', (req,res)=>{

    
    fs.readFile("Launch.html", (err, data) =>{
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    else{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    }
    });
});





const server=app.listen(process.env.PORT || 8080, () => {
          let host=server.address().address;
          let port=server.address().port;
          console.log("server listening at http://"+host+":"+port+"/");
});
