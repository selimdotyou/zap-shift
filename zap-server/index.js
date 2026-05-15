const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()
const stripe = require('stripe')(process.env.Stripe_Secret_Key);
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
    // parcel collection will be added later when needed
    const parcelCollection = database.collection("parcels")

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

    // parcel related api start here
    app.post('/parcels', async (req, res) => {
      const parcelData = req.body;
      //  created time 
      parcelData.createdAt = new Date();
      const result = await parcelCollection.insertOne(parcelData);
      res.send(result);
    })

    // get parcel by query email
    app.get('/parcels', async (req, res) => {
      const email = req.query.email;
      const query = {}
      if (email) {
        query.senderEmail = email;
      }
      const cursor = parcelCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    })

    // delete parcel by id
    app.delete('/parcel/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await parcelCollection.deleteOne(query);
      res.send(result);
    })

    // get parcel by id
    app.get('/parcel/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await parcelCollection.findOne(query);
      res.send(result);
    })


    // payment intent api
    app.post('/create-payment-intent', async (req, res) => {
      const parcelInfo = req.body;
      const amount = parseInt(parcelInfo.cost * 100); // convert to cents
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'usd',
              unit_amount: amount,

              product_data: {
                name: `Payment for ${parcelInfo.parcelName}`,
              },
            },

            quantity: 1,
          },
        ],

        mode: 'payment',
        customer_email: parcelInfo.senderEmail,
        metadata: {
          parcelId: parcelInfo.parcelId,
        },
        success_url: `${process.env.Site_Domain}/dashboard/payments-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.Site_Domain}/dashboard/payments-cancel`,

      });
      res.send({ url: session.url });
    })

    //  handle stripe payment success
    app.patch('/payment-success', async (req, res) => {
      const sessionId = req.query.session_id;
      // retrieve the session from stripe
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      if(session.payment_status === 'paid'){
        const parcelId = session.metadata.parcelId;
        const query = { _id: new ObjectId(parcelId) };
        const updateDoc = {
          $set: {
            paymentStatus: "Paid",
            transactionId: session.payment_intent,
          }
        }
        const result = await parcelCollection.updateOne(query, updateDoc);
        res.send(result);
      }

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