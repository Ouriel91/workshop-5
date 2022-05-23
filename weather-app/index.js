import { AsyncWeather } from "@cicciosgamino/openweather-apis";
import  {myLogger}  from "mondayu-logger-ouriell"
import http from "http";
// import your own logger

// step 1: install lib and print temp to console
const apiKey = "030b031e06fc07ede8c098688255c3b1";
const weatherInitializer = new AsyncWeather();
const weatherAPI = await weatherInitializer;

weatherAPI.setApiKey(apiKey)
weatherAPI.setCityId(293397)

const temp = await weatherAPI.getTemperature()

//console.log(temp)

// step 2: server
// create your server here from http module
// example in the slides or here: https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/
const requestListener = (req, res) => {
    res.writeHead(200)
    res.end("done")
}

const server = http.createServer(requestListener)
server.listen(8080)

// start your server

// step 3: install your logger and log temp and server start
// log that the service has started

myLogger.log(temp)