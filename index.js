const Hapi = require('hapi');
const api = require("./api/index");
// define some constants to make life easier
const DEFAULT_HOST = "localhost";
const DEFAULT_PORT = 3000;
const RADIX = 10;

// define your server
const server = Hapi.server({
    host: process.env.HOST || DEFAULT_HOST,
    port: parseInt(process.env.PORT, RADIX) || DEFAULT_PORT,
  });

  const myHapiServer = async () => {
    try {
        await server.register(api);
        await server.start();
    } catch (err) {

      console.log("Hapi error starting server", err);

    }
  };

  myHapiServer(); // don't forget to call it

