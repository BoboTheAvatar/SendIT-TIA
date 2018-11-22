import fs from 'fs';
import bodyParser from 'body-parser';
const Pool = require('pg').Pool;


export class addidaccountclass{

    constructor(){

            this.tosendflag="true";
    };



    addidaccount(request,response){

            const pool = new Pool({
                                    user: 'postgres',
                                    host: 'localhost',
                                    database: 'sendit',
                                    password: '1234',
                                    port: 7777,
                                 });

            const { name, sex, email, telephone, username, password, address } = request.body ;

            pool.query("SELECT * FROM public.'user' WHERE username='"+username+"'", (error, results) => {
                          if (error) {
                                throw error
                           }
                
                           if (results.rows[0].username===username) {
                                response.setHeader('Content-Type','text/plain');
                                response.send("User already Exists. Please change Username."); 
                                response.end();

                           }

            });


            const sql="INSERT INTO public.'user'(Id, Name, Sex, Address, Email, Telephone, username, password, Token)"+

            " VALUES ('','"+name+"','"+sex+"','"+address+"','"+email+"','"+telephone+"','"+username+"','"+password+"','0',)";

            const getUsers = (request, response) => {
                                 pool.query(sql, (error, results) => {
                                          if (error) {
                                                       throw error
                                                     }
                                 })
                             };

            response.setHeader('Content-Type','text/plain');
            response.send("Created!");         
	   

   };

}
