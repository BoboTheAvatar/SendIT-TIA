import fs from 'fs';
const Pool = require('pg').Pool;
//import bodyParser from 'body-parser';

export class addidparcelsclass{

    constructor(){

            this.tosendflag="true";
    };



    addidparcels(request,response){


              const pool = new Pool({
                                    user: 'postgres',
                                    host: 'localhost',
                                    database: 'sendit',
                                    password: '1234',
                                    port: 7777,
                                 });

            //const { name, sex, email, telephone, username, password, address } = request.body ;
            const { token,sender,info,pickup,plat,plong,destination,dlat,dlong,current,clat,clong,weight,price,receiver} = request.body ;

            const date = new Date();
            const timestamp = date.getTime();

            let id="id"+timestamp;/*
            let sender= request.param('sender') ? request.param('sender'): "Void"; 
            let info= request.param('info') ? request.param('info'): "Void"; //request.param('info');  
            let pickup= request.param('pickup');  
            let plat= request.param('plat');  
            let plong= request.param('plong'); 
            let destination= request.param('destination'); 
            let dlat= request.param('dlat'); 
            let dlong= request.param('dlong'); 
            let current= request.param('current');  
            let clat= request.param('clat');  
            let clong= request.param('clong');  
            let weight= request.param('weight'); 
            let price= request.param('price'); 
            let receiver= request.param('receiver'); 
            let telephone= request.param('telephone'); */
            let status="In Progress";

        

            const sql='INSERT INTO public."order"(id,sender, info, pickup, platitude, plongitude, destination, dlatitude, dlongitude, current, clatitude, clongitude, weight, price, receiver, telephone, status) VALUES (\''+id+'\',\''+sender+'\',\''+info+'\',\''+pickup+'\',\''+plat+'\',\''+plong+'\',\''+destination+'\',\''+dlat+'\',\''+dlong+'\',\''+current+'\',\''+clat+'\',\''+clong+'\',\''+weight+'\',\''+price+'\',\''+receiver+'\',\''+telephone+'\',\''+status+'\')';
                            
            console.log(sql);

            pool.query(sql, (error, results) => {
                            if (error) {
                                          throw error;
                                        }
                            else{
                            //response.setHeader('Content-Type','text/plain');
                            response.send({token, Message:"Created"}); 
                            }

                      });     
           
	   

     };

}
