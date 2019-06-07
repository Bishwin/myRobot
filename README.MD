# Robot Tech Exercise

## About
control an imaginary robot to clean a room  
if robot lands on a "dirty" patch the robot will "clean" it  
robot will output its finishing position and the total "dirty" patches it cleaned

## Technology used:
This application was written using `nodejs` and `express`, using `mongoose` to persist data to a MongoDB database.
`Chai` and `Mocha` were used for testing and assertions

## project setup

### requirements
* node
* mongodb or mongo atlas (your own url can be added as a env var or edit `database.config.js`)
* postman or curl to test POST endpoint

### setup db 
docker command supplied if no mongo is installed locally

```
$ mkdir ~/data
$ sudo docker run -d -p 27017:27017 -v ~/data:/data/db mongo
```
to view db contents
```
$ mongo localhost/SampleDB
$ db.hooverlogs.find()
```

### setup app
* `npm install` for dependencies
* `npm run start`  
* for testing `npm run test-unit`


## Using application
send a POST request to url `localhost:3000/hoover/clean` with curl or postman
with payload
```
{
  "roomSize" : [5, 5],
  "coords" : [1, 2],
  "patches" : [
    [1, 0],
    [2, 2],
    [2, 3]
  ],
  "instructions" : "NNESEESWNWW"
}
```

application will run through instructions and output its finishing position and patches cleaned:
```
{
    "coords": [1,3],
    "patches": 1
}
```

a log will be persisted to mongodb, which contains the input and output


