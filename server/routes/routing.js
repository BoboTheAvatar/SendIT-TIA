import express from 'express'; 
const router = express.Router();

import * as AllParcelsApi from '../controllers/AllParcelsHandler/allparcelsmodule';
import * as IdParcelsApi from '../controllers/IdParcelsHandler/idparcelsmodule';
import * as AllIdParcelsApi from '../controllers/AllIdParcelsHandler/allidparcelsmodule';
import * as CancelIdParcelsApi from '../controllers/CancelIdParcelsHandler/cancelidparcelsmodule';
import * as AddIdParcelsApi from '../controllers/AddIdParcelsHandler/addidparcelsmodule';
import * as LocationIdParcelsApi from '../controllers/LocationIdParcelsHandler/locationidparcelsmodule';
import * as DeliveredIdParcelsApi from '../controllers/DeliveredIdParcelsHandler/deliveredidparcelsmodule';

const a=new AllIdParcelsApi.allidparcelsclass();

router.get('/parcels',AllParcelsApi.getallparcels); //Done Testing
router.get('/parcels/:parcelId',IdParcelsApi.getidparcels); //Done Testing
//router.get('/users/:Id/parcels',AllIdParcelsApi.getallidparcels; //Done Testing
router.get('/users/:Id/parcels',a.getallidparcels);
router.put('/parcels/:Id/cancel',CancelIdParcelsApi.cancelidparcels); // Testing>>
router.post('/parcels',AddIdParcelsApi.addidparcels); // Testing>>
router.put('/parcels/:Id/location',LocationIdParcelsApi.locationidparcels); //Testing>>
router.put('/parcels/:Id/delivered',DeliveredIdParcelsApi.deliveredidparcels); //Testing>>


export function rootin(){
	return router;
}
