# Customer Engine

Services to maintain and find customer information.

API specified in swagger.json 

# Caveats

Security using authentication and/or api_key are not implemented. 

No hot reloading. Kill node to stop server.

No linter yet.

No logger yet.

Internal data storage.

# Installation 

* Install npm and node.js.
* Checkou/clone code.
* From within the checkout, run `DEBUG=customerEngine:* npm start`

# Usage 

## GET all customers
curl http://localhost:3000/app/v1/customers


## POST (Add) customer(s) 

curl -H "Content-Type: application/json" -X POST -d '[{"name":"Bob McDriver","company":"Big Trucks, LLC", "address": "456 Big Truck Rd., Big Town, OR 97124", "phone": "503-555-1234", "email": "something@bigtrucks.com"}]' http://localhost:3000/app/v1/customers

curl -H "Content-Type: application/json" -X POST -d '[{"name":"Bob McDriver","company":"Big Trucks, LLC", "address": "456 Big Truck Rd., Big Town, OR 97124", "phone": "503-555-1234", "email": "something@bigtrucks.com"}, {"name":"Julia Driverson","company":"We Haul, LLC", "address": "123 Takin It Away Ln., Busy City, OR 97124", "phone": "503-555-1234", "email": "something@wehaul.com"}]' http://localhost:3000/app/v1/customers


## PUT (Update) customer(s)

curl -H "Content-Type: application/json" -X PUT -d '[{"id": "1", "phone":"503-555-1234, xt. 99"}]' http://localhost:3000/app/v1/customers

curl -H "Content-Type: application/json" -X PUT -d '[{"id": "1", "name":"Fred McDriver", "email": "fred@bigtrucks.com"}, {"id": "2",  "email": "julia@wehaul.com"}]' http://localhost:3000/app/v1/customers


## GET a single customer

curl http://localhost:3000/app/v1/customers/1


## PUT (Update) a single customer 

curl -H "Content-Type: application/json" -X PUT -d '{"name":"Bob McDriver","company":"Big Trucks, LLC", "address": "456 Big Truck Rd., Big Town, OR 97124", "phone": "503-555-1234", "email": "something@bigtrucks.com"}' http://localhost:3000/app/v1/customers/1

## DELETE customer
curl -X DELETE http://localhost:3000/app/v1/customers/1

