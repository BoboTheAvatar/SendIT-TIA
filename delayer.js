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

let psql='INSERT INTO "order" (id,sender, info, pickup, platitude, plongitude, destination, dlatitude, dlongitude, current, clatitude, clongitude, weight, price, receiver, telephone, status) VALUES (\'1\',\'bobo\',\'laptop\',\'kk78\',\'322\',\'98\',\'326\',\'56\',\'124\',\'34\',\'54\',\'67\',\'78\',\'123\',\'Hariyali\',\'986543457\',\'In Progress\')';
pool.query(psql, (error, results) => {
                     if (error) {
                            throw error
                     }else{

                     console.log("Parcel Created!");
                    }
            });
psql='INSERT INTO "user" (id,Name, Sex, Address, Email, Telephone, username, password, Token) VALUES (\'1\',\'Bobo\',\'M\',\'KK12\',\'bobotheavatar@gmail.com\',\'6754345689\',\'bobo\',\'bobo\',\'\')';
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

