Quick Express app to showcase simple routing and form upload parsing using either bodyParser or Multer.

### Installation and setup
* run ```$ npm install```

### Usage
* run ```$ node app.js```
* open localhost:8000 on your browser

### Notes
* when creating a form uploading a field, remember to specify the multipart encoding.
* the order of imports and declaration is weird, as I grouped thing belonging to the same package together to better follow the flow.
* multer can read ```multipart/form-data```, which can also include text fields, but can not read ```application/x-www-form-urlencoded```, which is what bodyparser does. AFAIK busboy does both, but it's more convoluted. Might take a look at formidable some day.
* files are uploaded to a /uploads directory by default, if you change it remember to change it in the .gitignore file too
