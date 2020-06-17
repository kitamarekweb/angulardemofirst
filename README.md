Angulardemofirst:

### Angular 9 Tutorial: Learn to Build a CRUD Angular App Quickly PROJECT 
https://www.djamware.com/post/5e435e84a8d0ef4300ffc5f6/angular-9-tutorial-learn-to-build-a-crud-angular-app-quickly#new-angular-9-app

================================================================= 

### How To Build Simple RESTful API With NodeJs, ExpressJs And MongoDb PROJECT 
https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d

=================================================================

### Prepare DATA: https://github.com/didinj/coronavirus-restapi.git

1) clone repository to your hard drive
2) navigate to cloned reposiotory folder (coronavirus-restapi)
3) run: npm install
4) install (if missing) MongoDB Community Server from https://treehouse.github.io/installation-guides/windows/mongo-windows.html
5) nodemon watches your files and restarts express-server when there are changes: npm install -g nodemon
6) start project - go to coronavirus-restapi folder and type in cmd line: nodemon ./bin/www
7) create folder "C:\data\db" and go to MongoDB folder and cmd line: C:\Program Files\MongoDB\Server\4.2\bin>mongod
8) Data: From Postman do a POST to http://localhost:3000/api with this JSON data in the Body:

[

{ "name": "An Kang",
"gender": "Female",
"age": 56,
"address": "Unknown",
"city": "Unknown",
"country": "China",
"status": "Dead" },

{ "name": "Benjamin Zhengmain Pan",
"gender": "Male",
"age": 55,
"address": "Unknown",
"city": "Unknown",
"country": "China",
"status": "Dead" },

{ "name": "Bill Liu",
"gender": "Male",
"age": 78,
"address": "Unknown",
"city": "Unknown",
"country": "China",
"status": "Recovered" },

{ "name": "Cai Dongchen",
"gender": "Female",
"age": 43,
"address": "Unknown",
"city": "Unknown",
"country": "Vietnam",
"status": "Positive" },

{ "name": "Cai Hongbin",
"gender": "Female",
"age": 64,
"address": "Unknown",
"city": "Unknown",
"country": "Vietnam",
"status": "Positive" },

{ "name": "Cai Kui",
"gender": "Female",
"age": 68,
"address": "Unknown",
"city": "Unknown",
"country": "Vietnam",
"status": "Positive" },

{ "name": "Cao Ji",
"gender": "Female",
"age": 39,
"address": "Unknown",
"city": "Unknown",
"country": "Vietnam",
"status": "Positive" },

{ "name": "Cao Longxlang",
"gender": "Male",
"age": 35,
"address": "Unknown",
"city": "Unknown",
"country": "Vietnam",
"status": "Positive" },

{ "name": "Cen Junda",
"gender": "Male",
"age": 34,
"address": "Unknown",
"city": "Unknown",
"country": "Vietnam",
"status": "Positive" },

{ "name": "Chan Laiwa",
"gender": "Female",
"age": 41,
"address": "Unknown",
"city": "Unknown",
"country": "Vietnam",
"status": "Positive" },

{ "name": "Chanchai Ruayrungruang",
"gender": "Male",
"age": 49,
"address": "Unknown",
"city": "Unknown",
"country": "India",
"status": "Positive" },

{
"name": "John Doe",
"gender": "Male",
"age": "39",
"address": "1243 Main St.",
"city": "Midland",
"country": "USA",
"status": "Recovered" }

]

=================================================================

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
