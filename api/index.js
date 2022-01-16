const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { send } = require('process');
const axios = require('axios');

const MY_API_KEY = '4ae0984b70fe4f1fbed15522221601';
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

const getIP = require('external-ip')();


const server = express();

server.set('trust proxy', true)

server.name = 'Weather World';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});


server.get('/v1' , async (req, res) => {
     res.send('server OK')
         })

server.get('/v1/location' , async (req, res) => {
     
    
    
    try {
        
       console.log('primero')
       const miCity = await getIP ((err, ip) => {
           axios.get(`http://ip-api.com/json/${ip}?fields=status,message,country,city,query`)
           .then((res) => {
             let ipDetails = res.data;
             return ipDetails;
           })
           .catch((err) => {
             res.json(err)
           })
         })
        miCity.then((res))
        const resp = Promise.all([miCity])
        console.log(miCity)
        res.json(resp)
     }
     catch (err) {
         res.send(err)
     }
         })  

server.get('/v1/current' , async (req, res) => {
     try {
        const miCity = await getIP ((err, ip) => {
           axios.get(`http://ip-api.com/json/${ip}?fields=status,message,country,city,query`)
           .then((res) => {
              ciudad = res.data.city;
             return ciudad;
         })
       })
       let city = await ciudad;  
        console.log(city)
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?q=${city}&hour=12&days=5&lang=es&key=${MY_API_KEY}`)
        res.json(response.data)   
     }
     catch (err) {
         res.send(err)
     }
         })  
         
server.get('/v1/current/:city' , async (req,res) => {
  let citySelected = req.params.city
  if (citySelected) {
    try {
     const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?q=${citySelected}&hour=12&days=5&lang=es&key=${MY_API_KEY}`)
       return res.json(response.data)  
    }
    catch (err) {
       return res.sendStatus(200).json(err)
    }
  }
})

server.get('/v1/forecast' , async (req, res) => {
  try {
     const miCity = await getIP ((err, ip) => {
        axios.get(`http://ip-api.com/json/${ip}?fields=status,message,country,city,query`)
        .then((res) => {
           ciudad = res.data.city;
          return ciudad;
      })
    })
    let city = await ciudad;  
     console.log(city)
     const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?q=${city}&hour=12&days=5&lang=es&key=${MY_API_KEY}`)
     res.json(response.data)   
  }
  catch (err) {
      res.send(err)
  }
      })  


server.get('/v1/forecast/:city' , async (req,res) => {
  let city = req.params.city
  
  try {
    if (city) {
    const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?q=${city}&hour=12&days=5&lang=es&key=${MY_API_KEY}`)
    res.json(response.data)  
      }
  }
  catch (err) {
    res.sendStatus(404).json(err)
  }
})


server.listen(3001, () => {
    console.log('Server operating on port 3001')
})