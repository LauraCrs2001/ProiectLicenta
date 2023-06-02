const express = require('express');
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors');
const { prependListener } = require('process');
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.static(path.join(__dirname, '../client/public')));

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://lauricacristina:Laura2001@licenta.62vywdm.mongodb.net/papusi?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const pages = ["", "fete", "baieti", "figurine", "plusuri", "accesorii", "recenzii", "asistenta", "contact", "login", "signup", "favorite", "cos"];

for (var i = 0; i < pages.length; i++) {
    app.get('/' + pages[i], (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    })
}

// Define a schema and model for your data
const papusiSchema = new mongoose.Schema({
  nume: String,
  pret: Number,
  moneda: String,
  img: String,
  descriere: String

});

const Fete = mongoose.model('Fete', papusiSchema);

// Define an API endpoint to fetch items from the database
app.get('/api/fete', (req, res) => {
  async function getPapusi() {
    try {
        const fetes = await Fete.find({});
        res.json(fetes);
    } catch (err) {
        console.error(err);
    }
  }
  getPapusi();
});

const Baieti = mongoose.model('Baieti', papusiSchema);

// Define an API endpoint to fetch items from the database
app.get('/api/baieti', (req, res) => {
  async function getPapusi() {
    try {
        const baietis = await Baieti.find({});
        res.json(baietis);
    } catch (err) {
        console.error(err);
    }
  }
  getPapusi();
});

  const Figurine = mongoose.model('Figurine', papusiSchema);

// Define an API endpoint to fetch items from the database
app.get('/api/figurine', (req, res) => {
  async function getPapusi() {
    try {
        const figurines = await Figurine.find({});
        res.json(figurines);
    } catch (err) {
        console.error(err);
    }
  }
  getPapusi();
});

  const Plusuri = mongoose.model('Plusuri', papusiSchema);

// Define an API endpoint to fetch items from the database
app.get('/api/plusuri', (req, res) => {
  async function getPapusi() {
    try {
        const plusuris = await Plusuri.find({});
        res.json(plusuris);
    } catch (err) {
        console.error(err);
    }
  }
  getPapusi();
});


const Accesorii = mongoose.model('Accesorii', papusiSchema);

// Define an API endpoint to fetch items from the database
app.get('/api/accesorii', (req, res) => {
  async function getPapusi() {
    try {
        const accesoriis = await Accesorii.find({});
        res.json(accesoriis);
    } catch (err) {
        console.error(err);
    }
  }
  getPapusi();
});

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });