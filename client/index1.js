const http = require('http');
const url = require('url');
const fs = require('fs');

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
	const reqUrl = url.parse(req.url).pathname;
	if (reqUrl == '/') {
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
	} else if (reqUrl == '/hello') {
		res.write('hello world');
		res.end();
	} else {
		res.write('obslugi nie i nie będzie');
		res.end();
	}
});

server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});

function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('demo').innerHTML = this.responseText;
		}
	};
	xhttp.open('GET', 'ajax_info.txt', true);
	xhttp.send();
}
