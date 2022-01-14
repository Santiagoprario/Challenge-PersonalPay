const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//Instancio servidor de express
const server = express();

//Importo libreria para crear IDs unicos.
const { v4 : uuidv4 } = require('uuid')


server.name = 'API kiwibot Challenge';

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

const {deliveries, bots} = require('./firestore.js')

server.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

server.get('/' , async (req, res) => {
    const snapshot = await deliveries.get();
    let deliveriesArray = [];
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        deliveriesArray.push(doc)
      });
        if (!deliveriesArray) {
        res.send('No such document!');
          } else {
        res.json(deliveriesArray)
            }    
         })

server.get('/deliveries:id' , async (req, res) => {
    let { id } = req.query
    console.log(id)
    const deliveryRef = await deliveries.where('id', '==', id).get()
    console.log(deliveryRef)
    if (!deliveryRef) {
        res.send('No such document!');
      } else {
        res.json(deliveryRef)
            }    
         })

 server.get('/bots' , async (req, res) => {
    const snapshot = await bots.get();
    let botsArray = [];
    snapshot.forEach(doc => {
        botsArray.push(doc)
      });
        if (!botsArray) {
        res.send('No such document!');
          } else {
        res.json(botsArray)
            }    
         })        


server.post('/deliveries' , async (req, res) => {
     let { pickup_lat,pickup_lon,  dropoff_lat , dropoff_lon, zone_id} = req.body;
     const delivery = {
         id : uuidv4(),
         creation_date : new Date (),
         state : 'Pending',
         pickup : {
             pickup_lat : pickup_lat ,
             pickup_lon: pickup_lon
            },
         dropoff: {
             dropoff_lat : dropoff_lat,
             dropoff_lon : dropoff_lon
            },
         zone_id : zone_id, 
     }
    try {
     let created = await deliveries.add(delivery)
     console.log('Added document with ID: ' , created.id)
     res.send(created);
    } catch (err) {
        res.status(404).send(err);
    }
})

server.post('/bots' , async (req, res) => {
    let { location_lat , location_lon , zone_id } = req.body;
    const bot = {
        id: uuidv4(),
        status : "Available",
        location : {
            dropoff_lat: location_lat,
		    dropoff_lon: location_lon
        },
        zone_id : zone_id, 
    }
    console.log(bot)
   try {
    let created = await bots.add(bot)
    console.log('Added document with ID: ' , created.id)
    return res.send(created);
   } catch (err) {
    return res.status(404).send(err);
   }
})

server.put('/deliveries' , async (req,res) => {
  let { id , selectedBot , state} = req.body;
    if (state === 'Pending') { 
    const deliveryRef = await deliveries.where('id', '==', id).get()
    const deliveryOrder = deliveryRef.docs.map(e => {
      return {
          id: e.ref.id,
          state: e.data().state,
      }
    });
    console.log(deliveryOrder)
    const update = await deliveries.doc(deliveryOrder[0].id).update({ state : 'Assigned' })
    return res.json(update )}
     if (state === 'Assigned') {
      let { id , idBot , state} = req.body;
      const deliveryRef = await deliveries.where('id', '==', id).get()
      const deliveryOrder = deliveryRef.docs.map(e => {
        return {
            id: e.ref.id,
            state: e.data().state,
        }
      });
      console.log(deliveryOrder)
      const update = await deliveries.doc(deliveryOrder[0].id).update({ state : 'In_transit' })
      return res.json(update )
    }
    if (state === 'In_transit') {
      let { id , idBot , state} = req.body;
      const deliveryRef = await deliveries.where('id', '==', id).get()
      const deliveryOrder = deliveryRef.docs.map(e => {
        return {
            id: e.ref.id,
            state: e.data().state,
        }
      });
      console.log(deliveryOrder)
      const update = await deliveries.doc(deliveryOrder[0].id).update({ state : 'Delivered' })
      return res.json(update )
    }
    if (state === 'Delivered') {
      res.json({msg: 'No se puede cambiar esta orden ya que ha sido entregada'})
    }
    // const botRef = await bots.where('id', '==', idBot).get()
    // console.log(botRef.docs)
    // const botUpdate = botRef.docs.map(e => {
    //   return {
    //     id: e.r.id,
    //     status: e.data().status,
    //   }
    // })
    // const updateBot = await bots.doc(botUpdate[0].id).update({ status : 'Busy' })
    
})



server.listen(3001, () => {
    console.log('%s listening at 3001')
})