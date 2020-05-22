DROP TABLE IF EXISTS weather;

CREATE TABLE weather(
	id SERIAL PRIMARY KEY,
	city TEXT,
	state TEXT,
	country TEXT,
	weatherCond TEXT,
	temp DECIMAL(5,2),
	tempFeels DECIMAL(5,2)
			
);
