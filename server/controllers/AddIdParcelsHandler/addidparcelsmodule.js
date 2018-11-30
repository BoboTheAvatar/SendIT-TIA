import Joi from 'joi';
const Pool = require('pg').Pool;
import jwt from 'jsonwebtoken';
//import bodyParser from 'body-parser';


export class addidparcelsclass{

    constructor(){

            this.tosendflag="true";
    };



    addidparcels(request,response){


              const pool = new Pool({
                                    user: process.env.DB_USER,
                                    host: process.env.DB_HOST,
                                    database: process.env.DB_NAME,
                                    password: process.env.DB_PASS,
                                    port: process.env.DB_PORT
                                 });


              jwt.verify(request.token, 'privatekey', (err, authorizedData) => {

              const { username, token,sender,info,pickup,plat,plong,destination,dlat,dlong,current,clat,clong,weight,price,receiver,telephone} = request.body ;

            
              if(err){

                response.status(400).send({token, message: "Your token has a problem.", username});
                response.end(); 
               }
               else
              {

              const schema = Joi.object().keys({
                                info: Joi.string().min(2).max(30).required().error(new Error('Give a small simple info about your parcel')),
                                telephone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required().error(new Error('Please your telephone is not in the format XXX-XXX-XXXX')),
                                receiver: Joi.string().min(3).max(30)
                            });

            //const { name, sex, email, telephone, username, password, address } = request.body ;
            
            const resultvalidation = Joi.validate({ info, telephone, receiver }, schema);

            if(resultvalidation.error!==null){
                      console.log(resultvalidation);
                      response.send({message: resultvalidation.error.message});
                      response.end();
            }
            else{

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
                                          console.log(error);
                                          response.status(500).send({token, message: "Server down. Please try later.", username});
                                          throw error;
                            }
                            else{
                            //response.setHeader('Content-Type','text/plain');
                            response.status(201).send({token, message: "Parcels Created with Identification: "+id, username});
                            }

                      }); 
            }    
           
	        }

           }); 

     };

}
