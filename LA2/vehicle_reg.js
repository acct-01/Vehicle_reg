/*const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/vehicleForm.html'));
});

app.use('/', router);

app.listen(port, hostname, () => {
	console.log(`Express app listening at http://${hostname}:${port}/`);
});
*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const hostname = 'localhost'
const port = '3030'

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
        res.sendFile(__dirname + "/" + "vehicleForm.html");
    });

app.post('/user', function(req, res){
        response = {
            CompanyName : req.body.CompanyName,
            Oname : req.body.Oname,
            ChasisNo: req.body.ChasisNo
            };
        
        console.log(response);
        
        res.end(JSON.stringify(response));
    });

app.listen(port, hostname, () => {
	console.log(`Express app listening at http://${hostname}:${port}/`);
});

