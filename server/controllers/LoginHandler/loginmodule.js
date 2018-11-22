import fs from 'fs';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const Pool = require('pg').Pool;


export class loginclass{

    constructor(){

            this.tosendflag="true";
    };



    login(request,response){

            const pool = new Pool({
                                    user: 'postgres',
                                    host: 'localhost',
                                    database: 'sendit',
                                    password: '1234',
                                    port: 7777,
                                 });

           //const { username, password } = request.body ;
           const username="bobo", password="bobo";

            pool.query("SELECT * FROM user WHERE username='"+username+"' AND password='"+password+"'", (error, results) => {
                          if (error) {
                                throw error
                           }
                
                           if (results.rows[0].username!==username) {
                                response.setHeader('Content-Type','text/plain');
                                response.send("Unable to Login"); 
                                response.end();

                           }

                          jwt.sign( results.rows, 'privatekey', { expiresIn: '1h' },(err, token) => {
                                  
                                  if(err) { console.log(err); }    
                                  //res.send(token);
                                  response.setHeader('Content-Type','text/plain');
                                  response.send("Logged in with "+token);
                           });


            });

                     
	   

   };

}
