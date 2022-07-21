import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient} from 'mongodb';

const courses = [{
    id: '123',
    title: "Programming 101",
    subject: "Programming",
    description: "Intro Programming Class! Learn the basics of html,css, and javascript.",
    credits: 3,
    imageUrl: '/sdevbackend/src/laptop.png'
  }, {
    id: '234',
    title: "College Algebra",
    subject: "Mathematics",
    description: "Intro College Algebra Class!",
    credits: 2,
    imageUrl: '/sdevbackend/src/laptop.png'
  }, {
    id: '345',
    title: "US History",
    subject: "History",
    description: "Intro History Class!",
    credits: 3,
    imageUrl: '/sdevbackend/src/laptop.png'
  }, {
    id: '456',
    title: "English Comp",
    subject: "English",
    description: "Intro English Class!",
    credits: 4,
    imageUrl: '/sdevbackend/src/laptop.png'
  }];
  
  export let cartItems = [
    courses[0],
    courses[2],
    courses[3],
  ];

const app = express();
app.use(bodyParser.json());

app.get('/api/courses', async (req, res) => {
    const client = await MongoClient.connect(
        'mongodb://localhost:27017',
        { useNewUrlParser: true, useUnifiedTopology: true}
    );
    const db = client.db('vue-db');
    const courses = await db.collection('courses').find({}).toArray();


    res.status(200).json(courses);
    client.close();
});

app.get('/api/users/:userId/cart', (req, res) => {
    res.status(200).json(cartItems);
});

app.get('/api/courses/:courseId', (req, res) => {
    const { courseId } = req.params;
    const course = courses.find((course) => course.id === courseId);
    if (course) {
        res.status(200).json(course);
    } else {
        res.status(404).json('Could not find the course!');
    }
});

app.post('/api/users/:userId/cart', (req, res) => {
  const { courseId } = req.body;
  const course = courses.find(course => course.id === courseId);
  if (course) {
    cartItems.push(course);
    res.status(200).json(cartItems);
  } else {
    res.status(404).json('Could not find course!');
  }
});

app.delete('/api/users/:userId/cart/:courseId', (req, res) => {
  const { courseId } = req.params;
  cartItems = cartItems.filter(course => course.id !== courseId);
  res.status(200).json(cartItems);
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});