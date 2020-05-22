const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

let credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));
let connection = mysql.createConnection(credentials);
connection.connect();

function rowToObject(row){
	return{
		city: row.city,
		state: row.state,
		country: row.country,
		weatherCond: row.weatherCond,
		temp: row.temp,
		tempFeels: row.tempFeels,
		id: row.id
	};
}

app.get('status/:city/:state', (request, response) => {
	const query = 'SELECT city, state, country, weatherCond, temp, tempFeels, id FROM weather';
	const params = [request.params.city, request.params.state];
	connection.query(query, params, (error, rows) => {
		response.send({
			ok: true,
			status: rows.map(rowToObject),
		});
	});
});

const port = 3444;
app.listen(port, () => {
	console.log(`We're live on port ${port}!`);
});
