// Helping Travis to start the server Slowly 10 sec
import dotenv from 'dotenv';
const Pool = require('pg').Pool;

dotenv.config();

const pool = new Pool({
                user: process.env.DB_USER,
                host: process.env.DB_HOST,
                database: process.env.DB_NAME,
                password: process.env.DB_PASS,
                port: process.env.DB_PORT
});


let psql='CREATE DATABASE sendit';
pool.query(psql, (error, results) => {
                     if (error) {
                            throw error
                     }else{

                     console.log("Parcel Created!");
                    }
            });


psql='CREATE TABLE public."user"'+
'('+
    'id integer NOT NULL DEFAULT nextval('"user_Id_seq"'::regclass),'+
    'name character(20) COLLATE pg_catalog."default",'+
    'sex character(2) COLLATE pg_catalog."default",'+
    'address character(20) COLLATE pg_catalog."default",'+
    'email character(30) COLLATE pg_catalog."default",'+
    'telephone character(15) COLLATE pg_catalog."default",'+
    'username character(20) COLLATE pg_catalog."default",'+
    'password character(20) COLLATE pg_catalog."default",'+
    'token character(50) COLLATE pg_catalog."default",'+
    'CONSTRAINT user_pkey PRIMARY KEY (id)'+
')';
pool.query(psql, (error, results) => {
                     if (error) {
                            throw error
                     }else{

                     console.log("Parcel Created!");
                    }
            });


psql='CREATE TABLE public."order"(id character(30) COLLATE pg_catalog."default",sender character(20) COLLATE pg_catalog."default",info character(30) COLLATE pg_catalog."default",'+
    'pickup character(20) COLLATE pg_catalog."default",'+
    'platitude character(10) COLLATE pg_catalog."default",'+
    'plongitude character(10) COLLATE pg_catalog."default",'+
    'destination character(20) COLLATE pg_catalog."default",'+
    'dlatitude character(10) COLLATE pg_catalog."default",'+
    'dlongitude character(10) COLLATE pg_catalog."default",'+
    'current character(20) COLLATE pg_catalog."default",'+
    'clatitude character(10) COLLATE pg_catalog."default",'+
    'clongitude character(10) COLLATE pg_catalog."default",'+
    'weight integer,'+
    'price integer,'+
    'receiver character(20) COLLATE pg_catalog."default",'+
    'telephone character(15) COLLATE pg_catalog."default",'+
    'status character(15) COLLATE pg_catalog."default"'+
    ')';
pool.query(psql, (error, results) => {
                     if (error) {
                            throw error
                     }else{

                     console.log("Parcel Created!");
                    }
            });



psql='INSERT INTO "order" (id,sender, info, pickup, platitude, plongitude, destination, dlatitude, dlongitude, current, clatitude, clongitude, weight, price, receiver, telephone, status) VALUES (\'1\',\'bobo\',\'laptop\',\'kk78\',\'322\',\'98\',\'326\',\'56\',\'124\',\'34\',\'54\',\'67\',\'78\',\'123\',\'Hariyali\',\'986543457\',\'In Progress\')';
pool.query(psql, (error, results) => {
                     if (error) {
                            throw error
                     }else{

                     console.log("Parcel Created!");
                    }
            });




psql='INSERT INTO "user" (id,name, sex, address, email, telephone, username, password, token) VALUES (\'1\',\'Bobo\',\'M\',\'KK12\',\'bobotheavatar@gmail.com\',\'6754345689\',\'bobo\',\'bobo\',\'\')';
pool.query(psql, (error, results) => {
                     if (error) {
                            throw error
                     }else{

                     console.log("User Created!");
                    }
            });

console.log("Starting Delayer 10 sec");

  const myVar = setTimeout(myFunction, 10000);
  function myFunction() {
    console.log("Ending Delayer. Good Luck! :)");
  }

