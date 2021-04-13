const express = require('express');
const fs = require('fs');
const axios = require('axios');

const app = express();
const host = 'localhost';
const port = 3000;

// prettier-ignore
app.use((req, res, next) => { console.log( `-- ${new Date().toISOString().slice(0, 19).replace('T', ' ')} ${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}` );
	next();
});

app.get('/', (req, res) => {
	fs.readFile(__dirname + '/index.html', function (error, indexHTML) {
		if (error) {
			res.writeHead(404);
			res.write('Contents you are looking are Not Found');
		} else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(indexHTML);
		}
		res.end();
	});
});

app.get('/api/*', (req, res) => {
	const endPoint = req.params[0];
	// console.log('--req.params: ', req.params);
	console.log('--endPoint: ', endPoint);
	axios
		.get(endPoint)
		.then((response) => {
			console.log(response.data);
			// console.log(response.data.explanation);
			return res.status(200).send(response.data);
		})
		.catch((error) => {
			console.log(error);
			console.log('/api/* sent 404 not found:', endPoint);
			res.status(404).send('URLs not found');
		});
});
// console.log('__dirname:', __dirname);
app.listen(port, host, () => console.log(`APP listening on: http://${host}:${port}`));

// nodemon index.js --ignore db.json
