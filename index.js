// const http = require('http');
// const fs = require('fs');

const express = require('express');
const { connectMongoDB } = require('./connection');
const { logReqRes } = require('./middlewares/index');
const userRoutes = require('./routes/user');
const urlRoutes = require('./routes/url');
const staticRoutes = require('./routes/staticRouter')

//const users = require('./MOCK_DATA.json');
const URL = require('./models/url');


const app = express();
const PORT = process.env.PORT || 3000;
connectMongoDB();

// Set EJS for server side scripting
app.set('view engine', 'ejs'); // set EJS as the template engine
app.set('views', './views');   // default is ./views

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

// routes
app.use("/api/users", userRoutes);
app.use("/url", urlRoutes);

app.use("/", staticRoutes);

// app.get('/', async (req, res) => {
//   const allUrls = await URL.find({});
//   res.render('url', { urls: allUrls, title: 'Home Page', message: 'Hello from EJS!' })
// })


app.get('/:shortId', async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate({
    shortId
  }, {
    $push: { visitHistory: { timestamp: Date.now() } }
  })
  console.log(entry.reDirectURL);
  res.redirect(entry.reDirectURL);
})


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
// app.get('/about', (req, res)=> {
//   return res.send("hello from about page")
// })
//const myServer = http.createServer(app);

// const server = http.createServer((req, res) => {
//   const log = `${Date.now()}: ${req.url} : ${req.method} New Req Recieved\n`;
//   fs.appendFile('.\log.txt', log, (err, data) => {
//     if (err) {
//       console.log('error', err);
//     }
//     else {
//       routes(req, res);
//     }
//   })

// });

//const math = require("./math");
//console.log(math.add(3, 5));