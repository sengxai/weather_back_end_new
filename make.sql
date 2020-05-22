DROP DATABASE IF EXISTS weather;
DROP USER IF EXISTS weather_user@localhost;

CREATE DATABASE weather CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER weather_user@localhost IDENTIFIED BY '@HOPE9les2LEE5slim$CHANCE';
GRANT ALL PRIVILEGES ON weather.* TO weather_user@localhost;
