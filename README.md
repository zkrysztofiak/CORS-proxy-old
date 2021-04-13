# CORS proxy demo

_URL shortener_ is a web application that allows shortening links

---

## Business requirements

#### Conclusions of the analysis carried out according to the Event Storming methodology (phase: MVP|2.0)

##### Functional requirements

-  [x] System should allow entering a URL and transform it into a short, internally interpretable URL (MVP)
-  [x] System should validate the entered URL based on the agreed regular expression (MVP)
-  [x] Once you have entered the URK to the System - the system places a shortened link to the _Clipboard_ (MVP)
-  [ ] After saving, in browsing mode, the System facilitates copying the shortened URL to the _Clipboard_ by clicking on the appropriate item (2.0)
-  [x] System should allow browsing data in the form of a table with pagination (MVP),
   -  [x] full text search and filtering and highlighting (MVP)
   -  [ ] searching/filtering individual columns (2.0)
   -  [ ] sorting columns (2.0)
-  [x] System should allow the owner to edit the URL (MVP)
-  [x] System should allow the owner to delete the entered URL (MVP)
-  [x] Regular user can only delete his own entries (MVP)
-  [ ] The administrator can delete any entries (2.0)
-  [ ] System should have an access control mechanism based on the aka RBAC role-based access control (2.0).
-  [x] The system will provide reports:
   -  [x] _bar type chart_ - by date - number of operations per day (MVP)
   -  [x] _pie type chart_ - by date - number of operations per day (MVP)

##### Non-functional requirements:

-  [ ] The system must be secured with authentication and authorization.
       Transmission between server and the user should be kept confidential.
       SSL or an equivalent solution required. (2.0)
-  [x] The system must run on the most popular today browsers available on the market:
   -  Internet Explorer (version 7 or later),
   -  Firefox (version 3.6 or later),
   -  Chrome (version 5.0 or later)
   -  Opera (version 9.64 or later)
   -  Safari 5 / 4.0.4 (version 3.2.3 or later)
-  [ ] The application will be available 24/7/365 on average 99.5% of the time. During the next 5 years of using it. (2.0)

#### Technical decomposition / architecture

n/a


### Install & spinning up

1. Clone rep
2. Install dependiences for API && client
3. Run API
4. Run client

```
$ git clone https://github.com/zkrysztofiak/CORS-proxy.git
$ cd CORS-proxy
$ cd API
$ npm install
$ nodemon server.js --ignore db.json *OR* node server.js  // run API on http://localhost:4001
Result: API listening on: http://locahost:4001

$ cd ../client
$ npm install
$ npm start     // run web app on http://localhost:3000
Result: web app (React) started in default browser
```
