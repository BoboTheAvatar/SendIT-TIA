# SendIT-TIA

[![Build Status](https://travis-ci.org/BoboTheAvatar/SendIT-TIA.svg?branch=develop3)](https://travis-ci.org/BoboTheAvatar/SendIT-TIA)  ___  [![Maintainability](https://api.codeclimate.com/v1/badges/fe3e48a3f1e3b476207c/maintainability)](https://codeclimate.com/github/BoboTheAvatar/SendIT-TIA/maintainability)

API designed to interact with the SendIT web application.
API integrating the SendIT System Product.

# SendIT Product Description:

SendIT is a courier service that helps users deliver parcels to different destinations. SendIT provides courier quotes based on weight categories.
Required Features:
1. Users can create an account and log in.
2. Users can create a parcel delivery order.
3. Users can change the destination of a parcel delivery order.
4. Users can cancel a parcel delivery order.
5. Users can see the details of a delivery order.
6. Admin can change the status and present location of a parcel delivery order.

Optional Features (Extra Credit):
1. The application displays a Google Map with Markers showing the pickup location
and the destination.
2. The application displays computed travel distance and journey duration between
the pickup location and the destination. Leverage Google Maps Distance Matrix Service.
3. The user gets real-time email notification when Admin changes the status of their parcel.
4. The user gets real-time email notification when Admin changes the present location of
their parcel.

# APPLICATION DEVELOPMENT TOOLS:
- Front-End: HTML, CSS, Javascript
- Back-End: NodeJS/ExpressJS (ES6)
- Storage : Json File.

# PATH USED TO ACCESS RESOURCES
Here are the path:
- GET /parcels > Get all parcels
- GET /parcels/:parcelId > Get all parcels from a specific user
- GET /users/:Id/parcels > Get all parcels from a specific user
- PUT /parcels/:Id/cancel > Cancel a parcel order
- PUT /parcels/:Id/location > Change the current location of a parcel
- PUT /parcels/:Id/delivered > Change the status of a parcel
- POST /parcels > Create an order

e.g: localhost:8080/api/v1/parcels


# TIA Kigali Bootcamp Project November 2018
