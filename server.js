const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const location = [
    {
        
        address: "222 W Lamar St, Americus, GA 31709",
        hours: "Tuesday - Saturday @ 5pm - 9pm"
    }
]

app.use(express.static('./src'));

app.get('/api/location', (req,res) =>{
    res.send(location);
})
app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/src/Home.html' )
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});