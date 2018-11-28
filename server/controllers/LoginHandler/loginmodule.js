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



            //const username= request.param('username');
            //const password= request.param('password');

           const { username, password } = request.body ;
           //const username="bobo", password="bobo";
           //console.log(request.body);
           console.log("For username="+username+" && Password="+password);

            pool.query('SELECT * FROM public."user" WHERE username=\''+username+'\' AND password=\''+password+'\'', (error, results) => {
                          if (error) {
                                throw error
                           }

                           console.log(results.rows[0].username);
                           console.log(typeof username);
                           console.log(typeof results.rows[0].username);
                
                           if (results.rows[0].username.trim()!==username && results.rows[0].password.trim()!==password) {
                                response.setHeader('Content-Type','text/plain');
                                response.send("Unable to Login"); 
                                response.end();

                           }
                           else{
                                //response.setHeader('Content-Type','text/plain');
                                //response.send("Logged in with ");
                                //}
                           

                          jwt.sign( results.rows[0], 'privatekey', { expiresIn: '1h' },(err, token) => {
                                  
                                  if(err) { console.log(err); }    
                                  //res.send(token);
                                  //response.setHeader('Content-Type','Application/json');
                                  //response.send("Logged in with "+token);
                                  response.setHeader('authorization',token);
                                  response.send({token, message: "Logged In", username});
                           });
                        }
                           


            });

                     
	   

   };

}
