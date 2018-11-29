
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const Pool = require('pg').Pool;


export class loginclass{

    constructor(){

            this.tosendflag="true";
    };



    login(request,response){

            const pool = new Pool({
                user: process.env.DB_USER,
                host: process.env.DB_HOST,
                database: process.env.DB_NAME,
                password: process.env.DB_PASS,
                port: process.env.DB_PORT
            });



            //const username= request.param('username');
            //const password= request.param('password');

           const { username, password } = request.body ;
           //const username="bobo", password="bobo";
           //console.log(request.body);
           console.log("For username="+username+" && Password="+password);

            pool.query('SELECT * FROM public."user" WHERE username=\''+username+'\' AND password=\''+password+'\'', (error, results) => {
                          if (error) {
                                console.log(error);
                                response.send({token:"xxx", message:"Server down. Please try again later.", username});
                                response.end();

                           }
                           //console.log(results.rows[0].username);

                           if(results.rows[0]===undefined){
                                response.send({token:"xxx", message:"Cannot find User '"+username+"' using entered credentials.", username});
                                response.end();
                           }
                           else if(results.rows[0].username.trim()!==username && results.rows[0].password.trim()!==password) {
                                response.send({token:"xxx", message:"Unable to login User: "+username, username});
                                response.end();

                           }
                           else{

                          jwt.sign( {username: results.rows[0].username}, 'privatekey', { expiresIn: '2h' },(err, token) => {
                                if(err) { console.log(err); }    
                                response.setHeader('authorization',token);
                                response.send({token, message: username+" Logged In", username});
                                response.end();
                           });
                        }
                           


            });

                     
	   

   };

}
