const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const chokidar = require('chokidar');
let watcher = chokidar.watch('./server');


let whitelist = ['http://localhost:3000'];

let corsOptions = {
    origin(origin, cb){
        if(whitelist.indexOf(origin)!==-1){
            cb(null, true);
        }else{
            cb(new Error('Origin Rejected'));
        }
    }
};

app.use(cors(corsOptions));

let isProduction = process.env.NODE_ENV === "production";

if(!isProduction){
   watcher.on('ready', ()=>{
       watcher.on('all', ()=>{
           Object.keys(require.cache).forEach(id=>{
               if(/[\/\\]server[\/\\]/.test(id)){
                   delete require.cache(id);
               }
           })
       })
   })
}

let randomCountriesSet1 = ["canada", "india", "england"];
let randomCountriesSet2 = ["maldives", "thailand", "china"];
let randomCountriesSet3 = ["russia", "belgium", "france"];
let randomCountriesSet4 = ["france", "spain", "italy"];

let fullArray = ["canada", "india", "england", "maldives", "thailand", "china",
"russia", "belgium", "france", "france", "spain", "italy"];

let randomPick = Math.ceil(Math.random() * randomCountriesSet4.length);

function randomStart(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomEnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const shuffled = fullArray.sort(() => 0.5 - Math.random());
let start = randomStart(0,11);
let end = randomEnd(0,11);
let selected = shuffled.slice(start, end);

app.get('/', (req, res)=>{
   res.send("Hello Deepak");
});

app.get('/user', (req, res)=>{
    let q = req.query.q;
    if(q.length === 1){
        res.json({data: randomCountriesSet1});
    }
    if(q.length === 2){
        res.json({data: randomCountriesSet2});
    }
    if(q.length === 3){
        res.json({data: randomCountriesSet3});
    }
    if(q.length >=4){
        res.json({data: randomCountriesSet4});
    }
});
   




const PORT = 5000 || process.env.PORT;
app.listen(PORT, ()=>{
    console.log("The server is listening on port 5000");
});

