const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

/*app.use('/api/sauces', (req, res, next) => {

  const stuff = [
    {
      _id:'sauce 1',
      name:'sauce 1',
      manufacturer:'sauce',
      description:'sauce',
      heat:'7',
      likes:'',
      dislikes:'',
      imageUrl:'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      mainPepper:'sauce',
      usersLiked:'',
      usersDisliked:'',
      userId:'sauce',
    },
    {
      _id:'sauce 2',
      name:'sauce 2',
      manufacturer:'sauce',
      description:'sauce',
      heat:'9',
      likes:'',
      dislikes:'',
      imageUrl:'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      mainPepper:'sauce',
      usersLiked:'',
      usersDisliked:'',
      userId:'sauce',
    },
    {
      _id:'sauce 4',
      name:'sauce 1',
      manufacturer:'sauce',
      description:'sauce',
      heat:'7',
      likes:'',
      dislikes:'',
      imageUrl:'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      mainPepper:'sauce',
      usersLiked:'',
      usersDisliked:'',
      userId:'sauce',
    },
    {
      _id:'sauce 3',
      name:'sauce 3',
      manufacturer:'sauce',
      description:'sauce',
      heat:'5',
      likes:'',
      dislikes:'',
      imageUrl:'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      mainPepper:'sauce',
      usersLiked:'',
      usersDisliked:'',
      userId:'sauce',
    },
  ];
  res.status(200).json(stuff);
});
*/
module.exports = app;

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const Thing = require('./models/Thing')

mongoose.connect('mongodb+srv://ineslmahdi:Feeling1532@cluster0.wxafoym.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


//const app = express();
/*
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});*/

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(bodyParser.json())

app.use('/api/sauces', stuffRoutes);

app.use('/api/auth', userRoutes);

