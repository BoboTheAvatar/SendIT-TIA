import express from 'express'; 
import fs from 'fs';
const router = express.Router();

import * as AllParcelsApi from '../controllers/AllParcelsHandler/allparcelsmodule';
import * as AddIdAccountApi from '../controllers/AddIdAccountHandler/addidaccountmodule';
import * as IdParcelsApi from '../controllers/IdParcelsHandler/idparcelsmodule';
import * as AllIdParcelsApi from '../controllers/AllIdParcelsHandler/allidparcelsmodule';
import * as CancelIdParcelsApi from '../controllers/CancelIdParcelsHandler/cancelidparcelsmodule';
import * as AddIdParcelsApi from '../controllers/AddIdParcelsHandler/addidparcelsmodule';
import * as LocationIdParcelsApi from '../controllers/LocationIdParcelsHandler/locationidparcelsmodule';
import * as DeliveredIdParcelsApi from '../controllers/DeliveredIdParcelsHandler/deliveredidparcelsmodule';
import * as loginApi from '../controllers/LoginHandler/loginmodule';
import * as changedestinationApi from '../controllers/ChangeDestinationHandler/changedestinationmodule';
import * as changestatusApi from '../controllers/ChangeStatusHandler/changestatusmodule';

const a=new AllIdParcelsApi.allidparcelsclass();
const b=new AddIdParcelsApi.addidparcelsclass();
const c=new AllParcelsApi.allparcelsclass();
const d=new CancelIdParcelsApi.cancelidparcelsclass();
const e=new DeliveredIdParcelsApi.deliveredidparcelsclass();
const f=new IdParcelsApi.idparcelsclass();
const g=new LocationIdParcelsApi.locationidparcelsclass();
const h=new AddIdAccountApi.addidaccountclass();
const i=new loginApi.loginclass();
const j=new changedestinationApi.changedestinationclass();
const k=new changestatusApi.changestatusclass();


//router.get('/parcels',AllParcelsApi.getallparcels); //Done Testing
router.get('/parcels', checkToken ,c.getallparcels);
//router.get('/parcels/:parcelId',IdParcelsApi.getidparcels); //Done Testing
router.get('/parcels/:parcelId', checkToken,f.getidparcels);
//router.get('/users/:Id/parcels',AllIdParcelsApi.getallidparcels; //Done Testing
router.get('/users/:Id/parcels', checkToken,a.getallidparcels);
//router.put('/parcels/:Id/cancel',CancelIdParcelsApi.cancelidparcels); // Testing>>
router.put('/parcels/:Id/cancel', checkToken,d.cancelidparcels); 
//router.post('/parcels',AddIdParcelsApi.addidparcels); // Testing>>
router.post('/parcels', checkToken,b.addidparcels);
//router.put('/parcels/:Id/location',LocationIdParcelsApi.locationidparcels); //Testing>>
router.put('/parcels/:Id/location', checkToken,g.locationidparcels);
//router.put('/parcels/:Id/delivered',DeliveredIdParcelsApi.deliveredidparcels); //Testing>>
router.put('/parcels/:Id/delivered', checkToken,e.deliveredidparcels);

//Sign Up
router.post('/auth/signup',h.addidaccount);
//Login
router.post('/auth/login',i.login);
//Change Destination
router.put('/parcels/:Id/destination', checkToken,j.changedestination);
//Change 
router.put('/parcels/:Id/status', checkToken,k.changestatus);



/*export function rootin(){
	return router;
}*/

export default {router};

function checkToken(req, res, next){
    const header = req.headers['authorization'];

    console.log(typeof header);

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        console.log(token);

        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        //res.sendStatus(403)
        
        res.setHeader('Content-Type','text/plain');
        res.send("Restricted");
        
    }
};
