import fs from 'fs';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Joi from 'joi';
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

            const schema = Joi.object().keys({
                                name: Joi.string().min(2).max(10).required().error(new Error('Your name is not in the right format.')),
                                sex: Joi.string().min(1).max(6),
                                username: Joi.string().alphanum().min(3).max(30).required().error(new Error('Please modify your username.')),
                                password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('Please, your password must be alphanumeric.')),
                                telephone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required().error(new Error('Please your telephone is not in the format XXX-XXX-XXXX.')),
                                email: Joi.string().email({ minDomainAtoms: 2 }).error(new Error('Please, your email is not right.')),
                                address: Joi.string().alphanum().min(3).max(30)
                            });

            const {name, sex, email, telephone, username, password, address } = request.body ;


            const resultvalidation = Joi.validate({ name, sex, email, telephone, username, password, address }, schema);

            if(resultvalidation.error!==null){
                      console.log(resultvalidation);
                      response.send({message: resultvalidation.error.message});
                      response.end();
            }
            else{

            pool.query('SELECT * FROM public."user" WHERE username=\''+username+'\' OR email=\''+email+'\'', (error, results) => {
                          if (error) {
                                console.log(error);
                                response.send({message: "Server down. Please try later."});
                                throw error;
                           }

                           else if(results.rows.length>0) {

                                response.send({message:"Credentials already Exists."}); 
                                response.end();
                           }
                           else{

                            const sql='INSERT INTO public."user"(id,Name, Sex, Address, Email, Telephone, username, password, Token) VALUES (DEFAULT,\''+name+'\',\''+sex+'\',\''+address+'\',\''+email+'\',\''+telephone+'\',\''+username+'\',\''+password+'\',\'\')';
                            
                            console.log(sql);

                            pool.query(sql, (error, results) => {
                                          if (error) {
                                                       console.log(error);
                                                       response.send({message: "Server down. Please try later."});
                                                       throw error;
                                                     }
                                          else
                                          {
                                          //response.setHeader('Content-Type','text/plain');
                                          response.send({Message:"User Created"}); 
                                          }
                                 });

                            
                          }       
	   

                });

              }

          }

}
