import fs from 'fs';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
const Pool = require('pg').Pool;

dotenv.config();

export class addidaccountclass{

    constructor(){

            this.tosendflag="true";
    };



    addidaccount(request,response){

            const pool = new Pool({
                                    user: process.env.DB_USER,
                                    host: process.env.DB_HOST,
                                    database: process.env.DB_NAME,
                                    password: process.env.DB_PASS,
                                    port: process.env.DB_PORT
                                 });

            const { token, name, sex, email, telephone, username, password, address } = request.body ;
            /*
            let name= request.param('name'); 
            let sex= request.param('sex');  
            let email= request.param('email');  
            let telephone= request.param('telephone');  
            let username= request.param('username'); 
            let password= request.param('password'); 
            let address= request.param('address'); */

            pool.query('SELECT * FROM public."user" WHERE username=\''+username+'\'', (error, results) => {
                          if (error) {
                                throw error
                           }

                           console.log(results.rows);
                           console.log(results.rows.length);

                
                           if(results.rows.length>0) {
                                response.setHeader('Content-Type','text/plain');
                                response.send("User already Exists. Please change Username."); 
                                response.end();

                           }
                           else{

                            const sql='INSERT INTO public."user"(id,Name, Sex, Address, Email, Telephone, username, password, Token) VALUES (DEFAULT,\''+name+'\',\''+sex+'\',\''+address+'\',\''+email+'\',\''+telephone+'\',\''+username+'\',\''+password+'\',\'\')';
                            
                            console.log(sql);

                            pool.query(sql, (error, results) => {
                                          if (error) {
                                                       throw error
                                                     }
                                          //response.setHeader('Content-Type','text/plain');
                                          response.send({Message:"Created",token}); 
                                 });

                            
                          }       
	   

                });

          }

}
