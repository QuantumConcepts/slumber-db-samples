const Util = require("util");
const SlumberDb = require("slumber-db");

const config = new SlumberDb.Config(8080, "./data");
const dbProcessor = new SlumberDb.DbProcessor(config);
const server = new SlumberDb.HttpServer(config, dbProcessor);
const sampleUrl = Util.format("http://localhost:%s/{database_name}/{entity_name}", config.port);

server.run(() => {
    console.log();
    console.log("You may start working with the server by sending requests in as follows:");
    console.log();
    console.log("POST to the following URL to create a new entity.");
    console.log("\t%s", sampleUrl);
    console.log();
    console.log("PUT to the following URL to update an entity.");
    console.log("\t%s/{entity_id}", sampleUrl);
    console.log();
    console.log("GET from the following URL to get all entities.");
    console.log("\t%s", sampleUrl);
    console.log();
    console.log("GET from the following URL to get all entities matching the query.");
    console.log("\t%s?{field_name}.equals={some_value}", sampleUrl);
    console.log();
    console.log("DELETE to the following URL to delete an entity.");
    console.log("\t%s/{entity_id}", sampleUrl);
});