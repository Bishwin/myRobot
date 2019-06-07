# Robot Tech Exercise

## About
control an imaginary robot to clean a room  
if robot lands on a "dirty" patch the robot will "clean" it  
robot will output its finishing position and the total "dirty" patches it cleaned

## Technology used:
This application was written using `nodejs` and `express`, using `mongoose` to persist data to a MongoDB database.
`Chai` and `Mocha` were used for testing and assertions

## project setup
* npm install application
* configure database
* run with `npm run start`

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


