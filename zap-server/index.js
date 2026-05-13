const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()
// Middleware to 
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.1qf4r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    // connect collection
    const database = client.db("zap-shift")
    const reviewCollection = database.collection("reviews")
    const serviceCenterCollection = database.collection("serviceCenter")
    // get all reviews
    app.get("/reviews", async (req, res) => {
        const cursor = reviewCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    // get all service centers
    app.get("/service-centers", async (req, res) => {
        const cursor = serviceCenterCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// Router
app.use("/", (req, res) => {
    res.send("Zap Server is running");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})