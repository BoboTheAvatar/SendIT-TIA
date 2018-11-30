
import  bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
const Pool = require('pg').Pool;

export class locationidparcelsclass{

    constructor(){

            this.tosendflag="true";
    }; 



    locationidparcels(request,response){
              


              const pool = new Pool({
                user: process.env.DB_USER,
                host: process.env.DB_HOST,
                database: process.env.DB_NAME,
                password: process.env.DB_PASS,
                port: process.env.DB_PORT
              });

              const{ token, parcelid, lat, long, loc, sender, username }=request.body;

              let emailuser="";
              let user="";
              

        jwt.verify(request.token, 'privatekey', (err, authorizedData) => {
            if(err){

                response.status(400).send({token, message: "Your token has a problem.", username});
                response.end(); 
            }
            else
            {
              

              pool.query('Select * from public."user" WHERE username=\''+sender+'\'', (error, results) => {
                     if (error) {
                            console.log(error);
                            response.status(500).send({token, message: "Server down. Please try later.", username});
                            throw error;
                     }
                     else{
                        emailuser=results.rows[0].email;
                        user=results.rows[0].name;
                        console.log(emailuser);
                     }
              });

              console.log('UPDATE public."order" SET current=\''+loc+'\', clatitude=\''+lat+'\' clongitude=\''+long+'\' WHERE id=\''+parcelid+'\''); 

              pool.query('UPDATE public."order" SET current=\''+loc+'\', clatitude=\''+lat+'\', clongitude=\''+long+'\' WHERE id=\''+parcelid+'\'', (error, results) => {
                     if (error) {
                            console.log(error);
                            response.status(500).send({token, message: "Server down. Please try later.", username});
                            throw error;
                     }
                     else{

                        /*
                        var transporter = nodemailer.createTransport({
                                                    service: 'gmail',
                                                    auth: {
                                                           user: 'bobotheavatar@gmail.com',
                                                           pass: '123456789'
                                                    }
                                          });

                        var mailOptions = {
                                           from: 'bobotheavatar@gmail.com',
                                           to: emailuser,
                                           subject: 'Current Parcel Location',
                                           text: 'Hello'+user+'!'
                                          };

                        transporter.sendMail(mailOptions, function(error, info){
                                          if (error) {
                                                  console.log(error);
                                          } else {
                                                  console.log('Email sent: ' + info.response);
                                          }
                        });
                         */

                        response.status(202).send({token, message: "Location Updated To "+loc+"", username});  
                     }
            });

            }

        });

      }
}

