const express = require('express')
const mongoose = require('mongoose');
const app = express()

const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://dashboardAdmin:h9ln8R5KauHjRf5f@cluster0.rne0vce.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     console.log("database connented")
//     // perform actions on the collection object
//     client.close();
// });
async function run() {
    try {
      await client.connect();
      const dashbourdCollection = client.db("dashboarCollaction").collection("dashbord");
      app.get("/dBoard", async (req, res) => {
        const query = {};
        const cursor = dashbourdCollection.find(query);
        const dashboard = await cursor.toArray();
        console.log("runnung")
        res.send(dashboard);
      });
      
  
    } finally {
    }
  }
  
  run().catch(console.dir);
  

app.get('/', (req, res) => {
    res.send('Hello dashboard 2')
})
// dashboardAdmin
// h9ln8R5KauHjRf5f

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})